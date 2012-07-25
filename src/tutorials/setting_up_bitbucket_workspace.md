Author: Daniela Gavidia

## Setting Up a Git Project (on BitBucket)

In this article, we'll explain the steps needed to push a Cloud9 IDE project to Bitbucket. For this article, we're assuming that you have created a git project in Cloud9. Let's see how you can push this project to Bitbucket.

First, if you haven't done so already, create a Bitbucket account. Then, follow these steps:

1. Go to your Cloud9 dashboard. Click on **Your Account** and, under **Account Settings**, click on **Show your SSH key** and copy the key.
                                                                                                                        * 
![Viewing your SSH key](./images/sshKey.png)

2. In BitBucket, go to **Account Settings**, and then click on **[SSH Keys](https://bitbucket.org/account/#ssh-keys)**. 
Paste the Cloud9 SSH key into the textbox. Then, click **Add key**.

3. Create a git repository on Bitbucket. At the top, you will see: "Clone this repository (size: ... bytes): HTTPS/SSH". Click on SSH. Then, underneath it will show a URL of the form `git@bitbucket.org:username/reponame.git`. Copy this URL.
![Cloning from Bitbucket](./images/cloneBitbucket.png)

4. Go to your Cloud9 project. If you created it as a git project, git is already setup. If you haven't already, commit any changes using the console:

	git add .
	git commit -a -m "My first commit"

5. Add a new remote repository from the Cloud9 console; for instance:

	git remote add origin git@bitbucket.org:username/repository_name.git

6. Finally, you can push to this repository:

	git push origin master

Your changes will appear on Bitbucket.