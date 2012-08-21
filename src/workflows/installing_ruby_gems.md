# Installing Ruby Gems

Gem version 1.3.7 

```bash
export GEM_HOME=pwd
```

```bash
gem install progressbar 
```

```ruby
require 'rubygems'
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