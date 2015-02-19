# MySQL

MySQL is the world's most widely used open source relational database management system (RDBMS) that runs as a server providing multi-user access to a number of databases.

## MySQL's most common features
* A broad subset of ANSI SQL 99, as well as extensions<br/>
* Cross-platform support<br/>
* Stored procedures<br/>
* Triggers<br/>
* Cursors<br/>
* Updatable Views<br/>
* Information schema<br/>
* [Many more](http://en.wikipedia.org/wiki/MySQL)<br/>

## Using MySQL with Cloud9
This article explains our first iteration of MySQL support in Cloud9. It makes it super easy to install, start and stop a MySQL instance right in your workspace. The nice thing is that every workspace will run a separate database so your projects will never interfere with each other. You can control MySQL with the `mysql-ctl` command line tool run from the terminal:

```bash
# start MySQL. Will create an empty database on first start
$ mysql-ctl start

# stop MySQL
$ mysql-ctl stop

# run the MySQL interactive shell
$ mysql-ctl cli
```

After having started (and with that created) the database, you can connect to it using the following parameters:
<div markdown="1">
<table class="table table-striped table-bordered">
    <thead>
        <tr>
            <th>Option</td>
            <th>Value</td>
            <th>Comment</td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>`Hostname`</td>
            <td>`$IP`</td>
            <td>The environment variable 'IP' (type in a terminal: echo $IP)</td>
        </tr>
        <tr>
            <td>`Port`</td>
            <td>`3306`</td>
            <td>The default MySQL port number</td>
        </tr>
        <tr>
            <td>`User`</td>
            <td>`$C9_USER`</td>
            <td>Your Cloud9 user name (again an environment variable)</td>
        </tr>
        <tr>
            <td>`Password`</td>
            <td>`<empty>`</td>
            <td>No password (empty string); access is restricted to the the workspace</td>
        </tr>
        <tr>
            <td>`Database`</td>
            <td>`c9`</td>
            <td>The database name</td>
        </tr>
    </tbody>
</table>
</div>

## Importing data into your database

To import existing data into your database run following commands:

    mysql-ctl cli

You are now in the MySQL environment and can start the import:

    mysql> use c9
    mysql> source PATH_TO_SQL_FILE.sql

To verify that everything got imported run:

    mysql> show tables;
    
Some useful CLI commands (please note the semicolon at the end of most of them):
<div markdown="1">
<table class="table table-striped table-bordered">
    <thead>
        <tr>
            <th>Command</td>
            <th>Description</td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>`help`</td>
            <td>`list all mysql commands`</td>
        </tr>
        <tr>
            <td>`show databases;`</td>
            <td>`list the available databases`</td>
        </tr>
        <tr>
            <td>`use c9`</td>
            <td>`select/use database c9`</td>
        </tr>
        <tr>
            <td>`show tables;`</td>
            <td>`list the tables of the current database`</td>
        </tr>
        <tr>
            <td>`exit`</td>
            <td>`close the mysql command line tool`</td>
        </tr>
        <tr>
            <td>`select * from mysql.user;`</td>
            <td>`show all records/columns from system table user`</td>
        </tr>
    </tbody>
</table>
</div>

## Connecting from PHP

So now you know how to create a database, start the db server, access it via a 
command line tool.. It is time for the real deal: accessing it from your code.

In this example we will connect from PHP:

1. Create a new file, call it `connect.php` 

2. Copy/paste the following code in there:
```bash
<?php
    // A simple PHP script demonstrating how to connect to MySQL.
    // Press the 'Run' button on the top to start the web server,
    // then click the URL that is emitted to the Output tab of the console.

    $servername = getenv('IP');
    $username = getenv('C9_USER');
    $password = "";
    $database = "c9";
    $dbport = 3306;

    // Create connection
    $db = new mysqli($servername, $username, $password, $database, $dbport);

    // Check connection
    if ($db->connect_error) {
        die("Connection failed: " . $db->connect_error);
    } 
    echo "Connected successfully (".$db->host_info.")";
?>
```

3. Run the code by a right-click on the file tab 'connect.php', select 'run this file'

4. The output pane shows 'Starting Apache httpd...'

5. Click the link that is displayed after that

6. A preview pane will open, showing 'Connected successfully'.


Note:
MySQL socket file can be found in ~/lib/mysql/socket/mysql.sock

<!--

Using PHPMyAdmin

PHPMyAdmin comes preinstalled on Cloud9 workspaces. You can run it in a similar fashion to how you would run it locally.

First, set up a new site entry in the Apache configuration:

````bash
ln -s /etc/phpmyadmin/apache.conf /etc/apache2/sites-enabled/phpmyadmin.conf
````

-->