# PostgreSQL

## Installing PostgreSQL on a Cloud9 workspace

PostgreSQL comes preinstalled on every Cloud9 workspace, yay.

## Start the PostgreSQL service

    $ sudo service postgresql start

## Connect to the service

    $ sudo -u postgres psql 

## Create a PostgreSQL database

Make sure you have logged into the PostgreSQL terminal and then you can just run:

    $ sudo -u postgres psql 
    postgres=# create database groceries
