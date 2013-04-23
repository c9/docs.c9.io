#MySQL

MySQL is the world's most widely used open source relational database management system (RDBMS) that runs as a server providing multi-user access to a number of databases.

##MySQL's most common features
* A broad subset of ANSI SQL 99, as well as extensions<br/>
* Cross-platform support<br/>
* Stored procedures<br/>
* Triggers<br/>
* Cursors<br/>
* Updatable Views<br/>
* Information schema<br/>
* Strict mode (ensures MySQL does not truncate or otherwise modify data to conform to an underlying data type, when an incompatible value is inserted into that type)<br/>
* X/Open XA distributed transaction processing (DTP) support; two phase commit as part of this, using Oracle's InnoDB engine<br/>
* Independent storage engines (MyISAM for read speed, InnoDB for transactions and referential integrity, MySQL Archive for storing historical data in little space)<br/>
* Transactions with the InnoDB, and Cluster storage engines; savepoints with InnoDB<br/>
* SSL support<br/>
* Query caching<br/>
* Sub-SELECTs (i.e. nested SELECTs)<br/>
* Replication support (i.e. Master-Master Replication & Master-Slave Replication) with one master per slave, many slaves per master, no automatic support for multiple masters per slave.<br/>
* Full-text indexing and searching using MyISAM engine<br/>
* Embedded database library<br/>
* Unicode support (however prior to 5.5.3 UTF-8 and UCS-2 encoded strings are limited to the BMP, in 5.5.3 and later use utf8mb4 for full unicode support)<br/>
* ACID compliance when using transaction capable storage engines (InnoDB and Cluster)<br/>
* Partitioned tables with pruning of partitions in optimizer<br/>
* Shared-nothing clustering through MySQL Cluster<br/>
* Hot backup (via mysqlhotcopy) under certain conditions<br/>
* Multiple storage engines, allowing one to choose the one that is most effective for each table in the application (in MySQL 5.0, storage engines must be compiled in; in MySQL 5.1, storage engines can be dynamically loaded at run time):<br/>
    * Native storage engines (MyISAM, Falcon, Merge, Memory (heap), Federated, Archive, CSV, Blackhole, Cluster, EXAMPLE, Aria, and InnoDB, which was made the default as of 5.5)<br/>
    * Partner-developed storage engines (solidDB, NitroEDB, ScaleDB, TokuDB, Infobright (formerly Brighthouse), Kickfire, XtraDB, IBM DB2).[37] InnoDB used to be a partner-developed storage engine, but with recent acquisitions, Oracle now owns both MySQL core and InnoDB.<br/>
    * Community-developed storage engines (memcache engine, httpd, PBXT, Revision Engine)<br/>
    * Custom storage engines<br/>
* Commit grouping, gathering multiple transactions from multiple connections together to increase the number of commits per second. (PostgreSQL has an advanced form of this functionality[38])<br/>

##Using MySQL with Cloud9
Cloud9 IDE does not support installing a MySQL database (yet). As a workaround you can choose to connect your project to a MySQL database hosted elsewhere. [Xeround](http://xeround.com/mysql-cloud-db-free-registration/)
offers hosted MySQL instances and have a free tier available for getting started.

##Xeround
1. Register with Xeround<br/>
2. Log in to your controlpanel<br/>
3. Choose 'create new'<br/>
4. Choose a datacenter<br/>
5. Enter your Database name, Username and Password and create<br/>
6. Select your newly created instance and click the 'External DNS Hostname' link provided to log into PHPMyAdmin<br/>
7. Create and import/setup your database<br/>

##Cloud9
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
4. Save the file
5. Run the file
