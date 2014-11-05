# FAQ: SSH workspaces


### I cannot create a SSH workspace using a Digital Ocean droplet

We recently discovered our web host is blocking connections to some Digital Ocean IP addresses because they suspect they are being used by Iranian users. They are legally forced to block them. 

Digital Ocean maintains a whitelist of droplet IP addresses which should not be blocked and our web host follows this list. 

Please raise a support ticket with Digital Ocean mentioning that you would like to have your droplet IP added to the whitelist. After this is complete you will be able to create your SSH workspace within 24 - 48 hours.


### I'm getting an error on the SSH install script: "ncurses not found" 
Try executing the following command:

    yum install ncurses-devel 
    
or 

    yum install glibc-static 