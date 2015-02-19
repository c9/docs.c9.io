# Running WordPress on Cloud9

WordPress is web software you can use to create websites or blogs.
You can develop and host WordPress websites entirely on Cloud9 IDE

### Creating a WordPress workspace

Create a WordPress workspace from the WordPress template on your Cloud9 dashboard

Note: We will download, extract and configure WordPress for you.

In order to run WordPress, you need a database to host your posts, articles, etc.

You can use MySQL with our utility script _**mysql-ctl**_ as explained in [MySQL Setup](./setting_up_mysql.html)

### Running the website

To start MySQL server and create the required database, type in the terminal:
```
mysql-ctl start
```

Open `index.php` in your workspace root and click the **Run** button

You can check the generated config for you In _wp-config.php_ (you don't need to change anything there)

```php
define('DB_NAME', 'c9');
define('DB_USER', getenv('C9_USER'));
define('DB_PASSWORD', '');
define('DB_HOST', getenv('IP'));
define('WP_SITEURL', 'http://' . getenv('C9_PROJECT') . '.' . getenv('C9_USER') . '.c9.io');
```
