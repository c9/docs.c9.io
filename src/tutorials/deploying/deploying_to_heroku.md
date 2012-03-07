Author: Detmar ter Huurne

## Deploying to Heroku

This article will show you how to deploy your applications to Heroku, a cloud-based application platform. The integration with Cloud9 IDE makes your development process even more agile. If you don't have a Heroku account, visit [their website](htttp://www.heroku.com) to create one for free. 

To get started, create a simple Node.js application. If you don't have one yet, you can [follow our tutorial](writing_nodejs_hello_world.html) on developing one. 

Warning: Before you attempt to deploy your application, make sure that you have committed all your changes to version control. Cloud9 deploys for you whatever was last committed to version control.

After you click on the **Deploy** button in the Project Bar, click the plus sign next to Deploy to add another deploy target. Choose Heroku as an option. After you have signed into your Heroku account, you can create a new deploy target or choose an existing one from your account:

![Showing the Deploy button](./images/herokuDeploy.png)

Note: Heroku only allows you to create names for your apps that contain letters and dashes.

Next, press **Deploy** to continue the process; the following window might appear:

![Dialog requesting a package JSON file](./images/missingPackageJSON.png)

Heroku Node.js apps [are required to have a package.json file](http://devcenter.heroku.com/articles/nodejs-versions), much like with NPM. Cloud9 can generate a _package.json_ file for you, containing metadata to share Heroku. The following lines represent what that file might looks like:

	{
		"name": "cloud9-heroku-example",
		"version": "0.0.1"
	}

After you have a _package.json_ file, you might see this dialog:

![Dialog requesting a Procfile](./images/missingProcFile.png)

[Sometimes, a Heroku app also requires a Procfile](http://devcenter.heroku.com/articles/node-js#declare_process_types_with_foremanprocfile). The Procfile is needed to start the application in Heroku. You can just create a new file, add the line below, and save it as 'Procfile'. Don't add any file extensions.

	web: node web.js

Try the deploy button again. The console will directly output the following when the deployment is completed:

![Console output for Heroku](./images/herokuConsoleOutput.png)

And just like that, you've deployed your project to Heroku.