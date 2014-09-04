# Running a Rails App

Cloud9 IDE also supports the ability to run a [Rails](http://rubyonrails.org/) application. The `rails` command is only available on [the terminal](./terminal.html).

To run a rails application:

1. Open the terminal and type `gem install rails`
2. When done, type `rails new example -d mysql`
3. Edit your database configuration in `configs/database.yml`
3. Type `rails s -b $IP -p $PORT`

That's it! Your rails app will now be running.

Note: http://<workspacename>-c9-<username>.c9.io should be running your application.

Do **not** try to access the project through the IP address and port number rails returns to you--it won't work! 

## Use MySQL in your rails app


1. [Setup MySQl](./setting_up_mysql.html) - note your DB connect parameters

3. edit `configs/database.yml`

```html
development:
  adapter: mysql2
  encoding: utf8
  database: c9
  username: <%=ENV['C9_USER']%>
  host: <%=ENV['IP']%>
```
