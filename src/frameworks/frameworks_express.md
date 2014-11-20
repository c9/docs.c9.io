# Framework: Express
[Express](http://expressjs.com/) is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

To get started with an Express app, first create a workspace and choose either the Node.js type, or a Custom workspace type for a clean workspace. Open the new workspace (or an existing one) to follow the instructions below.

## Installation

First we'll install the Express project generator and generate an application stub:

    $ npm install -g express-generator
    $ express -f .
    $ npm install

You might want to take a look at `package.json` and update the application name from the default `workspace` to something more fitting.

## Running
    
Now you have a fully configured express application already. You can run it from the terminal using:

    $ bin/www

Now if you click the Preview button in the top menu in the IDE, and choose "Preview with Web Server", this will open the Preview window for your running app.

## Creating a Run Configuration

In order to make life easier you can create a run configuration for express.

1. Click `Run -> Run Configurations -> Manage ...`
2. Click `Add New Config`
3. In the run panel fill in `Express` as name, `bin/www` as the command and `Node 0.10.x` as the runner.
4. You can optionally make this run configuration the default runner by clicking `Set As Default`. If you do so then clicking the run button will always run the app and not the currently opened file.

The finished run configuration should look something like this

![Express Runner](./resources/images/express-run-config.png)