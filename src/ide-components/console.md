# The Console

Note: this feature is deprecated

The Console is at the bottom of the IDE. It's where you can enter command line input, view output from your program, and push and pull your files between your code repositories. 

Note: The Console contains [a full-fledged terminal](./terminal.html), which provides you with a TTY interface for _direct access_ to the machine that Cloud9 is running on.

## Available Commands

The terminal can perform all Unix commands, and allows for path autocompletion by hitting [[keys: Tab]].
 
For instance, you can use mercurial commands (`hg`) and git commands (`git`) to communicate with the system, and to push your code between repositories. Typing `hg` or `git` shows the complete list of commands that are available for these services. For more information about these commands, please check their respective documentation:

* [Mercurial Command List](http://mercurial.selenic.com/guide)
* [Git Command List](http://help.github.com/git-cheat-sheets)

To use mercurial commands on the project you are working on, you must have a mercurial project set up; the same holds true for git. Follow these links to learn more about how to set up these project in Cloud9:

* [Setting up a Mercurial Project](./setting_up_bitbucket_workspace.html)
* [Setting up a Git project (on GitHub)](./setting_up_github_workspace.html)

## Output

The output tab in the Console shows information whenever a user is running or debugging a program. The content is similar to the output of a desktop terminal:  
![Screenshot of program output](./resources/images/consoleOutput.png)<1174, 336>

The output tab also displays the error and additional information that can improve your coding quality. You can use the Console to output results from your running application, just like a regular terminal.

As your process runs, you'll see a message similar to this one indicating that Cloud9 is running something in the background: ![Running process](./resources/images/runningProcess.png)<197, 29>

If you hover over this message, you can opt to cancel the process by clicking on the button: ![Cancelling a process](./resources/images/cancellingProcess.png)<186, 37>