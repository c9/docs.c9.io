Author: Detmar ter Huurne

## Deploying to Heroku

This article will show you how to deploy your applications to Heroku. Heroku is cloud based application platform for easy deployment of your applications. The integration with Cloud9 IDE makes your development process even more agile. If you don't have a Heroku account, visit [their website](htttp://www.heroku.com) to create one for free. 

#### Heroku Deployment

To get started, create a simple Node.js application. If you don't have one yet, you can [follow our tutorial](writing_nodejs_hello_world.html) on setting one up. 

Warning: Before you attempt to deploy your application, make sure that you have committed all your changes to version control. Cloud9 deploys for you whatever was last committed to version control. For example, with git on the command line you would type:
    git add .
    git commit -m "Committing the latest version of my app"  
After your latest changes have been committed, you can continue to deploy your application.

Once you click on the **Deploy** button in the Project Bar, click the plus sign ("+"") next to Deploy to add another deploy target. Choose Heroku as an option to sign in to Heroku appears. After you have signed in to your Heroku account you can create a new deploy target or choose an existing one from your account.

Note: Heroku only allows you to create names for your apps that contain uppercase, lowercase and dashes.

![Showing the Deploy button](./images/herokuDeploy.png)

Now you have added a deploy target, which you can use to deploy your application to. Next, you can press Deploy to continue the process and the following window will pop-up.

![Dialog requesting a package JSON file](./images/missingPackageJSON.png)

We can generate a package.json file for you, which contains the metadata that contains information to share with Heroku. The following lines are added to the file:
	{
		"name": "cloud9-heroku-example",
		"version": "0.0.1"
	}

![Dialog requesting a Procfile](./images/missingProcFile.png)

The Procfile is needed to start the application in Heroku. You can just create a new file, add the line below, and save it as 'Procfile'. D not add any file extensions.

	web: node web.js

Try the deploy button again. The console will directly output the following when the deployment is completed:

![Console output for Heroku](./images/herokuConsoleOutput.png)