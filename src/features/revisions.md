# Revisions

<div class="video-container">
<iframe width="640" height="360" src="https://www.youtube.com/embed/Or3byuEf-zE" frameborder="0" allowfullscreen></iframe>
</div>

Every time you save a file on Cloud9, a diff of any changes made to it is saved by the server. Over time, you can view these file revisions as content is added and removed from your files. You can also restore a file to any previously saved state; you'll never have to worry about losing your work ever again!

To access file revisions, you can either go to [[menu: File, File Revisions History]], or type `Cmd-B` on Mac or `Ctrl-B` on Linux/Windows. This will pop open the Revisions History panel. Red lines indicate lines that were removed; green lines indicate lines that were either added or changed.

At the bottom of the panel, there's a checkbox for showing all of a file's changes. Files changes that occur relatively soon to one another--say, a few seconds--are grouped by the revisions panel as one "change." If you prefer to see every single change as an individual entry, enable the **Show all file changes** checkbox.

To restore a file to a previous revision, simply click the revisions button for that entry: ![Revisions Button](./resources/icons/revisions_button.png)