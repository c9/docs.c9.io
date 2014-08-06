# Terminal

The terminal provides you with a TTY interface for _direct access_ to the
machine that Cloud9 is running on. If you're 
[running your own workspace](./run_your_own_workspace.html), this is the server
you've SSH'ed into. If you're using the hosted Cloud9 platform, this is the
server your code runs on.

Hosted workspaces are based on Ubuntu 14 with full `sudo` access. This way you 
can easily install whatever dependency you need in order to work on your project.

Warning: You have `sudo` powers in the terminal and you **can** completely
destroy your workspace, by doing something like `rm -rf`.  Use your power wisely!

To create a new terminal, go to [[menu: Window, New Terminal]], or
simply type [[keys: Alt-T]] on the keyboard. The terminal has the following 
capabilities:

* Perform all Unix commands
* You can create more than one instance of a terminal (by just creating a new tab)
* The terminal allows for path autocompletion by hitting [[keys: Tab]]