# Creating a New Workspace
Cloud9 supports three types of workspaces:
1. Hosted
2. FTP
3. SSH

In this article, we'll walk you through the creation of a new workspace and describe the choices you encounter.

The first step for creating a new workspace is click the "CREATE NEW WORKSPACE" button in your Dashboard: 

![New workspace creation](./resources/images/newWorkspace.png)<249, 106>

At this point, you'll encounter two choices: **Create a new workspace** and **Clone from URL**. Here's what they mean:
* **Create a New Workspace** allows you to create any of the previously mentioned types of workspaces (hosted, FTP, or SSH).
* ** Clone from URL** allows you to instantly create a workspace from a repository, like GitHub or Bitbucket, using its URL. We'll explain more about this in the section below.

## Create a New Workspace

After clicking on **Create a new workspace**, you're taken to the screen below:

![Options for creating a new workspace](./resources/images/createNewWorkspaceOptions.png)<651, 151>

First, let's enter a workspace name.
Depending on whether you have a Free of Premium account, you can choose to make it either Public (open to anyone with the URL), or Private (only accessible to you and people you share it with).

After this, choose the type of workspace you want to create:

* **Hosted**: This is a regular Cloud9 workspace, powered by a full Ubuntu environment. You even have `sudo` powers! This is the best choice for most people, and we've included some more info about it below.
* **FTP** allows you to [upload your files directly to an FTP server](./ftp_workspaces.html) that you have access to
* **SSH**, also called the "bring your own server" feature, lets you [log into a server you own](./run_your_own_workspace.html) and run Cloud9 from there

Make a choice for the type of workspace and press **Create**. That's it! You can now see your new workspace in the dashboard:

![New workspace greeting](./resources/images/createdWorkspace.png)<574, 147>

Now, just click **Start Editing** to get started!

### Hosted workspaces
Choose this workspace type to start from scratch with a 'Custom' workspace, or simply pick a pre-configured environment like Node.js, WordPress, or Python/Django, and immediately start developing your app.
This way you don't need to spend valuable development time on system setup and maintenance, as we maintain it, and you control it. 

![Options for creating a hosted workspace](./resources/images/createHostedWorkspace.png)<647, 375>

As it's powered by a full Linux Ubuntu environment, hosted workspaces allow you to install any package (`sudo apt-get install package`), run `git` commands from the console to push your changes to [a GitHub repo](./setting_up_github_workspace.html) or [a Bitbucket git repo](./setting_up_bitbucket_workspace.html), etcetera.

## Cloning from a URL

The second option for creating a new workspace is to clone one from URL. The URL would be, for example, the URL of a GitHub workspace.

In fact, let's clone a workspace. When you click on **Clone from URL**, you're taken to this screen:

![Options for cloning a workspace](./resources/images/cloneWorkspaceOptions.png)<650, 105>

Paste the following GitHub URL in the textbox labeled **Source URL**: https://github.com/mattpardee/geekdots 

If you have a premium account, you can choose who has access to your workspace. For regular users, the new workspace will be public.

Now, check out the workspace. It will be created under **My Workspaces**. You can now start editing it!

## Deleting a Workspace

Now that you know how to create a workspace, you should also learn how to delete one. Look at the far right side of your dashboard:

![Delete workspace screen](./resources/images/deleteWorkspace.png)<315, 167>

Clicking on the **Delete** button prompts the IDE to ask for confirmation:  
![Confirmation of workspace deletion](./resources/images/deleteConfirmation.png)<445, 187>

This is your last chance to change your mind. Once you have typed **delete** in the textbox and pressed the red button, your workspace will be gone forever from Cloud9. If you are sure you want to delete your workspace, go ahead and press the red button. Of course, if your workspace is hosted elsewhere, like on another git or FTP server, it still exists in those repositories.
