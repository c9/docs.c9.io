This is the source documentation for the [Cloud9 IDE ](https://www.c9.io) User Documentation. 

The build system relies on the [Panda-Docs](https://github.com/gjtorikian/panda-docs) Node.js module.

# Creating a Build

First, check out this repository. Then, run

    npm install
    
to grab all the required dependencies.

To create a **development** build, open your command prompt and type:

    node build.js true

A development build differs in that it does not compress assets or add iframe headers and footers. To create a releasable build, just run the same command without any arguments:

	node build.js

# Deploy

We host https://docs.c9.io on github pages. In order to deploy please run

	node build.js

and then commit the generated HTML. Once this is merged into the gh-pages branch
the site is deployed.

# Contributing

We'll very gladly take any pull requests for documentation updates or new workflows! We'll even give you author credits on the pages you create. This source material is intended to be open and sharable to all. 

# License

<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/3.0/"><img alt="Creative Commons License" style="border-width:0" src="http://i.creativecommons.org/l/by-nc-sa/3.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" href="http://purl.org/dc/dcmitype/Text" property="dct:title" rel="dct:type">Cloud9 IDE Documentation</span> is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/3.0/">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>.