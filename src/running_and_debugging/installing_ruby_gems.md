# Installing Ruby Gems


Cloud9 supports the installation of Ruby gems in your workspace using the RubyGems package manager. The current installed RubyGems version is 1.3.7. For more information on the `gem` command, see [the official RubyGems documentation](http://docs.rubygems.org/).

Let's try installing a gem. First, type the following in the console:

```bash
export GEM_HOME=pwd
```

```bash
gem install progressbar 
```

This installs [the `progressbar` Ruby gem](http://0xcc.net/ruby-progressbar/index.html.en) to your workspace. You won't see the gem installed in the directory tree, because it's kept deep within your project's the Ruby libs. 

Next, create a new Ruby script, and add these lines of code:

```ruby
require 'progressbar'

bar = ProgressBar.new("Example progress", 50)
total = 0
until total >= 100
  sleep(rand(2)/2.0)
  increment = (rand(6) + 3)
  bar.inc(increment)
  total += increment
end
```

After clicking **run**, the console will being printing out an ASCII progressbar.

You have access to all of the functionality `gem` provides you. For example, you can open up the console and type `gem query` to see a list of your installed gems.