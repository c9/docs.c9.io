## Running and Debugging Your Code

Cloud9 IDE provides several ways to run and debug your code. We'll explore each of them in this article.

### Running Code

Running your code in Cloud9 is really easy. First, open the file you want to run. Usually, this file is going to be the main entry point to your app; for example, if you're creating a server, you'd want to run the file that actually instantiates that server.

Next, click on the **Run** button in [the project bar](./project_bar.html). You'll notice immediately that your active file is already available to run. Just double-click on the file, and you'll launch your app.

At the bottom of the run panel, you'll notice a few more options you can set:

* **Name**: the name of your run scenario
* **File Path**: the location of your running file in your project
* **Runtime**: {:nodejsRuntime}
* **Cmd Line Args**: any additional command line arguments you want to pass to your app

You can also save your run scenarios. Just click on the **add** button at the top of the panel. When you're ready to run a scenario, click on its name in the list. Finally, to remove a run scenario, click on its name in the run panel list, and then click on the **remove** button. 

When you're ready to stop your app, click on the {:stopButton} button in the menu bar.

#### Console Output

Every time you run a project, the console expands to reveal output from your program. If you're launching a server, Cloud9 provides you with a URL to access the project. Otherwise, any statements sent by your program's print statements (like `console.log()`) are also shown here.

### Debugging Your Code

Setting up a project to debug is done in very much the same way as running your code. The only difference is that you must click on the run settings icon ![Run Settings Icon: A Gear with an Arrow](./icons/runSettingsIcon.png) and select "Run in debug mode."

Initially, the only difference this will make is the expansion of the debugging toolbar to the right of the editor:  
![The toolbar used for debugging](./images/tool_bar.png)

You'll have access to the following capabilities:

* Debugging Navigation: this is a set of tools you can use to move around your code while debugging. You can step into, over, and out of your code, or simply press play to run the process until the next breakpoint.
![Debugging navigation tools](./icons/debug_navigation.png)
* Callstack ![Icon for the callstack](./icons/callStackIcon.png): this is a structured list of information about the sequences of your code--basically, which functions are calling what, and where you are in the current process. It also stores local variables and function arguments, if present. You can use this feature to check how your code is running:  
![Callstack menu window](./images/callStack.png)
* Interactive Mode ![Icon for interactive mode](./icons/interactiveIcon.png): lets you evaluate a piece of code, such as expressions or the values and properties of variables. The text field allows you to type any code you want, in case you discover a way to fix you problem:
![Interactive mode window](./images/interactiveMenu.png)
* Variable Inspection ![Icon for variable inspection](./icons/variablesIcon.png): this shows all the related variables (including functions) that are present in the current context:
![Variable inspection window](./images/variablesMenu.png)  
While debugging, you also have the power of the live inspector. While hovering over a piece of code in the editor, you'll instantly get some floating text that describes the values of that variable:  
![Live inspection window](./images/debugLiveInspector.png)  
* Breakpoints: at any point during your coding or debugging session, you can click on the gutter to apply a breakpoint: ![Breakpoint Icon](./icons/breakpoint.png). When debugging your code, the process pauses at your established breakpoints, so that you can inspect closely what's going on in a certain part of the code. You can click on the breakpoint list to view all the breakpoints in your workspace: ![Icon for breakpoint list](./icons/breakpointsIcon.png)