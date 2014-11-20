# FAQ: General

### Can I use FTP workspaces on Cloud9?
Yes, Cloud9 supports FTP workspaces that allow you to edit your files directly on your FTP server. 
Currently FTP workspaces still open in the old version of Cloud9, but soon we'll also support FTP workspaces with the new version of Cloud9.

One thing that was removed for reliability reasons in the new version of Cloud9, is the ability to deploy over FTP from a regular workspace.
We're bringing back those features in a new format and with much higher reliability in the coming months.

### How do I deploy to Heroku/Openshift/Azure/...? 
See [Deploying via CLI](./deploying_via_cli.html).

### Can I connect to SMTP servers (port 25)? 
No, this is not supported by our hosting platform. It does currently allow access to the GMail servers though, so you can use that service during development.

### My workspace says it's out of quota. how do I fix it? 
You can inspect your current quota usage with the df command in the Terminal:

    $ df

To find which files and directories are consuming a lot of space, go to a directory such as your home directory, and run this command:

    $ du -m -d 1 -a | sort -n

This should give you a list of all members of that directory and how much space they use in megabytes.

Alternatively, try `du-c9` for seeing all files you added to your workspace and account for the quota.

### I can't preview my running app.
Try using port 8080 instead, which often solves this case.

### EADDRINUSE: My app complains that the address/port is in use 
Applications won't start if another application is already listening to the same port. In order to fix it you first need to find out which process that is:

    $ netstat -nlp | grep $PORT

This will report the process id (PID) which you can then kill using

    $ sudo kill -9 <PID>

Often apache is still running in the background. In that case you can kill it using

    $ sudo pkill apache2

### How can I upload local files to my project?

Either drag a local file directly from your desktop into the Cloud9 file tree,
or use the "File > Upload Local Files" menu item.

## How can I download my project files?

Use "File > Download project". Currently, this will give you a .tar.gz file, which
ensures maximum portability. To open these files, you can use something like
[WinRAR](http://www.rarlab.com/) or [7-zip](http://www.7-zip.org/).

## How can I share a single directory of a private workspace

Sometime you might want others to open a file or directory in the browser 
without opening up the whole workspace. This can be done by starting a small 
http server in that directory and make sure that the running application is public.

To make the running application public you have to click the "sharing" button at
the top right and the check "public" for application.

To run the server open a terminal and do

    $ cd /dir/i/want/to/share
    $ python3 -m http.server 8080
