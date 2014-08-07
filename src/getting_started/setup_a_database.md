# Set up a database

##MySQL
From the Terminal, run the following command:

    $ mysql-ctl install

The output will be:

    MySQL 5.5 database added.  Please make note of these credentials:
    
    Root User: username
    Database Name: c9

Now you can connect to the database using the ip *127.0.0.1* and the default port *3306*.
You can also test it using our tool from the Terminal:

    $ mysql-ctl cli
    Welcome to the MySQL monitor.  Commands end with ; or \g.
    Your MySQL connection id is 24
    Server version: 5.5.37-0ubuntu0.14.04.1 (Ubuntu)
    
    Copyright (c) 2000, 2014, Oracle and/or its affiliates. All rights reserved.
    
    Oracle is a registered trademark of Oracle Corporation and/or its
    affiliates. Other names may be trademarks of their respective
    owners.
    
    Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.
    
    mysql>  show databases;
    +--------------------+
    | Database           |
    +--------------------+
    | information_schema |
    | c9                 |
    | mysql              |
    | performance_schema |
    +--------------------+
    4 rows in set (0.15 sec)


## MongoDB
From the terminal, run the following command:

    $ mongod --bind_ip=$IP --nojournal

The output will include:

    ...
    waiting for connections on port 27017

Now you can open the mongo shell in a new terminal, running following command:

    $ mongo

To stop the MongoDB instance press `Control+C` in the terminal where `mongod` is running.
Now have a look at the currently used database:

    $ mongo
    mongo> db
    test
