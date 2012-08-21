# Deploying via the Comand Line

If deploying to servers using the IDE's graphical interface isn't your thing, you can also manually install various command-line tools into your workspace and deploy using the command line. It should go without saying that this is for super 1337 and advanced developers.

Below is a list of some of the services we have tested and support deploying to. All the commands need to be executed in [the terminal](./terminal.html) unless stated otherwise.

## Heroku

To deploy to Heroku, type the following commands:

```bash
wget http://assets.heroku.com/heroku-client/heroku-client.tgz
tar xzfv heroku-client
cd heroku-client
PATH=$PATH:$PWD
```

Now, you can use the `heroku` command for your projects, as described in the [Heroku documentation](https://toolbelt.heroku.com/).

## Windows Azure Web Sites

### Free and Premium Plans

In [the console](./console.html), type the following:

```bash
npm install azure
```

Now, you can use the `azure` command from the console. For more information, read [the official `azure` documentation](https://github.com/WindowsAzure/azure-sdk-for-node).

### Premium Plans

To deploy to Azure sites from the command line, open the Terminal and type

```bash
cd ~/lib/azure-sites
npm install
```

Then, add the bin to your workspace's path:

```
PATH=$PATH:$HOME/lib/azure-sites/bin
```

Now, you can use the `azure` command in the terminal.

## Windows Azure Cloud Services

For free and premium plans, follow the instructions on the [azure-cmdlet-node](https://github.com/c9/azure-cmdlet-node) repository. This project is maintained by Cloud9.

## CloudFoundry

To deploy to CloudFoundry from the command line, type:

```
cd ~
wget https://github.com/cloudfoundry/vmc/zipball/master
mv master cloudfoundry
unzip cloudfoundry
cd cloudfoundry-vmc-nnnn
bundle 
```

## NodeJitsu

### Free and Premium Plans

On the console, type:

```bash
npm install jitsu@0.7.x -g
mkdir node_modules
mv ../lib/node_modules/jitsu node_modules
```

Now, you can run `jitsu` from the command line. For more information, see [the official `jitsu` documentation](https://github.com/nodejitsu/jitsu).

### Premium Plans

```bash
npm install jitsu@0.7.x -g
```

You can now run `jitsu` from both the console and the terminal.