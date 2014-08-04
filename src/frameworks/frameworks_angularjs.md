# Framework AngularJS
[AngularJS](https://angularjs.org/) lets you write client-side web 
applications as if you had a smarter browser.

Follow these steps to create an AngularJS application using the official [project
template](https://github.com/angular/angular-seed):

1. Create a workspace and choose the PHP workspace type
2. Open a Terminal, or using the pre-existing one at the bottom
3. Run the following commands in the Terminal:
```
rm -rf * .c9
git clone https://github.com/angular/angular-seed.git .
npm install
mv package.json package.json.bak
jq '.scripts.start="http-server -a $IP -p $PORT"' package.json.bak > package.json
```
4. Click the `Run Project` button in the top menu of the IDE
5. Check the [README.md](https://github.com/angular/angular-seed/blob/master/README.md) for further steps

Note: We are choosing the PHP workspace type to in order to have the Apache runner
as a default so you can just click `Run Project` to get started. This doesn't
limit the choice of the backend technology you might want to use.