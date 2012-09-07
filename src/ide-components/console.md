# The Console

The console is at the bottom of the IDE. It's where you can enter command line input, view output from your program, and push and pull your files between your code repositories. 

Note: The console is different than [the terminal](./terminal.html) in several ways, primarily that it can't run a full set of Unix commands.

## Available Commands

You can use many common Unix commands, such as `ls` and `mkdir`, in the console space. To preview the full list of basic commands in the console, you can type `help` and press Enter. For every command, a description is provided:

![Screenshot of the available commands](./images/availableCommands.png)

You can also use mercurial commands (`hg`) and git commands (`git`) to communicate with the system, and to push your code between repositories. Typing `hg` or `git` shows the complete list of commands that are available for these services. For more information about these commands, please check their respective documentation:

* [Mercurial Command List](http://mercurial.selenic.com/guide)
* [Git Command List](http://help.github.com/git-cheat-sheets)

To use mercurial commands on the project you are working on, you must have a mercurial project set up; the same holds true for git. Follow these links to learn more about how to set up these project in Cloud9:

* [Setting up a Mercurial Project](./setting_up_bitbucket_workspace.html)
* [Setting up a Git project (on GitHub)](./setting_up_github_workspace.html)

Those articles also explain how to use the command-line to commit your work.

In addition, the console also has shortcuts for much of Cloud9 IDE's functionality. For example, `gotofile` launches the filename you provide, while `revealtab` opens the current file in the project tree. Again, typing `help` shows you which commands are available.

## Output

The output tab in the console shows information whenever a user is running or debugging a program. The content is similar to the output of a desktop terminal:  
![Screenshot of program output](./images/consoleOutput.png)

The output tab also displays the error and additional information that can improve your coding quality. You can use the console to output results from your running application, just like a regular terminal.

As your process runs, you'll see a message similar to this one indicating that Cloud9 is running something in the background: ![Running process](./images/runningProcess.png)

If you hover over this message, you can opt to cancel the process by clicking on the button: ![Cancelling a process](./images/cancellingProcess.png)