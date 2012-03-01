### The Editor

In this article we explore the functionality of the editor. The editor is where you write and edit your code. You launch the editor from the dashboard when you click the **Start Editing** button:
![Screenshot of the Start Editing button](./images/startEditingButton.png)

Clicking on **Start Editing** results in the editor popping up in a new browser tab:
![Screenshot of the different IDE sections](./images/idePartitions.png)

We can identify six distinct areas in the editor:

* The top menu bar is the uppermost area with menus, debug/run buttons, and shortcuts to home and the dashboard
* The project bar lets you select views for your project files, active files, preferences for the editor and deploy options
* The panel displays views according to what you select in the project bar
* The toolbar is on the right-hand side, where you can find tools to check the call stack, monitor variables, and breakpoints.</li>
* The code editor is the main central area where you write your code.
* The console is the bottom area of the window. This can act like a desktop terminal to enter command line input, or, it can display output printed from your program

The first five areas of the editor are described below. Since the console is so powerful, its help can be found elsewhere. 

#### The Top Menu Bar
![A screenshot of the top menu bar](./images/topMenuBar.png)

Here you can find the usual menus for creating andsaving files, changing your view, and switching windows. You also find shortcut buttons for saving and opening a file. 

In the middle of the menu bar, are the run and debug buttons. You can press **run** to execute your Node.js applications. While your application is running, it opens up in a new browser tab and the *stop** button becomes active (so that you can stop your application).

When you debug your application (by pressing the **debug** button), the play, pause and stepping buttons become active, so that you can properly step through your code while looking for bugs. 

On the far right of the menu are two more icons: one for the dashboard and one for home. These are just shortcuts to go back to the dashboard or the Cloud9 IDE home page, respectively.

#### The Project Bar and Panel

On the left side section of the editor is the Project bar. It has four large buttons. From top to bottom, they are: **Project Files**, **Active Files**, **Preferences**, and **Deploy**. Pressing any of these buttons activates a different view in the panel to the right of the buttons. In more detail:

* **Project Files**: Activates a view of your project's directory structure, which appears in the panel to the right. You can view all your files here. Right-click in this area to access a a drop-down menu to create new files, copy/paste and other options.
* **Active Files**: Activates a view of the files that are currently open.
* **Preferences**: Gives you access to general settings and editor settings
* **Deploy**: Allows you to create a Heroku or Joyent No.de deploy server.


#### The Toolbar
In the toolbar, there are tools for debugging your Javascript code. These include a call stack viewer, and viewers for variables and breakpoints. In the future, you'll be able to find more tools, among them the team collaboration tools.

#### The Code Editor
This is where most of the action happens. The files you open appear here as tabs. You can open a new file easily by clicking on the **+** sign to the right of the last tab. Cloud9 IDE offers syntax highlighting and basic code completion for most popular programming languages. For Javascript, we offer mode advanced code completion.

The code editor supports a large number of keyboard shortcuts to increase your productivity. They are too many to include on this page, so they have [their own article](#key-bindings).

The last element of the editor, the console, is not covered in this article. It is an essential feature and it requires [its own article](console).