Note: this article is outdated, a new version will follow soon

# IDE Preferences

There are many different ways to configure the IDE. Below is a list of the options available, and what they do.

Note: All of these options are on a per-project basis. Changing them in one project does not affect any another.

<div markdown="1">
## General

This section controls the overall IDE behavior:

<table class="ide_preferences table table-striped table-bordered">
  <thead>
    <tr>
      <th class="preferenceCol">Preference Name</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>**Enable UI Animations**</td>
      <td>Enables or disables fluid animations for various UI elements, such as the Project Bar</td>
    </tr>
    <tr>
      <td>**Animate Scrolling**</td>
      <td>Enables or disables fluid animations when scrolling through code (such as for goto line)</td>
    </tr>
    <tr>
      <td>**Enable Auto-Save**</td>
      <td>If enabled, automatically saves your files on every change</td>
    </tr>
    <tr>
      <td>**On Save, Strip Whitespace**</td>
      <td>When saving a file, you can remove [all extraneous whitespace from your code lines]{: #stripWhitespace}</td>
    </tr>
    <tr>
      <td>**Reveal Active File in Project Tree**</td>
      <td>Enabling this jumps the project tree to the active file whenever a tab changes to a different file</td>
    </tr>
    <tr>
      <td>**Warn Before Exiting**</td>
      <td>Prevents accidental data loss by showing a dialog asking if you _really_ want to leave Cloud9 IDE when closing your browser</td>
    </tr>
    <tr>
      <td>**Node.js Runtime**</td>
      <td>[Defines the default runtime for your Node.js code. "Auto" is based on whatever is in the _package.json_ file, while "Default" reverts to Node 0.6.x.]{: #nodejsRuntime}</td>
    </tr>
    <tr>
      <td>**Keybindings**</td>
      <td>Allows you to choose which operating system to use for [keyboard shortcuts](./keybindings.html)</td>
    </tr>
  </tbody>
</table>
</div>

<div markdown="1">
## Language Support

This section controls language analysis options:

<table class="ide_preferences table table-striped table-bordered">
  <thead>
    <tr>
      <th class="preferenceCol">Preference Name</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>**Enable Hints and Warnings Rules**</td>
      <td>Presents information about your code in the gutter</td>
    </tr>
    <tr>
      <td>**Highlight Variable Instances**</td>
      <td>Highlights variable instances in your code</td>
    </tr>
    <tr>
      <td>**Mark Undeclared Variables**</td>
      <td>Provides warnings if a variable is being used and has not been declared yet</td>
    </tr>
    <tr>    
      <td>**Mark Unused Function Arguments**</td>
      <td>Provides a strikethrough for arguments in a function that are not being used</td>
    </tr>
    <tr>
      <td id="warning_level_option">**Warning Level**</td>
      <td>Specifies the minimum level of information severity you want provided in the gutter</td>
    </tr>
  </tbody>
</table>
</div>

## Code Editor

This section controls language analysis options:

<div markdown="1">
<table class="ide_preferences table table-striped table-bordered">
  <thead>
    <tr>
      <th class="preferenceCol">Preference Name</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>**Auto-pair Quotes, Brackets, etc.**</td>
      <td>[When enabled, typing ", (,  or \[ will actually make two characters appear. In addition, whenever you highlight a word and type one of these characters, it is surrounded by that character (_e.g._ words becomes "words")]{: #autoPair}</td>
    </tr>
    <tr>
      <td>**Full Line Selection**</td>
      <td>[When highlighting lines, this option will highlight all ending whitespace, until the end of the editor window]{: #fullLineSelection}</td>
    </tr>
    <tr>
      <td>**Highlight Active Line**</td>
      <td>[Presents a darker shade in the code editor to indicate which line you're currently on]{: #highlightActiveLine}</td>
    </tr>
    <tr>    
      <td>**Highlight Gutter Line**</td>
      <td>Presents a darker shade in the gutter which line you're currently on</td>
    </tr>
    <tr>
      <td>**Show Invisible Characters**</td>
      <td>[Shows invisibles characters in the editor, like tabs and line breaks]{: #invisibleChars}</td>
    </tr>
    <tr>
      <td>**Show Indent Guides**</td>
      <td>[Shows the indent guides in the editor, letting you see your code's nestings]{: #showIndentGuides}</td>
    </tr>
    <tr>
      <td>**Show Gutter**</td>
      <td>[Shows the gutter in the editor, which indicates line numbers, warnings, and errors]{: #showGutter}</td>
    </tr>
    <tr>
      <td>**Highlight Selected Word**</td>
      <td>[If you highlight a word, this highlights all matching words in the editor]{: #highlightSelectedWord}</td>
    </tr>
    <tr>
      <td>**Auto-hide Horizontal Scroll**</td>
      <td>W[hen this is enabled, this will hide the horizontal scroll bar in the editor. Note that this has no effect in Mac OS X 10.7 (Lion) and above, since all scrollbars, by default, auto-hide.]{: #autoHideHorizontalScroll}</td>
    </tr>
    <tr>
      <td>**Vim Mode**</td>
      <td>When enabled, allows you to use vim keybindings in the IDE</td>
    </tr>
    <tr>
      <td>**Code Folding**</td>
      <td>[When enabled, allows you to show or hide "blocks" of code]{: #codeFolding}</td>
    </tr>
    <tr>
      <td>**Fade Fold Widgets**</td>
      <td>When enabled, fades the folding widgets in the gutter</td>
    </tr>
    <tr>
   <td>**Font Size**</td>
   <td>[Changes the font size of the code in the editor]{: #fontSize}</td>
    </tr>
    <tr>
   <td>**Show Print Margin**</td>
   <td>[Shows (and defines) the number of characters possible in line, before it wraps]{: #showPrintMargin}</td>
    </tr>
    <tr>
   <td>**Soft Tabs**</td>
   <td>[Indicates how many spaces a single tab represents]{: #softTabs}</td>
    </tr>
    <tr>
   <td>**Mouse Scroll Speed**</td>
   <td>[Defines the speed of the mouse scrolls]{: #mouseScrollSpeed}</td>
    </tr>
        <tr>
   <td>**Newline Mode**</td>
   <td>Specifies the newline mode for the IDE</td>
    </tr>
  </tbody>
</table>
</div>

## Terminal

This section controls the behavior for [the terminal](./terminal.html):
<div markdown="1">
<table class="ide_preferences table table-striped table-bordered">
  <thead>
    <tr>
      <th class="preferenceCol">Preference Name</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>  
      <td>**Scrollback**</td>
   <td>Sets the scrollback buffer for the terminal</td>
    </tr>
    <tr>
  <td>**Font Family**</td>
   <td>Sets the font for the terminal</td>
    </tr>
    <tr>
  <td>**Font Size**</td>
   <td>Sets the font size for the terminal</td>
    </tr>
    <tr>    
  <td>**Blinking Cursor**</td>
   <td>Specifies whether or not you want the cursor to blink</td>
    </tr>
  </tbody>
</table>
</div>

## Code Tools

This section controls the various tools that are available in the IDE:

<div markdown="1">
<table class="ide_preferences table table-striped table-bordered">
  <thead>
    <tr>
      <th class="preferenceCol">Preference Name</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>**Enable Color Picker**</td>
      <td>Makes [the color picker](./colorpicker.html) available for use</td>
    </tr>
    <tr>
      <td>**Preserve Empty Lines**</td>
      <td>When enabled, the editor keeps any new lines without text</td>
    </tr>
    <tr>
      <td>**Keep Array Indention**</td>
      <td>When enabled, tabs and newlines in arrays are preserved. For example, the follow array would remain as-is with this option:
     <pre>
        var o = [{
            a: b
        }, {
            c: d
        }];
        </pre>
      </td>
    </tr>
    <tr>
      <td>**JSLint Strict Whitespace**</td>
      <td>If selected, all brackets are preceded by a space. For example, `if(x){` becomes `if (x) {`, and `function(arg){` becomes `function (arg) {`</td>
    </tr>
    <tr>
   <td>**Braces**</td>
      <td>These options control how braces are handled in the IDE:
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
    </ul></td>

    </tr>
  </tbody>
</table>
</div>

