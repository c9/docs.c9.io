# PHPMyAdmin

PHPMyAdmin provides an easy to use web interface to manage your MySQL database/s

## PHPMyAdmin's most common features
* Import data from CSV and SQL
* Export data to various formats: CSV, SQL, XML, PDF, Word, Excel, LaTeX and others
* Creating PDF graphics of the database layout
* Creating complex queries using Query-by-Example (QBE)
* Searching globally in a database or a subset of it
* Transforming stored data into any format using a set of predefined functions, like displaying BLOB-data as image or download-link
* Live charts to monitor MySQL server activity like connections, processes, CPU/Memory usage, etc.
* [Many more](http://en.wikipedia.org/wiki/PHPMyAdmin)<br/>

## Using PHPMyAdmin with Cloud9
This article explains our first iteration of PHPMyAdmin support in Cloud9. It makes it super easy to install a PHPMyAdmin instance right in your workspace. Each workspace runs it's own Database and copy of PHPMyAdmin.

```bash
# Install PHPMyAdmin
$ phpmyadmin-ctl install
```

After the installation is complete you'll be given a link to access PHPMyAdmin. If you'd like further help using the software please consult the [official PHPMyAdmin docs](http://www.phpmyadmin.net/home_page/docs.php)</a>.