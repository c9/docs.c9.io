Author: Garen J. Torikian

# IDE Preferences

There are many different ways to configure the IDE. Below is a list of the options available, and what they do.

Note: All of these options are on a per-project basis. Changing them in one project does not affect any another.

<dl>
<dt>General</dt>
<dd>This section controls the overall IDE behavior:
<ul>
  <li>**Enable UI Animations**: enables or disables fluid animations for various UI elements, such as the Project Bar</li>
  <li>**Animate Scrolling**: enables or disables fluid animations when scrolling through code (such as for goto line)</li>
  <li>**Enable Auto-Save**: If enabled, automatically saves your files on every change</li>
  <li>**On Save, Strip Whitespace**: when saving a file, you can remove [all extraneous whitespace from your code lines]{: #stripWhitespace}</li>
  <li>**Reveal Active File in Project Tree**: enabling this jumps the project tree to the active file whenever a tab changes to a different file</li>
  <li>**Warn Before Exiting**: shows a dialog asking if you _really_ want to leave Cloud9 IDE when closing your browser</li>
  <li>**Node.js Runtime**: [defines the default runtime for your Node.js code. "Auto" is based on whatever is in the _package.json_ file, while "Default" reverts to Node 0.4.x.]{: #nodejsRuntime}</li>
  <li>**Keybindings**: allows you to choose which operating system to use for keyboard shortcuts</li>
</ul>
</dd>
<dt>Language Support</dt>
<dd>This section controls language analysis options:
<ul>
   <li>**Enable Hints and Warnings Rules**: presents information about your code in the gutter</li>
   <li>**Highlight Variable Instances**: highlights variable instances in your code</li>
   <li>**Mark Undeclared Variables**: provides warnings if a variable is being used and has not been declared yet</li>
   <li>**Mark Unused Function Arguments**: provides a strikethrough for arguments in a function that are not being used</li>
   <li>**Complete As You Type**: provides an autocompletion box that is populated with code in your workspace</li>
   <li>**Warning Level**: specifies the minimum level of information severity you want provided in the gutter</li>
</ul>
</dd>
<dd>
<dt>Code Editor</dt>
<dd>This section controls the IDE editor while you're coding:
<ul>
  <li>**Auto-pair Quotes, Brackets, etc.**: [when enabled, typing ", (,  or \[ will actually make two characters appear. In addition, whenever you highlight a word and type one of these characters, it is surrounded by that character (_e.g._ words becomes "words")]{: #autoPair}</li>
  <li>**Full Line Selection**: [when highlighting lines, this option will highlight all ending whitespace, until the end of the editor window]{: #fullLineSelection}</li>
  <li>**Highlight Active Line**: [presents a darker shade in the code editor to indicate which line you're currently on]{: #highlightActiveLine}</li>
  <li>**Highlight Gutter Line**: presents a darker shade in the gutter which line you're currently on]{: #highlightActiveLine}</li>
  <li>**Show Invisible Characters**: [shows invisibles characters in the editor, like tabs and line breaks]{: #invisibleChars}</li>
  <li>**Show Gutter**: [shows the gutter in the editor, which indicates line numbers, warnings, and errors]{: #showGutter}</li>
  <li>**Highlight Selected Word**: [if you highlight a word, this highlights all matching words in the editor]{: #highlightSelectedWord}</li>
  <li>**Auto-hide Horizontal Scroll**: w[hen this is enabled, this will hide the horizontal scroll bar in the editor. Note that this has no effect in Mac OS X 10.7 (Lion), since all scrollbars, by default, auto-hide.]{: #autoHideHorizontalScroll}</li>
  <li>**[Vim Mode**: when enabled, allows you to use vim keybindings in the IDE]{: #vimModeDef}</li>
  <li>**Code Folding**: [when enabled, allows you to show or hide "blocks" of code]{: #codeFolding}</li>
  <li>**Fade Fold Widgets**: when enabled, fades the folding widgets in the gutter</li>
  <li>**Font Size**: [changes the font size of the code in the editor]{: #fontSize}</li>
  <li>**Show Print Margin**: [shows (and defines) the number of characters possible in line, before it wraps]{: #showPrintMargin}</li>
  <li>**Soft Tabs**: [indicates how many spaces a single tab represents]{: #softTabs}</li>
  <li>**Mouse Scroll Speed**: [defines the speed of the mouse scrolls]{: #mouseScrollSpeed}</li>
  <li>**Newline Mode**: specifies the newline mode for the IDE</li>
</dd>
<dd>
<dt>Code Tools</dt>
<dd>This section controls the various tools that are available in the IDE:
<ul>
  <li>**Enable Color Picker**: makes [the color picker](./colorpicker.html) available for use</li>
</dd>
<dt><a name="JSBeautify"></a>JS Beautify</dt>
<dd>These options control the behavior of the code formatting tool:  
<ul>
  <li>**Preserve Empty Lines**: when enabled, the editor keeps any new lines without text</li>
  <li>**Keep Array Indention**: when enabled, tabs and newlines in arrays are preserved. For example, the follow array would remain as-is with this option:
    <pre>
    var o = [{
        a: b
    }, {
        c: d
    }];
    </pre>
  </li>
  <li>**JSLint Strict Whitespace**: if selected, all brackets are preceded by a space; for example `if(x){` becomes `if (x) {`, and `function(arg){` becomes `function (arg) {`</li>
   <li>**Braces**: these options control how braces are handled in the IDE:
   <ul>
   <li>**Braces with control statement**: braces are left "in-line" alongside the code statements. For example, code is formatted like this:
    <pre>
    if (true) {
        var x = 3;
    } else {
        var x = 5;
    }
    </pre>
    </li>
   <li>**Braces on own line**: braces are always placed on their own line. For example, code is formatted like this:
    <pre>
    if (true)
    {
        var x = 3;
    } else
    {
        var x = 5;
    }
    </pre>
   </li>
   <li>**End braces on own line**: only the ending braces have their own line. For example, code is formatted like this:
    <pre>
    if (true) {
        var x = 3;
    }
    else {
        var x = 5;
    }
    </pre>
    </li>
    </ul>
</ul>
</dd>
</dl>