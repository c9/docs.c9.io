# Installing NPM Modules

Since Cloud9 IDE is built on top of Node.js, we also leverage the module system NPM. In Cloud9, you can install any npm package either locally or globally. Note that due to security restrictions, modules installed globally can only be used in the project they were installed from. In other words, while you have access to any command line  tools installed by the module, they are bound to the project, not your username. We run version 1.1.24 of npm.

To demonstrate the power of NPM, we'll build and run a quick [express](http://expressjs.com/) server:

1. Launch the command line by hitting `Shift-Escape`. You can also go to **View | Command Line** if it's not visible.
2. Type `npm install express`, and wait for the npm install process to complete.
3. Create a new JavaScript file, and paste the following code:

```
var express = require('express'),
    app = express.createServer();

app.use(express.logger());

app.get('/', function(req, res){
    res.send('Hello World');
});

app.listen(process.env.PORT);
console.log('Express server started on port %s', process.env.PORT);
```

To launch your express server, click on the ![The Run Button](./icons/runButton.png) button in the menu bar.