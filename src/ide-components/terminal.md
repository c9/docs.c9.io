# Terminal

The terminal is [a premium-only feature](https://c9.io/site/pricing/) that provides you with a TTY interface for _direct access_ to the machine that Cloud9 is running on. If you're [running your own VM](./run_your_own_vm.html), this is the server you've SSH'ed into. If you're using the hosted Cloud9 platform, this is the server your code runs on. 

Warning: While certain operations, like `sudo`, are restricted, you **can** completely destroy your workspace, just like a real terminal. Use the power wisely!

To create a new terminal, go to **View | Terminals | New Terminal**. The terminal differs from the command line in several distinct ways, namely:

* The terminal can perform all Unix commands, not just a subset
* The terminal can't launch Cloud9 specific commands, like `nexttab` or `gotofile`
* You can create more than one instance of a terminal (by just creating a new tab)

![Screenshot of the terminal](./images/terminal.png)