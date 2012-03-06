Author: Daniela Gavidia

## The Console

In this article, you'll learn about the functionality of Cloud9's command-line interface. 

The command-line is placed at the bottom of the IDE and shows the console when it is expanded. The console. in turn, displays valuable information and response from the system on actions performed by you. The command-line also interface enables the user to interact with the system. You can type commands to perform a typical task.

### Available Commands
You can use most Unix commands, such as `ls` and `mkdir`, in the console space. To preview the full list of basic commands in the console, you can type `help` and press Enter. For every command, a description is provided:

![Screenshot of the available commands](./images/availableCommands.png)

You can also use mercurial commands (`hg`) and git commands (`git`) to communicate with the system, and to push your code between repositories. Typing `hg` or `git` shows the complete list of commands that are available for these services. For more information about these commands, please check their respective documentation:

* [Mercurial Command List](http://mercurial.selenic.com/guide)
* [Git Command List](http://help.github.com/git-cheat-sheets)

To use mercurial commands on the project you are working on, you must have a mercurial project set up; the same holds true for git. Follow these links to learn more about how to set up these project in Cloud9:

* [Setting up a Mercurial Project](./setting_up_bitbucket_mercurial.html)
* [Setting up a Git project (on GitHub)](./setting_up_github_project.html)

These articles also explain how to use the command-line to commit your work.

### Output

The output tab in the console shows information whenever a user is running or debugging a program. The content is similar to the output of a terminal you are used to but it will be in the same window as your editor. No need to juggle between windows anymore!

![Screenshot of program output](./images/consoleOutput.png)

The output tab also displays the error and additional information that can improve your coding quality. You can use the console to output results from your running application, just like a regular terminal.

### Search

The console also displays information about files containing search terms:

![Screenshot of search results](./images/searchResults.png)

You can expand each result to see the line number of where a match was found. Clicking on a match also opens the file in the IDE.