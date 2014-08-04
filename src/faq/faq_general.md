# FAQ: General

### How do I deploy to Heroku/Openshift/Azure/...? 
See [Deploying via CLI](./deploying_via_cli.html).

### Can I connect to SMTP servers (port 25)? 
No, this is not supported by our hosting platform. It does currently allow access to the GMail servers though, so you can use that service during development.

### My workspace says it's out of quota. how do I fix it? 
You can inspect your current quota usage with the df command in the Terminal:

    df

To find which files and directories are consuming a lot of space, go to a directory such as your home directory, and run this command:

    du -m -d 1 -a | sort -n

This should give you a list of all members of that directory and how much space they use in megabytes.

Alternatively, try du-c9 for seeing all files you added to your workspace and account for the quota.

### I can't preview my running app. 
Try using port 8080 instead, which often solves this case.