# Java Runner

While there are currently no Java builders or runners out of the box, the process of making your own is very quick.

##Creating a Java builder

In the menu, go to Run > Build System > New Build System

You may copy and paste the following code for your Java builder:

```bash
{
  "cmd": [
    "sh",
    "-c",
    "mkdir -p $OUT_DIR; find $SRC_DIR -name \"*.java\" -print | xargs javac -sourcepath $SRC_DIR -d \"$OUT_DIR\"; echo '\\033[01;34mDone!\\033[00m'"
  ],
  "info": "\\033[01;34mBuilding\\033[00m \\033[01;31m$project_name\\033[00m",
  "env": {"OUT_DIR": "$project_path\\.bin", "CLASSPATH" : "$OUT_DIR:$CLASSPATH", "SRC_DIR": "src"},
  "selector": "source.java",
  "working_dir": "$project_path"
}
```

This code builds .java files from the src/ directory. If you are using a different directory to store your .java files, change the `SRC_DIR` to match that directory.

Similarly, the output directory is set to the .bin/ directory in your workspace. If you'd like to change that, change the `OUT_DIR` (be sure to apply that same change in your custom runner file).

To build with your new builder, go to your Java file then click Run > Build System > My Builder. The .class files are now in your chosen output directory.

Note:
"My Builder" is the default name for a new builder. You may change the filename of your builder, just be sure to select this new builder. The same will be true for your runner.

##Creating a Java runner

In the menu, go to Run > Run With > New Runner

You may copy and paste the following code for your Java runner:

```bash
{
  "cmd": [
    "sh",
    "-c",
    "echo $file | sed -r 's/.*\\/src\\///g' | sed -r 's/\\.java//g'  | sed -r 's/\\//\\./g' | xargs java"
  ],
  "info": "\\033[01;34mRunning\\033[00m \\033[01;31m$file_name\\033[00m\n",
  "env": {"OUT_DIR": "$project_path\\.bin", "CLASSPATH" : "$OUT_DIR:$CLASSPATH"},
  "selector": "source.java",
  "working_dir": "$project_path"
}
```
To run your .class files with this new runner, go to your Java file then click Run > Run With > My Runner.
