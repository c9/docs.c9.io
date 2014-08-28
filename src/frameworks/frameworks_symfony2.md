# Framework: Symfony2 

[Symfony](http://www.symfony.com) is one of the leading PHP Webframeworks. It is Open-Source and built on top of the Symfony Components.

# Getting started

1. [Create a Cloud9 workspace](./create_a_workspace.html) of the type "Custom" or "PHP"
2. Install the Intl extension for PHP that is required in most of the Symfony2 projects

		sudo apt-get install php5-intl
		
3. Set a valid PHP timezone

		echo 'date.timezone = UTC' | sudo tee --append /etc/php5/apache2/php.ini
		
4. Starting MySQL-Server

		sudo mysql-ctl install
		sudo mysql-ctl start
		
		
# Create a Symfony-Project
Open your Terminal and execute the following to create a new Symfony-Project
You need the first line only if you used the PHP Project type for your workspace.

		rm README.md php.ini hello-world.php
		composer create-project symfony/framework-standard-edition symfony/ "2.5.*"
		mv symfony/{*,.*} ./ 
		rm -rf symfony

The create-project composer command will ask for a few parameters, the only one you need to pay special attention is the database-host parameter. 

# Running the project
	
There is a IP address checking in the wev/config.php file. To disable this check please remove the following lines

		// This check prevents access to debug front controllers that are deployed by accident to production servers.
		// Feel free to remove this, extend it, or make something more sophisticated.
		if (isset($_SERVER['HTTP_CLIENT_IP'])
			|| isset($_SERVER['HTTP_X_FORWARDED_FOR'])
			|| !in_array(@$_SERVER['REMOTE_ADDR'], array('127.0.0.1', 'fe80::1', '::1'))
		) {
			header('HTTP/1.0 403 Forbidden');
			exit('You are not allowed to access this file. Check '.basename(__FILE__).' for more information.');
		}
		
After that add a new run configuration in Menu `Run > Run Configurations > New Run Configuration`. Select `Apache http (PHP, HTML)` as a `Runner` and `web/app_dev.php` as `Command`.
That's it after you hit Run your server will start up and you can access your new Symfony project.