# Writing and Running a Node.js Program

In this section, we'll walk you through the creation of a simple Hello World program. To get started, you'll first need to create a (GitHub or Mercurial) project. If you need a refresher on how to do this, please refer to [Creating a New Workspace](creating_new_workspace.html).

## A Simple Node.js HTTP Server

Once you're in Cloud9, create a new file called `server.js`. Type the following code in the file:

```javascript
var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
}).listen(process.env.PORT, process.env.IP);
```

This is a Node.js HTTP server. It returns a simple "Hello World" page every time you access the page. In short, you are creating an HTTP server with a callback function that is called for each request.

In the callback function, you create a response with a status code of `200` (indicating that the request was fulfilled successfully) and the message "Hello World". Finally, you specify which port and IP address the server runs on. When Cloud9 IDE runs servers, you set and retrieve the IP address and port number with the `process.env.IP` and `process.env.PORT` variables.

## Running Your Program

With Cloud9 IDE, you can run your Node.js applications in a test environment and see the results of your program. To run your "Hello, World" application, click on the **Run** button in the project bar. All you need to do now is double-click the name of your new file to get it running:  
![New run configuration pop-up](./images/newRunConfiguration.png)

Your application will be deployed to one of our servers, and you will immediately see some output in the console similar to the one below:  
![Console run output](./images/runOutput.png)

To see your application in action, click on the link created for your project. You should see your "Hello World" application open up in a new browser tab:  
![Node.js Hello World in the Browser](./images/helloWorld.png).

To stop your application, go back to the editor and click on the [![Icon of the Stop Button](./icons/stop_button.png)]{: #stopButton} button in the menu bar.

For more information on running and debugging your projects, see ["Running and Debugging Your Code"](./running_and_debugging_code.html).