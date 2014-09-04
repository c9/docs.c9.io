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

You can then connect to the database with following parameters:
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
            <td>The same local IP as the application you run on Cloud9</td>
        </tr>
        <tr>
            <td>`Port`</td>
            <td>`3306`</td>
            <td>The default MySQL port number</td>
        </tr>
        <tr>
            <td>`User`</td>
            <td>`$C9_USER`</td>
            <td>Your Cloud9 user name</td>
        </tr>
        <tr>
            <td>`Password`</td>
            <td>-</td>
            <td>No password since you can only access the DB from within the workspace</td>
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