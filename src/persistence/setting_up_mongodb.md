# MongoDB

MongoDB is a scalable, high-performance, open source NoSQL database.

## MongoDB's most common features:

* Document-Oriented Storage<br/>
JSON-style documents with dynamic schemas offer simplicity and power.

* Full Index Support<br/>
Index on any attribute, just like you're used to.

* Querying<br/>
Rich, document-based queries.

In addition, MongoDB has many scalability features such as:

**Replication**, **Auto-sharding**, **Map/Reduce** and **GridFS**

## Installation

Open the terminal and follow the following commands:

```no-highlight
$ cd ~/$C9_PID # cd to project root folder
$ # Download mongodb source
$ wget http://downloads.mongodb.org/linux/mongodb-linux-x86_64-2.0.4.tgz
$ tar -zxvf mongodb-linux-x86_64-2.0.4.tgz # Extract it
$ rm -rf mongodb-linux-x86_64-2.0.4.tgz # Remove the compressed source
```
Now, we create a script to run mondodb (passing the correct parameters to it)
mongodb data will be stored in the folder `data`

```no-highlight
$ mkdir data
$ echo './mongodb-linux-x86_64-2.0.4/bin/mongod --bind_ip=$IP --dbpath=data --nojournal "$@"' > mongod
$ chmod a+x mongod
```

You can start mongodb by running the `mongod` script on your project root:<br/>
`$ ./mongod`

### MongoDB parameters used:
`--dbpath=data` (because it defaults to /var/db which isn't accessible)<br/>
`--nojournal` because mongodb usually pre-allocates 2 GB journal file (which exceeds Cloud9 disk space quota)<br/>
`--bind_ip=$IP` (because you can't bind to 0.0.0.0)

## Drivers
MongoDB has drivers for all supported runtimes. Followig are the most commonly used drivers:

### Node.JS apps:
**[Mongoose](https://github.com/LearnBoost/mongoose)**<br/>
**[Node-Mongodb-Native](https://github.com/mongodb/node-mongodb-native)**
