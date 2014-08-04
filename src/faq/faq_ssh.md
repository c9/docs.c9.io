# FAQ: SSH workspaces

### I'm getting an error on the SSH install script: "ncurses not found" 
Try executing the following command:

    yum install ncurses-devel 
    
or 

    yum install glibc-static 