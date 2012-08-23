# Installing Python Packages

Cloud9 supports the installation of Python packages for applications that need to go beyond the standard library set. Every workspace has version 0.6.10 of Python's `easy_install` package manager. For more information on this module, see [the official `easu_install` documentation](http://peak.telecommunity.com/DevCenter/EasyInstall).

Let's try installing a package. First, type the following in the console:

```bash
easy_install markdown
```

This installs [the `markdown` Python package](http://pypi.python.org/pypi/Markdown/) to your workspace. You won't see the package installed in the directory tree, because it's kept deep within your project's the Python libs. 

Next, create a new Python script, and add these lines of code:

```python
import markdown

html = markdown.markdown("# HELLO THERE!")

print html
```

After clicking **run**, the console will correctly print out `<h1>HELLO THERE!</h1>`.

You have access to all of the functionality `easy_install` provides you. For example, you can open up the Python REPL and type the following to see a list of your installed packages:

```bash
>>> help('modules')
```