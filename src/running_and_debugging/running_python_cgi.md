# Running a Python CGI server

In order to run a Python CGI server, you can start by creating a new workspace. It doesn't have to be a Python/Django workspace, even a Custom workspace would do. You would need to tell the Apache2 server already installed on the workspace to allow CGI scripts and to make sure it knows where to look for them.

Lets start by creating a very simple python CGI script: 

1. Create a folder within your workspace, name it `cgi-bin` (the name doesn't matter, although it is customary to use `cgi-bin`).
2. Within the `cgi-bin` folder, create a new file. Lets name it `test.py` for now.
3. Paste in the following:

```python
#!/usr/bin/env python

print "Content-type: text/html"
print ""

print """
<html>

<head><title>Sample CGI Script</title></head>

<body>
  <h3> Sample CGI Script </h3>
</body>
</html>
"""
```

Now, once we have a file we want to serve, lets start up the Apache web server. We can do that by creating a new runner. You can create a new runner by clicking on the + icon on the right of the tabs like shown below:

[![New Run Configuration](./resources/images/newRunConfiguration-new.png)]{: #NewRunConfiguration}

then select Apache httpd (PHP, HTML)

[![Select Apache Run Configuration](./resources/images/apacheRunConfiguration.png)]{: #ApacheRunConfiguration}

You can save this configuration by entering a name to the right of the `Command:` label like shown below.

[![Save Run Configuration](./resources/images/saveRunConfiguration.png)]{: #SaveRunConfiguration}


Click on the Run button and the apache server is ready to go. Click on the link that reads something like: `https://<workspace-name>-<your-username>.c9.io/` and you should see a browser come up with your folder listing. Clicking on the `cgi-bin` link and then the `test.py` link just shows up the text of the python file we wrote. Now that we have the server running, lets enable CGI on it.

The first thing we want to do is to enable CGI mode. We can do that by typing the following within the Terminal:

```bash
sudo a2enmod cgi
```

Next, we need to tell Apache where our CGI files are present. We can do that by editing the `serve-cgi-bin.conf` file. Do the following:

```bash
sudo vi /etc/apache2/conf-available/serve-cgi-bin.conf
```

The file should read something like this:

```
<IfModule mod_alias.c>
        <IfModule mod_cgi.c>
                Define ENABLE_USR_LIB_CGI_BIN
        </IfModule>

        <IfModule mod_cgid.c>
                Define ENABLE_USR_LIB_CGI_BIN
        </IfModule>

        <IfDefine ENABLE_USR_LIB_CGI_BIN>
                ScriptAlias /cgi-bin/ /usr/lib/cgi-bin/
                <Directory "/usr/lib/cgi-bin">
                        AllowOverride None
                        Options +ExecCGI -MultiViews +SymLinksIfOwnerMatch
                        Require all granted
                </Directory>
        </IfDefine>
</IfModule>
```

We just need to modify the following section from:

```
<IfDefine ENABLE_USR_LIB_CGI_BIN>
    ScriptAlias /cgi-bin/ /usr/lib/cgi-bin/
    <Directory "/usr/lib/cgi-bin">
        AllowOverride None
        Options +ExecCGI -MultiViews +SymLinksIfOwnerMatch
        Require all granted
    </Directory>
</IfDefine>
```

to 

```
<IfDefine ENABLE_USR_LIB_CGI_BIN>
    ScriptAlias /cgi-bin/ /home/ubuntu/workspace/cgi-bin/
    <Directory "/home/ubuntu/workspace/cgi-bin">
        AllowOverride None
        Options +ExecCGI -MultiViews +SymLinksIfOwnerMatch
        AddHandler cgi-script .cgi .py
        Require all granted
    </Directory>
</IfDefine>
```

Save this file and restart Apache.

Once Apache restarts, navigate to `https://<workspace-name>-<your-username>.c9.io/cgi-bin/test.py` (replacing `<workspace-name>` and `<your-username>` with your workspace name and your username of course) and see what happens? In case you're seeing something like **Internal Server Error** we need to make the files under cgi-bin to be executable.

You can do that by typing

```bash
chmod +x -R /home/ubuntu/workspace/cgi-bin
```

Restart Apache one last time and you should be able to see **Sample CGI Script**. 