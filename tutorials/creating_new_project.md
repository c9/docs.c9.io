## Creating a New Project

There are various choices to be made when creating a new project in Cloud9 IDE. In this article, we'll walk you through the creation of a new project and describe the choices you encounter.

The first step for creating a new project is to click on the "+" next to **My Projects** in the Projects tab:
![New project creation](./images/newProject.png)

At this point, you'll encounter two choices: **Create a new project** and **Clone from URL**. Here's what they mean:

#### Create a New Project

After clicking on **Create a new project**, you're taken to the screen below:

![Options for creating a new project](./images/createNewProjectOptions.png)

Enter a project name. You have three choices for the type of project you wish to create:

* **Git project** allows you to run `git` commands from the console and push your changes to [http://www.github.com](GitHub).
* **Mercurial** allows you to run `hg` commands form the console and push your changes to [https://bitbucket.org/](Bitbucket)
* **FTP** allows you to upload your files directly to an FTP server you have access to.


Make a choice for the type of project and press **Create**. That's it! You can now see your new project in the dashboard:

![New project greeting](./images/createdProject.png)

Now, just click **Start Editing** to get started!

#### Clone from URL

The second option for creating a new project is to clone one from url. The url would be, for example, the url of a Github project such as [cloud9-coffeescript-example](https://github.com/fjakobs/cloud9-coffeescript-example)

Let's clone this project. When you click on **Clone from URL**, you are taken to this screen:
![Options for cloning a project](./images/cloneProjectOptions.png)

Paste the above GitHub URL in the textbox labeled **Source URL**. If you have a premium account, you can choose who has access to your project. For regular users, the new project will be public.

Now, check out the project. It will be created under **My Projects**. You can now start editing it!

#### Deleting a project

Now that you know how to create a project, you should also learn how to delete one. Look at the far right side of your dashboard:

![Delete project screen](./images/deleteProject.png)

Clicking on the **Delete** button prompts the IDE to ask for confirmation:
![Confirmation of project deletion](./images/deleteConfirmation.png)

This is your last chance to change your mind. Once you have typed **delete** in the textbox and pressed the red button, your project will be gone forever from Cloud9. If you are sure you want to delete your project, go ahead and press the red button. Of course, if your project is hosted elsewhere, like on another git or FTP server, it still exists in those repositories.

