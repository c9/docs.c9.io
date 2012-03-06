## Cloning Git Repositories from BitBucket 

In October 2011, BitBucket began offering Git support. However, as of this writing, Cloud9 IDE assumes that any repository that you want to clone from BitBucket is a Mercurial repository. As a result, if you have a Git repository in BitBucket and try to clone to edit this project from the dashboard, the cloning will fail.

You can get around this problem easily by fixing the url that Cloud9 IDE generates when you attempt to clone. When cloning a BitBucket repository, Cloud9 IDE uses a source url like the following:

    ssh://hg@bitbucket.org/username/repositoryname 
    
To clone a Git repository from BitBucket, change the url to look like this:

    git@bitbucket.org:username/repositoryname.git
    
Notice the following differences:

* We have removed `ssh://
* We have changed `hg` to `git`
* We have added `.git` to the end of the url

Now, you should be able to clone your git repository from BitBucket!