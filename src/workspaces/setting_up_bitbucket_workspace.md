# Setting Up a Bitbucket Workspace

Bitbucket is a code-hosting services that offers both git and mercurial support. Projects can be listed as private or public, absolutely free. For more information on Bitbucket, visit <https://bitbucket.org>. 

We have integrated Bitbucket into the IDE to enable you to easily work on your public and private repositories. The following article explains how you can activate your Bitbucket account in Cloud9 IDE.

## Bitbucket Activation

You can manage your add-on services from your user profile that you can find in [the dashboard](./dashboard.html). When you have just signed in, click **Your Account** on the top of the left-side panel. Here, you can change the settings of your account. At the bottom, you'll see a list of add-on services that are integrated into Cloud9 IDE. Click **activate** on the Bitbucket button:

![Add-on Services Screenshot](./resources/images/addonServices.png)

A new window will pop-up on your screen. This window asks you to give authorization permission for the Cloud9 IDE application to interact in various ways with Bitbucket:

![Bitbucket Permissions Window](./resources/images/bitbucketAuthorization.png)

To finalize the activation, click on **Allow**. Next, you're redirected to your account page, where you'll notice that your Bitbucket account is activated. You can deactivate Bitbucket by simply clicking deactivate, which may be useful when you want to link your Bitbucket account to another Cloud9 account.

Now that you have activated Bitbucket, you can start to create and manage your projects!

## Managing Projects

There are several ways to manage Bitbucket projects in Cloud9 IDE:

* By creating a new git or mercurial project and pushing it to Bitbucket
* By cloning a Bitbucket project from a URL
* By bringing in a Bitbucket project manually

### Creating a New Git Project

{:creatingNewProjects}

![New project menu](./resources/images/newWorkspace.png)

{:aboutSettingUp}

{:setupOptions}

![New Project Options](./resources/images/createNewWorkspaceOptions.png)

{:postCreate}

There are a couple of things you should do first, before you can use all of git's power. First, you'll want to add a remote to the project. From the Cloud9 IDE command line, you can execute the following commands: 

```bash
git remote add [remote name] [remote url]
```

`remote url` is the location of the project on Bitbucket; for example `'origin git@bitbucket.org:username/repository_name.git'`. You'll have to create a Bitbucket project first in order to generate this URL. Adding a remote URL lets you freely push and pull your project.

Next, create a few new files inside your project. By default, you should already have a _README.md_. You can add these files to git with the following command:

```bash
git add [file1, file2, file3, ...]
```

Finally, create a commit that you can push to your remote:

```bash
git commit -m 'added new files'
```

Don't forget to push this commit out to Bitbucket: 

```bash
git push [remote name] master
```

Ta-da! Your project is developed on Cloud9, and stored in Bitbucket.

### Cloning Projects from a URL

{:cloningIntro}

{:cloningOptions}

![Clone Project Options](./resources/images/cloneWorkspaceOptions.png)

You can find an examples of a Bitbucket URL on any of their repo description pages:

![Bitbucket Repo Description](./resources/images/bitbucketProjectURL.png)

{:cloningURLProcess}

### Clone Projects Already On Bitbucket

When you provide Cloud9 IDE with your Bitbucket credentials, it provides a list of projects you haven't yet imported into the editor:

![Bitbucket Pending Projects](./resources/images/bitbucketPendingWorkspaces.png)

From this list, clicking on a project and selecting **CLONE TO EDIT** brings the repo into the IDE, just as if you cloned it from a URL.