# SSH Workspaces
To connect your Cloud9 IDE to a server via SSH, we first need to install a few dependencies on your system. 
This is done by an open-source installer [which you can find here](https://github.com/c9/install/).

Usually the installation should succeed without any issues, but on some systems you will need to install a few dependencies manually. See below for common dependency issues you might run into.

## Installing Python 2.7 on CentOS

    curl -O https://www.python.org/ftp/python/2.7.6/Python-2.7.6.tar.xz
    tar xf Python-2.7.6.tar.xz
    cd Python-2.7.6
    ./configure --prefix=/usr/local
    make && make altinstall
