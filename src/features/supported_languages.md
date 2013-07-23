# Supported Languages

Cloud9 IDE has varying levels of support for different programming languages. 
Usually you will at least have Syntax Highlighting in the editor and the ability
to run apps from the Terminal. 

### Syntax Highlighting

Cloud9 IDE develops and builds on [Ace](https://github.com/ajaxorg/ace), an 
editor for writing code online. Cloud9's Ace editor currently supports 
highlighting for about 100 programming languages, and any changes made to Ace are 
reflected back into Cloud9 IDE. 

The list of supported languages is growing, and you can get the full list from 
the [[menu: View, Syntax]] menu. [Feel free to create an issue in the Ace repository](http://ace.ajax.org/#nav=higlighter) 
for new requests, or add your own syntax highlighting mode.

See [Syntax Highlighting & Themes](./syntax_highlighting_themes.html) for more 
info.

### Language Intelligence

Cloud9 IDE's editor has extensive support for JavaScript (Node.js) with Error 
Highlighting and Code Completion. 

Live syntax error checks are also supported for the following languages:
* CSS
* CoffeeScript
* PHP
* Python
* JSON
* Lua

### Running apps

The Run menu currently supports running the following languages by default:
* JavaScript (Node.js)
* Python
* Ruby
* PHP (using apache)

If you'd like to run another language, you can usually do so from the Terminal.
Each workspace is a unix sandbox with the standard tools like `bash`, `make`, 
`gcc`, `vim`, `java` SDK or `perl` installed. The terminal in Cloud9 is a full 
`xterm` compatible terminal emulator and you can use this to compile and for 
instance run your `C` programs.