# Writing a Go App
Cloud9 IDE doesn't provide out-of-the-box support for the Go language, but with 
a few quick steps you can set up Cloud9 to build and run apps in Go!

### Create a new workspace
First, create a new Custom workspace and call it whatever you want: 
  
![Create a Custom workspace for Go](./resources/images/createNewCustomWorkspace.png)<521, 425>

After your new workspace is created, click the "start editing" button. At the 
bottom of your workspace you will see the Terminal. If you prefer to have it
fullscreen, you can launch a terminal tab by pressing Alt-T, or from the menu: 
[[menu: View, Terminals, New Terminal]].

From the terminal you can install & setup everything on the underlying virtual 
environment that every workspace is provided with.

### Download Go
When you first enter your Terminal, you will be in your workspace root folder, 
which is a number such as `~/562166`. Make a note of this directory name, as 
you'll need it later.

Let's use your home directory to download the Go distribution; to get there, 
simply enter the following in the Terminal:

```bash
cd ..
```

To download the Go distribution enter the following:

```bash
wget https://go.googlecode.com/files/go1.1.1.linux-amd64.tar.gz
```

Note: at the time of writing the latest version was 1.1.1, but you might want to 
use a new version if it has become available. 

After the download is complete, extract the archive:

```bash
tar -xzf go1.1.1.linux-amd64.tar.gz
```

Once the extraction is done, you will notice a new `go` directory in your home 
directory. Feel free to delete the archive file you downloaded.

### Set up your environment

The last step is to configure the environment so it can see the Go distribution 
as well as our workspace Go files. To do this, edit your bash configuration 
in the Terminal using vim (or emacs, nano, any simple editor will do): 

```bash
vim ~/.bashrc
```

Add the following lines to your .bashrc file:

```
# setup go configuration 
export GOROOT=$HOME/go 
export PATH=$PATH:$GOROOT/bin 

# setup workspace t
export GOPATH=$HOME/562166 
export PATH=$PATH:$GOPATH/bin
```

Update the `GOPATH` line above to use the workspace directory you noted earlier 
(so don't use `$HOME/562166`).

After you save your .bashrc file, load the new settings:

```bash
source ~/.bashrc
```

That's it! You should be good to Go (pun intended). 

Note: Thanks to Scotty Moon for writing [an article about Go on Cloud9 IDE](http://scottymoon.com/post/55971239152/go-up-and-running-on-cloud-9)
and letting us use it for documentation!