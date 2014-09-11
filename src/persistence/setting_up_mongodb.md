# MongoDB

MongoDB is a scalable, high-performance, open source NoSQL database.

## MongoDB's most common features

* Document-Oriented Storage<br/>
JSON-style documents with dynamic schemas offer simplicity and power.

* Full Index Support<br/>
Index on any attribute, just like you're used to.

* Querying<br/>
Rich, document-based queries.

In addition, MongoDB has many scalability features such as:

**Replication**, **Auto-sharding**, **Map/Reduce** and **GridFS**

## Running MongoDB on a Cloud9 workspace
MongoDB is preinstalled in your workspace. To run MongoDB, run the following below (passing the correct parameters to it). Mongodb data will be stored in the folder `data`.

```no-highlight
$ mkdir data
$ echo 'mongod --bind_ip=$IP --dbpath=data --nojournal --rest "$@"' > mongod
$ chmod a+x mongod
```

You can start mongodb by running the `mongod` script on your project root:<br/>
`$ ./mongod`

### MongoDB parameters used:
`--dbpath=data` (because it defaults to /var/db which isn't accessible)<br/>
`--nojournal` because mongodb usually pre-allocates 2 GB journal file (which exceeds Cloud9 disk space quota)<br/>
`--bind_ip=$IP` (because you can't bind to 0.0.0.0)<br/>
`--rest` runs on default port 28017

## Drivers

You should use the host `$IP` instead of `localhost` as your driver connection url.<br/>
e.g. in Node, it is: `process.env.IP`

MongoDB has drivers for all supported runtimes. Following are the most commonly used drivers:

### Node.JS apps
**[Mongoose](https://github.com/LearnBoost/mongoose)**<br/>
**[Node-Mongodb-Native](https://github.com/mongodb/node-mongodb-native)**

## Shell Access

To access a shell prompt for the above MongoDB run the following.

```no-highlight
$ mongo
```

Check out [docs.mongodb.org](http://docs.mongodb.org/manual/reference/mongo-shell/) for details on how to use the shell
