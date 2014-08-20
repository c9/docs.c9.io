# PostgreSQL

## Installing PostgreSQL on a Cloud9 workspace

First we need to get the latest updates from the apt-get repository

    $ sudo apt-get update

And then install PostgreSQL by running the following command in the Terminal

    $ sudo apt-get install postgresql postgresql-contrib

### Create a ProstgreSQL database

Now that PostgreSQL is installed, lets go and create a database.
First we switch to the postgres user:

    $ sudo su postgres  
    
And now can create a database executing

    $ createdb groceries