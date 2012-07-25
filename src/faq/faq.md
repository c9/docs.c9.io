Author: Detmar ter Huurne

## FAQ

What is Cloud9 IDE?
:   Cloud9 IDE is, at its core, an online code editor. Specifically, it's an IDE for Javascript that uses Node.js as a backend. Cloud9 IDE supports the ability to import projects from GitHub, Bitbucket, and FTP, collaborative development, and syntax highlight for a variety of languages. It's simple, fast, and extremely powerful, with tabbed file browsing, autocompletion of methods and properties, searching across project files, and many other features you'd expect from a terrific editor.
:   Since Cloud9 IDE runs on Javascript, you can build, debug, and run Node.js applications within your browser. You can run npm and import packages developed by the Node.js community. Cloud9 IDE can also instantaneously deploy your projects to production servers hosted by Heroku and Nodester in order to take your awesome ideas to a wider audience.
:   Cloud9 IDE is completely free to use for open source projects. If you want to develop under a private (and collaborative) environment, you can pay a low monthly fee.

How Can I Delete My Account?
: If you don't want to use Cloud9 IDE any longer or just want to remove an account, you can find the 'delete your account' option under your account settings within the dashboard:  
  1. Go to 'My Account'  
  2. Click 'Delete your Account' from within your account settings  
  3. Please give us feedback. Any information to improve the product is usefull.

FTP Projects Don't Work. Am I Doing Something Wrong?
: First of all, make sure you read the article about [setting up an FTP project](ftp_workspaces.html).
: Next, be aware that we only support passive FTP, not SFTP or FTPS.
: Also, please make sure you succeed the login test when creating a project. If you didn't try it when creating the project, just click **FTP Settings** (next to **Start Editing**) in the dashboard. In the pop-up window, you can do the login test again.
: Another possible problem is a wrong "Initial Path". Did you set the "Initial Path" in the FTP project? If so, it's possible that unseting it migt help. Some users seem to be having problems with it when the path they put doesn't exist or is a relative path. This is not a bug, but a misunderstanding of absolute versus relative paths. If you put a relative path (that is, if the initial path does not start with a `/`), then Cloud9 assumes that you want to start from the folder your FTP server leaves you after login (home or default folder). If you put an initial path that leaves you in a location where you don't have write privileges, that could cause problems too.

My Username Was Duplicated; How Could This Happen?
: You have just signed up for a Cloud9 IDE account and now you have two usernames: `username` and `username_1`. This happens in the following use case:  
1. You signed up for Cloud9 IDE following the registration form on our homepage. This created an account with your username.
2. You _then_ signed up for Cloud9 IDE using your GitHub account by clicking on the GitHub icon on the home page. This created an second account, but because your username (from GitHub) is already in use, we adjusted it to add a prefix. 

: To link your first account with your original username to your GitHub account, you should remove the second account. You can do so by logging in to Cloud9 IDE using the GitHub (click on the GitHub icon in the log in screen).
: Next, find **Delete your account** under your account settings within the dashboard and delete the `username_1` account.
: Finally, log in to your original account using your username (or email address) and password and you can [link to GitHub](setting_up_github_workspace.html).

Why Don't Console Commands Don't Work?
: Before submitting a support request about the console not working, please consider this:  
1. Are you behing a proxy or firewall? It's possible that it might be blocking our xhr polling. If you can use Cloud9 IDE at home, but can't get it to work properly while at the office, this might be the cause.
2. Are you running an anti-virus? The anti-virus software might be blocking some requests. Lately, we have experienced this issue with Avast anti-virus. For some users, disabling this software was enough to get Cloud9 IDE to work properly again. For others, uninstalling Avast was necessary. We are working on finding a solution for this.

: If neither of these applies to you, please file a support request and we will look more deeply into your problem.
 
When I try to Use GitHub Access, a Message Says: "Another account is already linked to Github account 'username'"
: You've created multiple accounts. See above to see how to solve this issue.

How can I deploy Mercurial projects to Heroku?
: You can use the command line to initialize git and use it to deploy your project to Heroku like this:

	git init 
	git add . 
	git commit -m "message" 
	git remote add heroku git_heroku_address_of_repo
	git push heroku master

: `git_heroku_address_of_repo` is the git link, which you can find on the Heroku page. After enterting these, your project will be deployed to Heroku.

Why can't I run code that spawns a child process?
:  Cloud9 blocks the creation of child processes for security reasons, since you are running your code in a shared environment. In the future, we will offer private run environments in which you will be able to create child processes.