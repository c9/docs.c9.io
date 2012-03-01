## About the Project Bar

The project bar is the leftmost content area in the Cloud9 IDE. It controls the behavior of your IDE, as well as the presentation of your code to help you design in the style you like:

![The Project Bar](./images/projectBar.png)

By default, the Project Files window is enabled. This button toggles whether or not your entire project is visibile.

The **Active Files** button lists all the files that are open in your editor.

**Preferences** is where the magic happens. These configuration options change the behavior of the editor. Here's what they mean:

<dl><dt><strong>General</strong></dt><dd>
<ul>
	<li>On Load, restore previous state: when you close the editor and log back in, this option will restore all your previous active files</li>
	<li>Save all files before running: when you choose to <strong>Run</strong>your application, this option will save all open files before running</li></br>
</ul>
<strong>JS Beautify</strong>

</dd><dt></dt><dd>These options control the behavior of the code formatting tool found in <strong>Edit | Beautify Selection</strong>.
<ul>
	<li>Preserve empty lines: if enabled, the editor keeps any new lines without text</li>
	<li>Keep array indention: when checked, tabs and newlines in arrays are preserved. For example, the follow array would remain as-is with this option:
<pre>var o = [{
    a: b
}, {
    c: d
}];</pre>
</li>
	<li>JSLint Strict Whitespace: if selected, all new scopes lines are indented by four spaces</li>
	<li>Braces: there are three options here:
<ul>
	<li>Braces with control statement: braces are left "in-line" alongside the code statements. For example, code is formatted like this:
<pre>if (true) {
    var x = 3;
} else {
    var x = 5;
}</pre>
</li>
</ul>
</li>
<ul>
	<li>Braces on own line: braces are always placed on their own line. For example, code is formatted like this:
<pre>if (true)
{
    var x = 3;
} else
{
    var x = 5;
}</pre>
</li>
	<li>End braces on own line: only the ending braces have their own line. For example, code is formatted like this:
<pre>if (true) {
    var x = 3;
}
else {
    var x = 5;
}</pre>
</li>
</ul>
</ul>
<strong></dd><dt>Code Editor</dt><dd></strong>
<ul>
	<li>Auto pair characters: when enabled, typing ", (,  or [ will actually make two characters appear. In addition, whenever you highlight a word and type one of these characters, it is surrounded by that character (e.g. words becomes "words")</li>
	<li>Overwrite mode: similar to the insert key on your keyboard, any characters you type overwrite the ones that come after it</li>
	<li>Full Line Selection: when highlighting lines, this option will highlight all ending whitespace, until the end of the editor window</li>
	<li>Highlight Active Line: presents a colored background to indicate which line you're currently on</li>
	<li>Show Invisibles: shows invisibles characters in the editor, like spaces, tabs, and line breaks</li>
	<li>Show Gutter: shows the gutter in the editor, which indicates line numbers, warnings, and errors</li>
	<li>Highlight Selected Word: when this is enabled, and if you highlight a word, this will highlight all matching words in the editor</li>
	<li>Auto-hide Horizontal Scroll: when this is enabled, this will hide the horizontal scroll bar in the editor. Note that this has no effect in Mac OS X 10.7 (Lion), since all scrollbars, by default, auto-hide.</li>
	<li>Font Size: changes the font size of the code in the editor</li>
	<li>Show print margin: shows (and defines) the number of characters possible in line, before it wraps</li>
	<li>Soft tabs: indicates how many spaces a single tab represents</li>
	<li>Mouse Scroll speed: defines the speed of the mouse scrolls</li>
	<li>Strip Whitespace On Save: when saving a file, this will remove all extraneous whitespace from your code lines</li>
</ul>
</dd></dl><strong>Note:</strong> all of these options are on a per-project basis. Changing them in one project does not affect any another.