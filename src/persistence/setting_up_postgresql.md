# PostgreSQL

## Installing PostgreSQL on a Cloud9 workspace

First we need to get the latest updates from the apt-get repository

    $ sudo apt-get update

And then install PostgreSQL by running the following command in the Terminal

    $ sudo apt-get install postgresql postgresql-contrib

### Set the "postgres" user password

    $ sudo sudo -u postgres psql                                                                                  
    psql (9.3.4, server 9.3.5)
    Type "help" for help.
    
    postgres=# \password
    Enter new password: 
    Enter it again: 
    postgres=# \q

### Create a ProstgreSQL database

Now that PostgreSQL is installed, lets go and create a database.
First we switch to the postgres user:

    $ sudo su postgres  
    
And now can create a database executing

    $ createdb groceries