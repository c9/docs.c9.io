# Running a Rails App

Cloud9 IDE also supports the ability to run a [Rails](http://rubyonrails.org/) application. The `rails` command is only available on [the terminal](./terminal.html).

To run a rails application:

1. Open the terminal and type `gem install rails`
2. When the bundle is done, type `rails new <yourappname>`
3. Change the directory into your new app: `cd <yourappname>`
4. Type `rails s -b $IP -p $PORT`

That's it! Your rails app will now be running.

Note: You can view your running rails app at `https://<projectname>.<username>.c9.io`. Do **not** try to access the project through the IP address and port number rails returns to you--it won't work! 