# Create a Workspace
Cloud9 supports three types of workspaces:
1. Hosted
2. FTP
3. SSH

"Hosted" is the best choice for most people, so in this short "Getting Started" article we'll only describe this option; for other options please read the full [Creating a new workspace](./creating_new_workspace.html) article.

The first step for creating a new workspace is click the "CREATE NEW WORKSPACE" button in your Dashboard: 

![New workspace creation](./resources/images/newWorkspace.png)<249, 106>

At this point, you'll encounter two choices: **Create a new workspace** and **Clone from URL**. 
In this article we'll only describe the **Create a New Workspace** option, which allows you to create any of the previously mentioned types of workspaces (hosted, FTP, or SSH).

After clicking on **Create a new workspace**, you're taken to the screen below:

![Options for creating a new workspace](./resources/images/createNewWorkspaceOptions.png)<651, 151>

First, let's enter a workspace name.
Depending on whether you have a Free or Premium account, you can choose to make it either Public (open to anyone with the URL), or Private (only accessible to you and people you share it with).

After this, choose the type of workspace you want to create:

* **Hosted**: This is a regular Cloud9 workspace, powered by a full Ubuntu environment. You even have `sudo` powers!
* **FTP** allows you to [upload your files directly to an FTP server](./ftp_workspaces.html) that you have access to
* **SSH**, also called the "bring your own server" feature, lets you [log into a server you own](./run_your_own_workspace.html) and run Cloud9 from there

Choose the "Hosted" workspace type to start from scratch with a 'Custom' workspace, or simply pick a pre-configured environment like Node.js, WordPress, or Python/Django, and immediately start developing your app.
This way you don't need to spend valuable development time on system setup and maintenance, as we maintain it, and you control it. 

![Options for creating a hosted workspace](./resources/images/createHostedWorkspace.png)<647, 375>

As it's powered by a full Linux Ubuntu environment, hosted workspaces allow you to install any package (`sudo apt-get install package`), run `git` commands from the console to push your changes to [a GitHub repo](./setting_up_github_workspace.html) or [a Bitbucket git repo](./setting_up_bitbucket_workspace.html), etcetera.

Now press **Create**. That's it! You can now see your new workspace in the dashboard:

![New workspace greeting](./resources/images/createdWorkspace.png)<574, 147>

Now, just click **Start Editing** to get started!

Next up, read how to [run an application](run_an_application.html) and [set up a database](setup_a_database.html).
