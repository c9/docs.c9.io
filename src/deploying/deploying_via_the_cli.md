# Deploying via the CLI

If deploying to servers using the IDE's graphical interface isn't your thing, you could also manually install various command-line tools into your workspace and deploy using the command line. Below is a list of some of the services we have tested and support deploying to.

Here you'll find details on installing deployment tools from third party vendors to be used in [Cloud9 IDE](http://c9.io). Besides using terminal tools, there is also a GUI available for Heroku and Azure Sites on all plans. Of course git based deploys will also work without command line tooling.

All commands need to be executed in the terminal (ALT+T) unless stated otherwise.

**If you have additions, please note them in the comments and I'll add them to this gist**

# Heroku

```
$ wget http://assets.heroku.com/heroku-client/heroku-client.tgz
$ tar xzfv heroku-client
$ cd heroku-client
$ PATH=$PATH:$PWD
```

Now you can use the `heroku` command as stated in the [Heroku documentation](https://toolbelt.heroku.com/).

# Windows Azure Web Sites

## All plans

Do in the console (bottom of the IDE):

```
$ npm install azure
```

Now you can use the `azure` command from the console (doesn't work in the terminal).

## Premium

Two possibilities to prepare azure sites. 1: create a deploy target via the GUI, or 2:

```
$ cd ~/lib/azure-sites
$ npm install
```

Then add it to your path:

```
$ PATH=$PATH:$HOME/lib/azure-sites/bin
```

Now you can use the `azure` command in the terminal.

# CloudFoundry

```
$ cd ~
$ wget https://github.com/cloudfoundry/vmc/zipball/master
$ mv master cloudfoundry
$ unzip cloudfoundry
$ cd cloudfoundry-vmc-nnnn
$ bundle 
```

And that's about how far I got, someone any clue?

# Windows Azure Cloud Services

## All plans

Follow the instructions on the [azure-cmdlet-node](https://github.com/c9/azure-cmdlet-node) repository (maintained by Cloud9).

# NodeJitsu

## All plans

On the console run:

```
npm install jitsu@0.7.x -g
mkdir node_modules
mv ../lib/node_modules/jitsu node_modules
```

Now run `jitsu` from the command line

## Premium plans

```
$ npm install jitsu@0.7.x -g
```

You can now run `jitsu` from both the CLI and the terminal.