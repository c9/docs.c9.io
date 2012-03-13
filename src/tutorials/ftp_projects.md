Author: Daniela Gavidia

## Setting up an FTP project

<iframe width="480" height="360" src="http://www.youtube.com/embed/HehwOFg7jYc" frameborder="0" allowfullscreen></iframe>

In this article, we'll show you how to set up an FTP project. Before attempting to create an FTP project, please be aware that Cloud9 IDE currently support only passive FTP. Active FTP, SFTP and FTPS are **not yet supported**.

To create an FTP project, do the following: in the *Projects* tab on the Dashboard, click on the ![Project Add Icon](./icons/projectPlusIcon.png) next to **MY PROJECTS** and choose the option to **Create a new project** (see "[Creating a New Project](./creating_new_project.html)" if you need to review the steps to create a new project):  
![New project creation](./images/newProject.png)

In the pop-up window that appears, select **FTP** for the project type:

![FTP Options](./images/FTPoptions.png)

Let's review the options available for your FTP project:

* **Hostname**: the domain address or IP address of the machine running your FTP server.
* **Username**: your username for the FTP server.
* **Password**: your password for the FTP server.
* **Initial path**: this is an optional parameter. You can set it as an absolute (starts with `/`) path. Otherwise, it'll be set to a relative path, and Cloud9 assumes that you want to start from the folder your FTP server leaves you after login (_home_ or _default_ folder).

Warning: Be careful not to put an initial path that leaves you in a location where you don't have write privileges as that could cause problems.

Fill in your FTP details and click the **Login Test** to verify that the settings are correct. If the test succeeds, go ahead and click **Create** to create your FTP project. You'll then see your project in the Dashboard under My Projects:

![New FTP Project](./images/newFtpProject.png)

When your new FTP project is selected, you will see three buttons: **Start Editing**, **FTP settings**, and **Delete** (on the far right). **FTP settings** gives you access to the settings you just filled in, as well as the login test. This is useful to use in case your login credentials have changed.

To get started with your FTP project, click on the **Start Editing** button. You'll be taken to the editor. Under Project Files, you should see the files from the FTP server in the directory you selected (either your home/default folder or the location indicated by the Initial Path, if you set it). The editor for FTP projects works the same as in other projects: you can create and edit your files in the usual way. The main difference is the **FTP log** at the bottom of the page (where the console is usually located for other non-FTP projects).

The FTP log displays output related to the interaction with the FTP server. The screenshot below, for example, shows what happens when we create a new file called _TestFile.txt_. The file is created in the FTP server and when I write to it, the contents are transferred.

![Demonstrating new files in the FTP](./images/FTPlog.png)

Note: In an FTP project, all files are stored in your FTP server; Cloud9 only stores the FTP settings. Please keep this in mind. Cloud9 IDE does not keep any copies of your files, so make sure you back them up properly. Any changes you make to these files in Cloud9 are automatically reflected on the live web server.