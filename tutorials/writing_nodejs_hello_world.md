## Writing a Node.js Hello World program

In this article, we'll walk you through the creation of a simple Hello World program. If you followed our last two lessons, you already have a Cloud9 IDE account and you know how to create a project. To get started with Lesson 3, you'll need to first create a (GitHub or Mercurial) project. If you need a refresher on how to do this, please refer to [Lesson 2](lesson2.html).

#### A Simple Node.js HTTP Server

Once you have created your project, click on the **Start Editing** button to go to the Cloud9 IDE editor. In the editor, create a new file called `server.js`. Type the following code in the file:

    var http = require('http');
    http.createServer(function (req, res) {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Hello World\n');
    }).listen(process.env.PORT);
        
What you just wrote is a Node.js HTTP server that returns a simple 'Hello World' page for every request. In short, you are creating an HTTP server with a callback function that is called for each request. In the callback function, you create a response with a status code of 200 (indicating that the request was fulfilled successfully) and the message "Hello World". Finally, you specify which port the server listens to. When Node.js projects run within Cloud9 IDE, you can retrieve the port information with the `process.env.PORT` variable.

#### Running your program

With Cloud9 IDE, you can run your Node.js applications in a test environment and see the results of your coding. To run your "Hello, World" application, click on the **run** button in the menu bar. In the pop-up window that appears, add a new **run configuration** as shown in the image below:
![A new run configuration pop-up](./images/newRunConfiguration.png)

In this run configuration, called "server," the file that is executed is your "Hello World" application, which you saved in a file called `server.js`. Now, press *Run*. Your application will be deployed to one of our servers, and you will immediately see some output similar to the one below:
![Console run output](./images/RunOutput.png]

To see your application in action, click on the link created for your project. You should see your "Hello World" application open up in a new browser tab:
![Node.js Hello World in the Browser](./images/helloWorld.png).

To stop your application, go back to the editor and click on the **stop** button.