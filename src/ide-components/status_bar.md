## Status Bar

The status bar is designed to provide you with all sorts of information about your code--and additional functionality--without getting in the way of the IDE. It's quite tiny, and quite powerful, like a weight-lifting squirrel.

You can find the status bar in the lower-right corner of the editor: ![The status bar in its natural, shortened state](./icons/statusBarCollapsed.png). Keep in mind that the status bar is transparent, so it's able to camoflauge well with light or dark themes.

There's three pieces of crucial information available at all times: your current row, your current column, and, if you're highlighting characters, the number of characters currently selected.

If you click on the status bar, it expands into a menu with additional options: ![The status bar, expanded](./icons/statusBarExpanded.png).

The first menu controls various ways of coding within the IDE. These are:

* {:vimModeDef}
* Beautify Selection: reformats the highlighted code to the rules you've chosen from [the JSBeautify section of the IDE preferences](./ide_preferences.html#JSBeautify)
* Strip Whitespace: removes {:stripWhitespace}
* Rename variable: when selecting a variable, choosing this option renames the current variable, and all references to that variable in the same file. 

The second menu specifies several visual formatting rules for the IDE. These are:

* Show Invisibles: {:invisibleChars}
* Wraps Lines: wraps lines according to the line margin define. Otherwise, lines run on horizontally
* Code Folding: {:codeFolding}
* Full Line Selection: {:fullLineSelection}
* Highlight Active Line: {:highlightActiveLine}
* Show Gutter: {:showGutter}
* Highlight Selected Word: {:highlightSelectedWord}
* Auto-pair Quotes, Brackets, etc.: {:autoPair}
* Auto-hide Horizontal Scrollbar: {:autoHideHorizontalScroll}
* Font Size: {:fontSize}
* Show Print Margin: {:showPrintMargin}
* Soft Tabs: {:softTabs}
* Mouse Scroll Speed: {:mouseScrollSpeed}

You'll notice that some of these options already exist in [the IDE preferences panel](./ide_preferences.html).