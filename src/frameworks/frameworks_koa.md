# Framework: Koa
[Koa](https://www.koajs.com/) is a new web framework designed by the team behind Express, which aims to be a smaller, more expressive, and more robust foundation for web applications and APIs. 

To get started with a Koa app, first create a workspace and choose either the Node.js type, or a Custom workspace type for a clean workspace.

Koa.Js makes use of the new generator feature in javascript ECMA 6. 
This feature is support in Node from 0.11 and up by toggling the <code>--harmony</code> flag. 
By default Cloud9 runs Node v0.10.x or v0.8.x, depending on your setup, so we first need activate Node version 0.11.x.

Open a Terminal, or using the pre-existing one at the bottom and execute the following in your Terminal:

    nvm use 0.11

Next, we need to install Koa itself:

    npm install koa

Now we can create a simple Koa.Js server.
Create a server.js file in your root folder with this code:

    var koa = require('koa');
    var app = koa();
    
    app.use(function *(){
        this.body = '<h1>Hello from Koa.Js</h1>';
    });
    
    app.listen(process.env.PORT);

If you now press the Run button on top of the IDE, you will see some errors, as the runner/debugger defaults to 'Node (default)', which is Node version 0.10.x or 0.8.x.

Luckily all you need is to create a Runner file so Cloud9 can run Node 11.x in harmony mode and thereby support generators.

In the Run panel below, click the 'Runner' text input and choose 'New Runner'. 
In the new Runner file that's opened, save the following code as 'Node 0.11.x.run':

    // This file overrides the built-in Node 0.11.x runner
    // For more information see http://docs.c9.io:8080/#!/api/run-method-run
    {
      "cmd": [
        "bash",
        "--login",
        "-c",
        "nvm use 0.11 > /dev/null; node --harmony ${debug?--nocrankshaft --nolazy --debug-brk=15454} '$file' $args"
      ],
      "debugger": "v8",
      "debugport": 15454,
      "info": "Your code is running at \\033[01;34m$url\\033[00m.\n\\033[01;31mImportant:\\033[00m use \\033[01;32mprocess.env.PORT\\033[00m as the port and \\033[01;32mprocess.env.IP\\033[00m as the host in your scripts!\n"
    }

Note: alternatively, you can check 'Show Hidden Files' in your workspace directory tree (the small gear in the upper right corner), and create a new file in the '.c9/runners' folder called 'Node 0.11.x.run' with this code.

Let's run server.js with this new configuration; in the Run panel on the bottom, choose your new 'Node 0.11.x' Runner, and press Run again.

You Koa.Js server should now be up and running.

Now if you click the Preview button in the top menu in the IDE, and choose "Preview with Web Server", this will open the Preview window for your running app. 
 
(Credits go to Tom at http://kyorcode.blogspot.nl/2014/08/running-koajs-in-cloud9.html)