# Running Wordpress on Cloud9

To demonstrate just how amazing the Cloud9 IDE platform is, we're going to install the Wordpress platform, including any database dependencies, to create our own blog. While Premium users can have total control over the entire system, the sequence is a little more complicated for free users: they will need to have their database managed by another platform, like Heroku. We'll show both methods in this tutorial.

<!-- video-->

## Installing Wordpress

To install Wordpress on your Cloud9 IDE instance:

1. Grab [the latest Wordpress zip file](http://wordpress.org/latest.zip), and unzip it.
2. Go to [[menu: File, Upload Files]] and select the Wordpress folder you just created.
3. Rename _wp-config-sample.php_ to _'wp-config.php_

In order to run Wordpress, you need a database to host your files. You could use MySQL, but for this project, we'll use PostgreSQL. To get that to work, we'll need to install [the `pg4wp` plugin](http://wordpress.org/extend/plugins/postgresql-for-wordpress/installation/). Follow the steps in the installation page to add it. We still have no connection, because no database was installed on the virtual machine in Cloud9, but now we've got something to get started with. 

We'll need to actually install PostgreSQL next. 

## Installing the Database

**For Premium Users**: you have access directly to the Cloud9 IDE machine you're sitting at, so you'll be able to directly install the database into your account.

Note: you cannot use a local database if you want to deploy the Wordpress blog to a service like Heroku. See the "free" solution below for information on how to do that.

To install PostgreSQL locally, click [[menu: View, Terminals, New Terminal]], then entire the following commands:

```
cd ..
mkdir pgsource
cd pgsource
wget http://ftp.postgresql.org/pub/source/v9.1.4/postgresql-9.1.4.tar.gz
tar xzfv postgresql-9.1.4.tar.gz        
cd postgresql-9.1.4
./configure --without-readline --prefix=$PWD/../postgres
make
make install
cd ~/pgsource/postgres/bin
./initdb -D ../data
./pg_ctl -D ../data -l logfile start
./createdb wp
```
Essentially, we're:
  * grabbing the PostgreSQL source code
  * untarring it
  * configuring and compiling it 
  * starting the database
  * creating a new database called wp

In _wp-config.php_, change the code to match your new PostgreSQL database:

```
<?php 
define('DB_NAME', 'wp'); 
define('DB_USER', ''); 
define('DB_PASSWORD', ''); 
define('DB_HOST', 'localhost:5432'); 
define('DB_CHARSET', 'utf8'); 
define('DB_COLLATE', ''); 
?>
```

**For Free Users**: you'll need to find a hosted database solution. Fortunately, [Heroku offers a hosted PostgreSQL solution](https://postgres.heroku.com/) for free. Create a database there, then modify the _wp-config.php_ to match the following configuration:

```
<?php 
if (getenv("C9_PROJECT")) { 
    define('DB_NAME', 'wp'); 
    define('DB_USER', ''); 
    define('DB_PASSWORD', ''); 
    define('DB_HOST', 'localhost:5432'); 
} 
else { 
    define('DB_NAME', 'HEROKUDBNAME'); 
    define('DB_USER', 'HEROKUUSER'); 
    define('DB_PASSWORD', 'HEROKUPWD'); 
    define('DB_HOST', 'HEROKUHOST.compute-1.amazonaws.com:5432'); 
} 

define('DB_CHARSET', 'utf8'); 
define('DB_COLLATE', ''); 
?>
```

## Deploy the Blog

Now it's time to push this platform to a hosted service. We'll be using Heroku again for this last part:

1. Click on the **Deploy** icon in the project bar, and click on the plus icon to add a new deployment target
2. Select Heroku from the dropdown list, and enter your login credentials
3. In the Cloud9 IDE console, enter the following commands:
```
git remote add heroku git@heroku.com:APPNAME.git
git add .
git commit -m "Initial commit"
git push heroku master
```
Where APPNAME is the name of the app you've created on Heroku. These commands pushes your Wordpress changes directly to Heroku.

After you perform the `git push`, you'll be given a Heroku URL. Congratulations: that is the new URL for your Wordpress blog, built and managed entirely by Cloud9!