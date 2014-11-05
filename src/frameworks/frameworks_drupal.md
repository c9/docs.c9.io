# Framework: Drupal
For Drupal there are some installation guides around which tell you to install PHP first, but that's not necessary with Cloud9.
You don't need to install MySQL either, it is already preinstalled in PHP workspaces. 
Just make a new workspace, choose PHP, go to the Terminal, and execute the following:

    cd $HOME
    curl -O http://ftp.drupal.org/files/projects/drupal-7.30.tar.gz
    tar xvf drupal-7.30.tar.gz
    mv drupal-7.30/* workspace/
    mv drupal-7.30/.htaccess workspace/
    cd $HOME/workspace
    mysql-ctl install
    mysql-ctl start
    mysql-ctl status
    
Open the file install.php in the file tree, and while opened, click on the "Run Project" button in the menu bar on top of the IDE.
An URL will be shown at the bottom of the page, something like "https://drupal-c9-lcipriani.c9.io/", but with your username and workspace name in it. 
 
**Copy the url in a new browser tab and you will see the install page of Drupal**

You can now proceed with the installer

![Drupal Installer](./resources/images/drupalFrameworkInstaller.png)<960, 640>

Now be careful inserting the correct values for the database. You need to change the values as follows:

    user: yourusername
    database: c9
    host: 127.0.0.1

Note: localhost will not work, while 127.0.0.1 will.

Open the Advanced Options in the database settings page as shown in the screenshot:

![Drupal Mysql](./resources/images/drupalFrameworkMysql.png)<960, 640>

Now fill the form with the correct site information:

![Drupal Site Info](./resources/images/drupalFrameworkSiteInfo.png)<960, 640>

Continue the setup and enjoy your website!

Note: if you are not able to load CSS, access your website WITHOUT using https, but use simple http; in another tab open the url: http://drupal-c9-lcipriani.c9.io/

![Drupal Site Installed](./resources/images/drupalFrameworkInstalled.png)<960, 640>
