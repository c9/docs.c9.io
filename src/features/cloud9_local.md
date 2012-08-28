# Cloud9 Local

For situations where internet access is limited, Cloud9 has an offline client that we call __Cloud9 Local__. Cloud9 Local provides all the functionality of the online editor, like [revisions](./revisions.html), [JSHint warnings](./language_analysis.html), [language autocompletion](./autocompletion.html), and more. The only features unavailable to Cloud9 are those that require an internet connection--namely, [deploying your code](./deploying_code.html).

In the future, Cloud9 Local will also allow you to seamlessly sync between your online and local environments. In other words, changes made to your online workspaces will be instantly brought down to your computer, and vice versa.


## Installing Cloud9 Local

Currently, Cloud9 Local is only available for Mac OS X (10.7+) and Linux. You can get the program in several ways:

1. If you have [npm](http://npmjs.org/) installed, simply type  
```bash
npm install c9 -g
```
This downloads the Cloud9 local module and unpacks it onto your computer
2. Mac OS X users can [download the latest DMG file](http://static.c9.io/c9local/prod/c9local-latest.dmg). Similarly, Linux users can get [the latest tarball](http://static.c9.io/c9local/prod/c9local-latest.tgz).

## Running Cloud9 Local

For Mac OS X users, double-clicking the _Cloud9 IDE.app_ file launches you into your dashboard. From there, you can work on any previously created local projects.

More often, though, you'll want to launch the IDE through the command line. When you install Cloud9 Local, you have acces to a new command called `c9`. Using `c9` to open a directory or file creates a new workspace for you to work in. For example, the following sequence of commands clones [the Ace GitHub project](https://github.com/ajaxorg/ace) and opens it in Cloud9 Local:

```bash
git clone git://github.com/ajaxorg/ace.git
cd ace
c9 .
```

Alternatively, you could perform operations like `c9 ace` or `c9 ace/lib/ace/editor.js` to directly open the workspace.

To get a full list of the commands available to you, type `c9 --help` on the command line.

## Updating Cloud9 Local

Periodically, Cloud9 Local will automatically check to see if an update is available. It won't download these updates unless you want it to.

To download updates, check to see if the Cloud9 icon in the upper-right corner of the IDE has a green arrow. Clicking on the icon will prompt you to download a new version. Remember: after downloading an update, you must type `c9 --restart` on the command-line to restart the IDE.

Alternatively, you could type `c9 --update` on the command-line. This fetches the new update, installs it, and restarts the server.