# Terminal

The terminal is [a premium-only feature](https://c9.io/site/pricing/) that provides you with a TTY interface for _direct access_ to the machine that Cloud9 is running on. If you're [running your own workspace](./run_your_own_workspace.html), this is the server you've SSH'ed into. If you're using the hosted Cloud9 platform, this is the server your code runs on. 

Warning: While certain operations, like `sudo`, are restricted, you **can** completely destroy your workspace, by doing something like `rm -rf`.  Use your power wisely!

To create a new terminal, go to **View | Terminals | New Terminal**, or simply type `Alt-T` on the keyboard. The terminal differs from [the console](./console.html) in several distinct ways, namely:

* The terminal can perform all Unix commands, not just a subset
* The terminal can't launch Cloud9 specific commands, like `nexttab` or `gotofile`
* You can create more than one instance of a terminal (by just creating a new tab)
* The terminal allows for path autocompletion by hitting `Tab`

![Screenshot of the terminal](./images/terminal.png)