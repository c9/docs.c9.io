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

Note:
MySQL socket file can be found in ~/lib/mysql/socket/mysql.sock

Of course this is just the beginning. We have for example plans to add a management UI to start and stop databases or pre-installing tools like phpMyAdmin. However, we don't want to make you wait for the fully integrated feature while we already have something that is enabling a lot of use cases and still super easy to use.
