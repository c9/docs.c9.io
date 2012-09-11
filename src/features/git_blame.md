# Git Blame

<iframe width="640" height="360" src="https://www.youtube.com/embed/RSXaAlBgQ2s" frameborder="0" allowfullscreen></iframe>

When you're working with git repositories, it's helpful to know who made a commit to a particualr piece of code. As it turns out, git has [a feature called `git blame`](http://www.kernel.org/pub/software/scm/git/docs/git-blame.html) that we've integrated directly into Cloud9 IDE.

By using `git blame`, you'll be able to instantly discover who edited certain lines of code, when they edited it, and what their commit message at the time was. Clicking on a git commit also highlights other lines of code changed at the same time. To launch the git blame feature, open a file and navigate to [[menu: Tools, Git, Blame]].