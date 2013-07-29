# Deploying Your Code

Cloud9 IDE offers many different ways to get your code from your editor to your 
production server. To deploy your code, click on the **Deploy** button in the 
Project Bar:

![The Deploy button in the Project Bar](./resources/images/deployButton.png)<232, 109>

We offer tight integration with the following environments:

* [Heroku](deploying_to_heroku.html)
* [Windows Azure Sites](deploying_to_windows_azure_sites.html)

Following these links will provide you with more information on code deployment.
You can deploy your code to as many services and servers as you like. Keep in 
mind that you'll already need an account at those hosting providers before you 
can deploy your app to them!

If you're comfortable with the command line, you can also deploy to several more
environments, such as:

* [Windows Azure Cloud Services](./deploying_via_cli.html#windows-azure-cloud-services)
* [Google App Engine](./deploying_via_cli.html#google-app-engine)
* [CloudFoundry](./deploying_via_cli.html#cloudfoundry)
* [NodeJitsu](./deploying_via_cli.html#nodejitsu)

Warning: Before you attempt to deploy your application, make sure that you have committed all your changes to version control. Cloud9 deploys for you whatever was last committed to version control.