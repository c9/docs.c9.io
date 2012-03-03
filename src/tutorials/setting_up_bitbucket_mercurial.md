Author: Daniela Gavidia
Tags: bitbucket, clone, fork, github, hg, mercurial, private, public, repositories

## Setting Up a Mercurial Project (on BitBucket)

Bitbucket is a code hosting service that offers a lot of features to manage your public and private repositories. For more information about Bitbucket and how to use it, visit [https://bitbucket.org/](https://bitbucket.org/).

We have integrated Bitbucket to enable you to easily work on your public and private repositories. The following article explains how you can activate your Bitbucket account in Cloud9 IDE.

### Bitbucket Activation

You can manage your add-on services from your user profile that you can find in the dashboard. When you have just signed in, click **Your Account** on the top of the left-side panel. Here, you can change the settings of your account. At the bottom, you'll see a list of add-on services that are integrated into Cloud9 IDE. Click **activate** on the Bitbucket button:

![Add-on Services Screenshot](./images/addonServices.png)

After you have logged in to your Bitbucket account a new window will pop-up on your screen. This window asks you to give authorization permission to Cloud9 IDE application to:

- read your public and private repositories
- write to your public and private repositories

![Bitbucket Permissions Window](./images/bitbucketAuthorization.png)

To finalize the activation you will have to click **Grant access**. Next, you're redirected back to your account page, where you'll notice that your Bitbucket account has been activated. You can deactivate your account simply by clicking on deactivate, which may  be useful when you want to link your Bitbucket account to another Cloud9 account.

Now that you have activated Bitbucket, you can start to create and manage Bitbucket projects!

### Managing Mercurial Projects

There are several ways to manage mercurial projects in Cloud9 IDE:

* By creating a new mercurial project and pushing it to Bitbucket
* By cloning a Bitbucket project from a URL
* By bringing in a Bitbucket project manually

#### Creating a New Mercurial Project

{:creatingNewProjects}

![New project menu](./images/newProject.png)

{:aboutSettingUp}

{:setupOptions}

![New Project Options](./images/createNewProjectOptions.png)

Select Mercurial as your project type. {:postCreate}

![Start editing button](./icons/startEditing.png)

The project you have created let you use hg / mercurial commands in the command-line of the IDE. There are a couple of things you should do, before you can use all of Mercurial's power.

First, create a few new files inside your project. By default, you should already have a _README.md_. You can add these files to mercurial with the following command:

    hg add [file1, file2, file3, ...]

Next, create a commit that you can push to your remote:

    hg commit -m 'added new files'
    
Finally, push the commit to your remote host:

    hg push [remote URL]

For more information, visit the excellent resources from [Mercurial](http://mercurial.selenic.com/guide/) and the [Mercurial: The Definitive Guide](http://hgbook.red-bean.com/) book.

#### Cloning Projects from a URL

{:cloningIntro}

{:cloningOptions}

![Clone Project Options](./images/cloneProjectOptions.png)

You can find an examples of a Bitbucket URL on any of their repo description pages:

![Bitbucket Repo Description](./images/bitbucketProjectURL.png)

{:cloningURLProcess}

#### Clone Projects Already On Bitbucket

When you provide Cloud9 IDE with your Bitbucket credentials, it provides a list of projects you haven't yet imported into the editor:

![Bitbucket Pending Projects](./images/bitbucketPendingProjects.png)

From this list, clicking on a project and selecting **CLONE TO EDIT** brings the repo into the IDE, just as if you cloned it from a URL.