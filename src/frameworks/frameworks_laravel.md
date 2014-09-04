# Framework: Laravel
For [Laravel](http://laravel.com/) there are some installation guides around which tell you to install PHP first, but that's not necessary with Cloud9.
Just make a new workspace, choose PHP, go to the Terminal, and execute the following:

    rm README.md php.ini hello-world.php
    composer create-project laravel/laravel ./laravel --prefer-dist
    shopt -s dotglob
    mv laravel/* ./
    rm -rf laravel
    
As lavarel is serving its content from the `public` directory we need to modify the apache config:

    sudo vi /etc/apache2/sites-enabled/001-cloud9.conf

Then do the following:
    
    // Change this line
    DocumentRoot /home/ubuntu/workspace
    
    // To following
    DocumentRoot /home/ubuntu/workspace/public

Run the project with the "Run Project" button in the menu bar on top of the IDE.
If you click the URL that appears in the Run panel below (in the shape of 'https://laravel-c9-username.c9.io/'), you can preview your new Laravel app.

![Run Panel](./resources/images/laravelWorkspaceRunning.png)<960, 640>
