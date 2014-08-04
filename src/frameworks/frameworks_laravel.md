# Framework: Laravel
For [Laravel](http://laravel.com/) there are some installation guides around which tell you to install PHP first, but that's not necessary with Cloud9.
Just make a new workspace, choose PHP, go to the Terminal, and execute the following:

    curl -sS https://getcomposer.org/installer | php
    sudo mv composer.phar /usr/local/bin/composer
    composer create-project laravel/laravel project_name --prefer-dist
    cd /etc/php5/apache2/conf.d
    sudo ln -s ../../mods-available/mcrypt.ini 20-mcrypt.ini
    cd ~/workspace

Note: the last commands just enable mcrypt; Cloud9 will support this out of the box in the near future.

Run the project with the "Run Project" button in the menu bar on top of the IDE.
If you click the URL that appears in the Run panel below (in the shape of 'https://laravel-c9-username.c9.io/'), you can browse to the directory 'project_name/public' to preview your new Laravel app.

![Run Panel](./resources/images/laravelWorkspaceRunning.png)<960, 640>
