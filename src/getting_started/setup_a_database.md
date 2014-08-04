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


<!--## MongoDB-->
<!--TODO-->

<!--The $IP variable is intended to use to start a process that wants to be connected to the outside world. To connect to mongodb you can use "localhost".-->