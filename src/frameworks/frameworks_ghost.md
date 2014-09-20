# Framework: Ghost
[Ghost](https://ghost.org) is a simple, powerful publishing platform that 
allows you to share your story with the world.

Create a Ghost blog as follows:

1. Create a new workspace (Node.js or Custom for a clean workspace)
2. Open a Terminal, or use the pre-existing one at the bottom
3. Run the following commands in the Terminal:

        $ curl -L https://ghost.org/zip/ghost-latest.zip -o ghost.zip
        $ unzip -uo ghost.zip -d .
        $ rm ghost.zip
        $ npm install --production

4. Adapt the `config.js` file to the Cloud9 environment. Change the following keys:

        config: {
            development: {
                url: 'https://' + process.env.C9_HOSTNAME,
            },
            server: {
                host: process.env.IP,
                port: process.env.PORT
            }
        }

5. Run Ghost by typing `npm start` in the console or by opening `index.js` and
   hitting the run button.
6. Click the "Preview" button in the top menu in the IDE, and choose 
   "Preview with Web Server". This will open the Preview window for your newly setup Ghost blog

Change the URL to `/ghost` and create your admin user to login to the Ghost admin interface

Note: These instructions are based on the official [Ghost Installation Guide](http://support.ghost.org/installing-ghost-linux/)
