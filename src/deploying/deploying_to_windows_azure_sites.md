# Deploying to Windows Azure Sites

This article will show you how to deploy your applications to Windows Azure. If you don't have an account yet, the Windows Azure process will help you create one. Keep in mind that Windows Azure is not free, though it does come with a free trial. Windows Azure projects can be deployed from any operating system.

To get started, create a simple Node.js application. If you don't have one yet, you can [follow our tutorial](writing_nodejs_hello_world.html) on developing one. 

After you click on the **Deploy** button in the Project Bar, click the plus sign next to Deploy to add another deploy target. Choose Windows Azure as an option. You'll be prompted with this dialog:  
![Windows Azure asking for publisher settings](./resources/images/windowsAzureDialog.png)

You must click on the **Download Windows Azure Settings** button before you can continue. If you don't have a Windows Azure account, here is where you can create one. If you _do_ have an account, your browser will automatically download the required file.

When that's finished, simply select the downloaded file from your computer, and upload it to Cloud9. You'll only have to do this process once. If you ever need to upload a new certificate, be sure to click **Clear cert** in the lower-right corner of this dialog.

After the file has uploaded, click on **Create new** to create a new hosted service. A hosted service is the container in which your application is hosted when it is deployed to Windows Azure. For more information, see [Overview of Creating a Hosted Service for Windows Azure](http://msdn.microsoft.com/en-us/library/windowsazure/gg432976.aspx). 

You can set a few configuration options such as the number of instances to use, its host OS, and where the data center is located. Selecting "Enable RDP" and providing a username and password enables remote desktop for your deployment.

Your new Windows Azure server will appear in the Deploy list:  
![Windows Azure information](./resources/images/windowsAzureInfo.png)

Go ahead and click on **DEPLOY**. If this is the first time you're trying to deploy this project to Windows Azure, you'll receive three prompts:

1. A dialog will inform you of a missing web.config file. If you click **Yes**, Cloud9 will create a file called _Web.cloud.config_ in your project. This file contains [configuration information](http://en.wikipedia.org/wiki/Web.config) about your app.

2. You'll be told about a missing csdef file. If you click **Yes**, Cloud9 will create a file called _ServiceDefinition.csdef_ in your project. ServiceDefinition.csdef is a Windows Azure-specific files necessary for publishing your application For more information, see [Overview of Creating a Hosted Service for Windows Azure](http://msdn.microsoft.com/en-us/library/windowsazure/gg432976.aspx).

3. You'll be asked to select the instance size for this application. For this tutorial, just select Small, and then click **Create**. For more details about Windows Azure VM sizes, see [How to Configure Virtual Machine Sizes](http://msdn.microsoft.com/en-us/library/windowsazure/ee814754.aspx).

Your app will now deploy to a Windows Azure server! You can follow its progress in the Deploy panel, or by watching the messages in the console:
![Windows Azure staging messages](./resources/images/windowsAzureStagingOutput.png)

For more information on configuring your app on the Windows Azure website, see [Deploying a Windows Azure App from Cloud9](http://www.windowsazure.com/en-us/develop/nodejs/tutorials/deploying-with-cloud9/).