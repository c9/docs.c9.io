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
Cloud9 IDE does not support installing a MySQL database (yet). As a workaround you can choose to connect your project to a MySQL database hosted elsewhere. [Xeround](http://xeround.com/mysql-cloud-db-free-registration/)
offers hosted MySQL instances and have a free tier available for getting started.

## Xeround
1. Register with Xeround<br/>
2. Log in to your controlpanel<br/>
3. Choose 'create new'<br/>
4. Choose a datacenter<br/>
5. Enter your Database name, Username and Password and create<br/>
6. Select your newly created instance and click the 'External DNS Hostname' link provided to log into PHPMyAdmin<br/>
7. Create and import/setup your database<br/>

## Cloud9
1. Log into your account<br/>
2. Create a new project (or use an existing one)<br/>
3. Test the connection using the following script:<br/>
```php
            <?php
            
            $database = new mysqli('instanceNo.db.xeround.com', 'username', 'password', 'databasename', 'port');
    
            if($database->connect_errno > 0){
                die ('Database Error' . $database->connect_error); 
            }else{
                die ('Connected!');
            }
            ?>
```
4. Save the file<br/>
5. Run the file<br/>

## Source
Courtesy of Roger Qui of [Polycadamy](http://polycademy.com/). This guide is elaborately explained in a [video tutorial](http://youtu.be/A2Z29Dhw0Pk)

