# Share a workspace

As you develop your application, often you just want to quickly demo your work-in-progress to a colleague, customer, or friend. 
Or you want to pull in a fellow dev to debug an issue, or to pair program.

Cloud9 enables you to do just these things, easily: share your entire development environment, the running application, or just a preview of your running application. 
Here we describe how to access these options, and how to use each.

## Share dialog
The best place to start sharing is from the dedicated "Share" dialog. 
Access it via the "Share" button on the right top of the IDE, or via the menu in Window > Share...

![Share buttons](./resources/images/shareButtons.png)<614, 102>

Here's what you see when you pull up the Share dialog:

![Share Dialog](./resources/images/shareWorkspaceDialog.png)<429, 529>

**Links to share**

* Editor: see section "Share your development environment"
* Application: see section "Share your application" 
* Preview: See section "Share a Preview" 


If you enable the "Public" checkbox for an option, it will make the URL accessible for anyone with the URL.
For public workspaces all these URLs are public by default, but for private workspaces you have to enable them manually.

**Who has access**

This section refers to people you have specifically granted access to your entire development environment.
(R) gives Read access only to that person: the ability to open and view files, and to run your code.
(RW) or "Read/Write" also gives that person the ability to write to files.

**Invite people**

This section enables you to invite people to your workspace and immediately set if they have just "Read" or "Read+Write" rights. 
You can invite people by their email address or Cloud9 username. 
You can also choose whether or not send an automatic email to that person that they've been invited to your workspace.

## Share your development environment
Cloud9's Collaboration features allow you to share your entire development environment so you can work on code together, much like working on a document in Google Docs.
You'll actually be able to see each other's cursor as you type, run your app, share the Terminal(s), and talk in the group chat.
See the screenshot below for what this looks like:

![Collaboration Features](./resources/images/collab.png)<550, 890>

In order to share your entire development environment, do one of the following: 
1. Make the URL publicly available to everyone: check the "Public" checkbox for the "Editor" in the "Links to Share" section.
2. Choose to share only with specific people: invite them from the "Invite people" section.
3. Grant/revoke access rights in the "Who has access" section.

If someone asks for either Read or Read+Write access to your workspace, you can accept or deny them from the Collaboration panel on the right. 

Note: alternatively you can just share the URL to your workspace from the browser's URL bar and accept members as they request access to your workspace

## Share your application
If you [Run your application](./run_an_application.html) the result can be shared by copying the URL from the dialog. 
This URL can only be viewed if it's made Public by checking the "Public" checkbox next to the "Application" in the "Links to share" section.

People who have full read access to your workspace (as defined in the "Who has access") can view this URL whether it's public or not.

Note: alternatively you can just share the URL to your running app from the Preview panels' URL bar

## Share a Preview
If you Preview a file in your application, it can be shared by copying the URL from the dialog. 
This URL can only be viewed if it's made Public by checking the "Public" checkbox next to the "Preview" in the "Links to share" section.

People who have full read access to your workspace (as defined in the "Who has access") can view this URL whether it's public or not.

Note: alternatively you can just share the URL to your Preview from the Preview panels' URL bar
 
Tip: If you can't find how to preview your running app, try to use port 8080 in the URL.