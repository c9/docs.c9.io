## Converting your Public Projects into Private Projects

One of the premium features in Cloud9 IDE is the ability to create private projects. You might decide later on to turn an existing public project into a private one. At the moment, we don't have an easy way to turn public Cloud9 projects into private projects.

You can get around this limitation by using a code-hosting site like GitHub or Bitbucket to push and pull your Cloud9 projects. You can do so by following these steps:

1. Create an account in a code-hosting site that supports private repositories (Bitbucket offers free private repos, so that might be your best option.)
2. Link the account at the code-hosting site with your Cloud9 account (see **Add-on Services** under **Your Account** in the Dashboard)
3. Push the public Cloud9 project you want to convert to private to the code-hosting site.
4. Go to the Cloud9 Dashboard and select "clone from url" with the URL from the new private repository at the code-hosting site; select "Only the people I specify (premium feature)". That would create a new private project from the repository you provide in the url.
5. Delete the old public project in Cloud9.

If you're not sure how to link your projects to Bitbucket, [this article on "Setting Up a Git Project (on BitBucket)" might be useful](setting_up_bitbucket_project.html).