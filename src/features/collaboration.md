# Collaboration

Collaboration with Cloud9 IDE is an amazing feature that lets you do more than just share your projects with any other Cloud9 developer. You can grant someone else access to change files in your workspace, in realtime--or just let them view the workspace without any other rights. While you're collaborating, you can discuss the code through a built-in chat room.

To invite someone to collaborate on a project with you, simply copy the URL in the browser and send it to a friend. You can also click on **Share** in the menu bar to get quick access to other ways to share, such as via e-mail, Twitter, or Facebook.

Let's take a look at some of the additional features available while you collaborate.

## Members List

There are two terms used for people accessing your project: **members** and **visitors**. Members are individuals that have read and write access to your project--that means they can change any code; visitors only have read access. The Members panel lists all the collaborators in a project, both active and inactive:  

![The Members Panel](./resources/images/members_panel.png)<260, 349>

If you are the owner of a project, you can click on anyone's username to grant (or revoke) write access:  

![Granting write access](./resources/images/collab_grant_access.png)<249, 50>

If you're worried about the sanctity of your code after grant access to other developers, fear not. You can always take a look at [a file revision history](./revisions.html) to view line-by-line changes made to your project over time.

## Chatting

Any member or visitor can participate in group chat with each other. Developers can also choose to double-click on a person's username and engage in a private, instant-message-style conversation.

## Collaborate on Code

When a collaborator changes a file you're also working on, Cloud9 detects it and asks you whether you'd like to use their changes, or your version. We're also simply giving you the option to merge both, using a three-way-merge algorithm  to handle any conflicts. This is the same algorithm used by version control systems like git for merging branches.

To make the experience even smoother you can choose "Always merge by default" and we'll never interrupt you about file changes again.

Check out the video below to see this in action.

<div class="video-container">
<iframe width="560" height="315" src="http://www.youtube.com/embed/8sstjmj8P6E" frameborder="0" allowfullscreen></iframe>
</div>