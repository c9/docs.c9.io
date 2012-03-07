Author: Garen J. Torikian

## Deploying to Windows Azure

This article will show you how to deploy your applications to Windows Azure. If you don't have an account yet, the Windows Azure process will help you create one. Keep in mind that Windows Azure is not free, though it does come with a free trial. Windows Azure projects can be deployed from any operating system.

To get started, create a simple Node.js application. If you don't have one yet, you can [follow our tutorial](writing_nodejs_hello_world.html) on developing one. 

Warning: Before you attempt to deploy your application, make sure that you have committed all your changes to version control. Cloud9 deploys for you whatever was last committed to version control.

After you click on the **Deploy** button in the Project Bar, click the plus sign next to Deploy to add another deploy target. Choose Windows Azure as an option. You'll be prompted with this dialog:  
![Windows Azure asking for publisher settings](./images/windowsAzureDialog.png)

You must click on the **Download Windows Azure Settings** button before you can continue. If you don't have a Windows Azure account, here is where you can create one. If you _do_ have an account, your browser will automatically download the required file.

When that's finished, simply select the downloaded file from your computer, and upload it to Cloud9. You'll only have to do this process once. If you ever need to upload a new certificate, be sure to click **Clear cert** in the lower-right corner of this dialog.

After the file has uploaded, click on **Create new** to create a new hosted service. A hosted service is the container in which your application is hosted when it is deployed to Windows Azure. For more information, see [Overview of Creating a Hosted Service for Windows Azure](http://msdn.microsoft.com/en-us/library/windowsazure/gg432976.aspx). 

You can set a few configuration options such as the number of instances, its host OS, and where the data center is located. Selecting "Enable RDP" and providing a username and password enables remote desktop for your deployment.

