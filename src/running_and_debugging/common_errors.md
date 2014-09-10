# Common errors

Sometimes you run into issues when you run your project. Here you will find the most common issues and how to solve them.Debugging running apps

## Address in use or similar

The most common reason for an error thrown by your app stating that a port or address is in use is the fact that some process is already running listening on that port/address. You need to take a look for those and kill the processes conflicting with your app:

    // Find the process
    sudo lsof -i tcp:$PORT

If any relevant process is running you will get a list looking like this:

    COMMAND PID   USER   FD   TYPE   DEVICE SIZE/OFF NODE NAME
    apache2 699 ubuntu    4u  IPv6 83213152      0t0  TCP *:http-alt (LISTEN)
    
You now can kill that proccess, Make sure you replace PID with the ID of the process.

    // Kill the process
    sudo kill -9 PID