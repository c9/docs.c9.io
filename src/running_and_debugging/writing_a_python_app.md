# Writing a Python App

While using Cloud9 IDE, you have access to the Python runtime. Accessing the command is no different than the way you'd use Python on your computer; just open the command line and type `python`. Currently, we run version 2.6.6.

To run a Python program that you've created, you can either:

* Open the command line and  type `python`, followed by the name of your program; for example `python hello_world.py`
* Create [a new run scenario](./running_and_debugging_code.html), so that you can do things like pass in command line arguments

As a quick demonstration, open a new file, and paste this Python code into it:

```python
#!/usr/bin/python

print "Hello World!";
```

When you hit the ![The Run Button](./resources/icons/runButton.png) button in the menu bar, the console will print out `Hello World!`.

Note: Currently, you can't debug Python applications, but we are working on adding this feature.