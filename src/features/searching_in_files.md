# Searching and Replacing in Files

<div class="video-container">
<iframe width="640" height="360" src="https://www.youtube.com/embed/jQb-wxELkI4" frameborder="0" allowfullscreen></iframe>
</div>

Aside from [Goto File and Goto Definition](./gotofile_and_definition.html), Cloud9 also offers more traditional search functionality. There are three types of search modes available: quicksearch, search and replace, and find in files.

## Quicksearch

Quicksearch can be activated by hitting `Cmd-F` on a Mac, or `Ctrl-F` on a Unix/Windows machine. As you type in the quicksearch bar, the IDE instantly shifts to the next available result. This is a great way to quickly search around in your code without hassle.

Quicksearch offers the following options:

* [**Regular Expressions**: when enabled, your search is treated as a regular expression]{: #regExpSearch}
* [**Match Case**: when enabled, your search takes capitalizations seriously]{: #matchCaseSearch}:
* [**Whole Words**: when enabled, your search will only be considered for whole words]{: #wholeWordsSearch}: 
* **Search Backwards**: when enabled, the search goes backwards, instead of forwards
* **Wrap Around**: when enabled, the search loops around the file, from bottom to top
* **Search Selection**: when enabled, the search only considers code that you've currently highlighted

## Search and Replace

Building on the features of quicksearch, search and replace allows you to replace segments of code in your file. You can again continue to use regular expressions, keeping in mind the groupings are prefixed with a dollar sign, _i.e._ `$1`.

Replacing offers two more options:

* **Preserve Case**: if enabled, case is preserved while replacing content
* **Highlight Matches**: if enabled, the new replaced matches are highlighted in the document

## Find in Files

In order to search across a set of files, you'll want to use the Find in Files feature. Here, you can search of a string or regular expression, within your entire workspace or a single directory. You can also filter based on extensions, like `*.js` or `*.rb`.

Find in files offers some of the same search options as quicksearch:

* {:regExpSearch}
* {:matchCaseSearch}
* {:wholeWordsSearch}

One more feature of find in files is the ability to render search results either in the console or the IDE. You can fold results to keep them out of the way, or, edited the file if you're working down a list:  
![Search in files, IDE results](./resources/images/searchinfiles_ide.png)