Author: Detmar ter Huurne

## Running the Express Module in Cloud9 IDE

Express can't be run from the console.

Though, there is another way to do run your applications, which is explained below.

 

After installing express with NPM you will have to run express from within the editor. 

Select the Run Panel to set the run configurations as follows:

   name: express 
   path: node_modules/express/bin/express 
   cmd line args: ./your-app-name

Also, when you start a new Express application you might want to use a template.

Try File->New from Template