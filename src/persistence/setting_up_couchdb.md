# CouchDB

[Apache CouchDB™](http://couchdb.apache.org/) is a database that uses JSON for documents,
JavaScript for MapReduce indexes, and regular HTTP for its API.

## Running CouchDB on a Cloud9 workspace

CouchDB is preinstalled in your workspace. To run CouchDB, run the following below.

    $ sudo mkdir -p /var/run/couchdb
    $ sudo chown couchdb:couchdb /var/run/couchdb 
    $ sudo su couchdb -c /usr/bin/couchdb
    
## Testing the connection

To check if the database is running execute this in a new terminal:

    $ curl http://127.0.0.1:5984