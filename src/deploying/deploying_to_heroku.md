# Deploying to Heroku

This section will show you how to deploy your applications to Heroku, a cloud-based application platform. The integration with Cloud9 IDE makes your development process even more agile. If you don't have a Heroku account, visit [their website](http://www.heroku.com) to create one for free. 

To get started, create a simple Node.js application. If you don't have one yet, you can [follow our tutorial](writing_nodejs_hello_world.html) on developing one. 

After you click on the **Deploy** button in the Project Bar, click the plus sign next to Deploy to add another deploy target. Choose Heroku as an option. After you have signed into your Heroku account, you can create a new deploy target or choose an existing one from your account:

![Showing the Deploy button](./resources/images/herokuDeploy.png)<369, 407>

Note: Heroku only allows you to create names for your apps that contain letters and dashes.

Next, press **Deploy** to continue the process; the following window might appear:

![Dialog requesting a package JSON file](./resources/images/missingPackageJSON.png)<522, 178>

Heroku Node.js apps [are required to have a package.json file](http://devcenter.heroku.com/articles/nodejs-versions), much like with NPM. Cloud9 can generate a _package.json_ file for you, containing metadata to share Heroku. The following lines represent what that file might looks like:

	{
		"name": "cloud9-heroku-example",
		"version": "0.0.1"
	}

After you have a _package.json_ file, you might see this dialog:

![Dialog requesting a Procfile](./resources/images/missingProcFile.png)<519, 198>

[Sometimes, a Heroku app also requires a Procfile](http://devcenter.heroku.com/articles/node-js#declare_process_types_with_foremanprocfile). The Procfile is needed to start the application in Heroku. You can just create a new file, add the line below, and save it as 'Procfile'. Don't add any file extensions.

	web: node web.js

Try the deploy button again. The console will directly output the following when the deployment is completed:

![Console output for Heroku](./resources/images/herokuConsoleOutput.png)<656, 374>

And just like that, you've deployed your project to Heroku.