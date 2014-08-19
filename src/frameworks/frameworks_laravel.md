# Framework: Laravel
For [Laravel](http://laravel.com/) there are some installation guides around which tell you to install PHP first, but that's not necessary with Cloud9.
Just make a new workspace, choose PHP, go to the Terminal, and execute the following:

    rm -rf * .c9
    composer create-project laravel/laravel . --prefer-dist

Run the project with the "Run Project" button in the menu bar on top of the IDE.
If you click the URL that appears in the Run panel below (in the shape of 'https://laravel-c9-username.c9.io/'), you can preview your new Laravel app.

![Run Panel](./resources/images/laravelWorkspaceRunning.png)<960, 640>
