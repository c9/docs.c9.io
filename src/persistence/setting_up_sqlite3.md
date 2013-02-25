# SQLite

SQLite is a software library that implements a self-contained, serverless, zero-configuration, transactional SQL database engine. SQLite is the most widely deployed SQL database engine in the world. The source code for SQLite is in the public domain.

Note: SQLite supports full text search and ACID transactions (atomic, consistent, isolated, and durable)
With its simplicity and zero-configuration, SQLite is a popular choice for new applications.

## Getting started

You can open the terminal and create a database in a file `db_test.db` as follows:

![Screenshot of creating a simple sqlite db](./resources/images/sqlite3_simple_db.png)

### Try yourself

```no-highlight
$ sqlite3 db_test.db
SQLite version 3.6.20
Enter ".help" for instructions
Enter SQL statements terminated with a ";"
sqlite> create table tbl1(one varchar(10), two smallint);
sqlite> insert into tbl1 values('hello!',10);
sqlite> insert into tbl1 values('goodbye', 20);
sqlite> select * from tbl1;
hello!|10
goodbye|20
sqlite> CREATE TABLE tbl2 (
   ...>   f1 varchar(30) primary key,
   ...>   f2 text,
   ...>   f3 real
   ...> );
sqlite> .exit
```

To get to know sqlite commands, use the command: `.help`.

To exit sqlite, use the command: `.exit`.

## Drivers
SQLite has drivers for all supported runtimes.

Followig are the most commonly used drivers:

### Node.JS apps

[node-sqlite](https://github.com/orlandov/node-sqlite)

### Rails apps

In your `Gemfile`, include the line:
    gem 'sqlite3'
and in `configs/database.yml`, make sure you use:
    adapter: sqlite3
    database: db/development.db