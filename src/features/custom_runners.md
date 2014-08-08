# Custom Runners

Luckily you're not limited to the default set of Runners in Cloud9.
You can simply define your own custom Runner, which is both simple and very powerful.
All you need to do is create a Runner file.
In this article we'll describe how to do this in just a few steps.

In the Run panel (usually at the bottom of the UI), click the 'Runner' text input and choose 'New Runner'. 
In the new Runner file that's now opened, you can configure your runner
using a simple JSON format. We'll show a basic example below
and then explain the different properties you can use.

Let's start with a basic example: a runner for go files.

    {
        "cmd": ["go", "run", "$file", "$args"],
        "selector": "source.go",
        "info": "Your code is running :)"
    }

This runner will use "go run" for any file that has a ".go" file extension.
If you add it, it'll override our default Go runner.

As another example, let's save a new Node 0.11 configuration, including Harmony support. 
Create a new Runner, add this code, and save it as 'Node 0.11.x.run':

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

That's it! Your custom Runner should be available in the Run panel.

## Runner Variables

Here's a list of all the variables you can use in your runners:

* `$file_path` The directory of the current file, e. g., /home/ubuntu/workspace/docs

* `$file` The full path to the current file, e. g., /home/ubuntu/workspace/docs/Chapter1.txt.

* `$args` Any arguments entered after the file name.

* `$file_name` The name portion of the current file, e. g., Chapter1.txt.

* `$file_extension` The extension portion of the current file, e. g., txt.

* `$file_base_name` The name only portion of the current file, e. g., Document.

* `$packages` The full path to the Packages folder.

* `$project` The full path to the current project file.

* `$project_path` The directory of the current project file.

* `$project_name` The name portion of the current project file.

* `$project_extension` The extension portion of the current project file.

* `$project_base_name` The name only portion of the current project file.

* `$hostname` The hostname of the workspace.

* `$hostname_path` The hostname of the workspace together with the relative path of the project file.

* `$url` The full url to access the workspace.

* `$port` The port assigned to the workspace.

* `$ip` The ip address to run a process against in the workspace.