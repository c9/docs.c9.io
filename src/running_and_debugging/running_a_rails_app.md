# Running a Rails App

Cloud9 IDE also supports the ability to run a [Rails](http://rubyonrails.org/) application. The `rails` command is only available on [the terminal](./terminal.html).

To run a rails application:

1. Open the terminal and type `gem install rails`
2. When done, type `rails new example .`
3. Edit your database configuration in `configs/database.yml`
3. Type `rails s -b $IP -p $PORT`

That's it! Your rails app will now be running.

Note: http://<workspacename>.<username>.c9.io should be running your application.

Do **not** try to access the project through the IP address and port number rails returns to you--it won't work! 

## Use MySQL in your rails app

1. Install `mysql2` adapter by typing in terminal: `gem install mysql2`

2. [Setup MySQl](./setting_up_mysql.html) - note your DB connect parameters

3. edit `configs/database.yml`

```html
development:
  adapter: mysql2
  encoding: utf8
  database: c9
  username: <Cloud9 username $C9_USER>
  host: <Cloud9 $IP>
```

To know your $IP value type in terminal:
`echo $IP`
