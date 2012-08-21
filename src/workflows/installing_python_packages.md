# Installing Python Packages

We use `easy_install`. 0.6.10 

official docs: http://peak.telecommunity.com/DevCenter/EasyInstall

First, add your current directory to the PYTHONPATH env variable:

```bash
export PYTHONPATH=pwd:$PYTHONPATH
```

Then, install the package:

```bash
easy_install markdown
```

You won't see the package installed in the directory tree, because it's burried deep in the Python libs. But if you open a Python REPL, there it is:

```bash
>>> help('modules')
```

Finally, do something like this:

```python
import markdown

html = markdown.markdown("# HELLO THERE!")

print html
```