Author: Daniela Gavidia

## Creating a New Workspace

There are various choices to be made when creating a new workspace in Cloud9 IDE. In this article, we'll walk you through the creation of a new workspace and describe the choices you encounter.

The first step for creating a new workspace is to click on the ![Workspace Add Icon](./icons/workspacePlusIcon.png) next to **MY PROJECTS**  in the Workspaces tab:
![New workspace creation](./images/newWorkspace.png)

At this point, you'll encounter two choices: **Create a new workspace** and **Clone from URL**. Here's what they mean:

### Create a New Workspace

After clicking on **Create a new workspace**, you're taken to the screen below:

![Options for creating a new workspace](./images/createNewWorkspaceOptions.png)

Enter a workspace name. Depending on whether you have a free of premium account, you'll have several choices for the types of workspace you can create:

* **Git workspace** allows you to run `git` commands from the console and push your changes to [a GitHub repo](./setting_up_github_workspace.html) or [a Bitbucket git repo](./setting_up_bitbucket_workspace.html).
* **Mercurial** allows you to run `hg` commands form the console and push your changes to [a Mercurial Bitbucket repo](./setting_up_bitbucket_workspace.html)
* **FTP** allows you to [upload your files directly to an FTP server](./ftp_workspaces.html) you have access to
* **SSH**, also called the "bring your own server" feature, lets you [log into a server you own](./run_your_own_vm.html) and run Cloud9 from there

Make a choice for the type of workspace and press **Create**. That's it! You can now see your new workspace in the dashboard:

![New workspace greeting](./images/createdWorkspace.png)

Now, just click **Start Editing** to get started!

### Clone from URL

The second option for creating a new workspace is to clone one from URL. The URL would be, for example, the URL of a GitHub workspace.

In fact, let's clone a workspace. When you click on **Clone from URL**, you're taken to this screen:  
![Options for cloning a workspace](./images/cloneWorkspaceOptions.png)

Paste the following GitHub URL in the textbox labeled **Source URL**: https://github.com/mattpardee/geekdots 

If you have a premium account, you can choose who has access to your workspace. For regular users, the new workspace will be public.

Now, check out the workspace. It will be created under **My Workspaces**. You can now start editing it!

### Deleting a workspace

Now that you know how to create a workspace, you should also learn how to delete one. Look at the far right side of your dashboard:

![Delete workspace screen](./images/deleteWorkspace.png)

Clicking on the **Delete** button prompts the IDE to ask for confirmation:  
![Confirmation of workspace deletion](./images/deleteConfirmation.png)

This is your last chance to change your mind. Once you have typed **delete** in the textbox and pressed the red button, your workspace will be gone forever from Cloud9. If you are sure you want to delete your workspace, go ahead and press the red button. Of course, if your workspace is hosted elsewhere, like on another git or FTP server, it still exists in those repositories.
