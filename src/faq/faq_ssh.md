# FAQ: SSH workspaces


### I cannot create a SSH workspace using a Digital Ocean droplet

We recently discovered our web host is blocking connections to some Digital Ocean IP addresses because they suspect they are being used by Iranian users. They are legally forced to block them. 

This issue is the result of an error on Google's GeoDNS and they should be contacted about this if it persists.

### I'm getting an error on the SSH install script: "ncurses not found" 
Try executing the following command:

    yum install ncurses-devel 
    
or 

    yum install glibc-static 