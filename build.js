var panda = require("panda-docs");
var Smasher = require('asset-smasher').Smasher;
var fs = require("fs");

var development = true;

var sm = new Smasher({
  paths:['./assets'],
  only:['styles.css.mf', 'javascripts.js.mf'],
  compress: true,
  outputTo: './out/assets/min'
});

var buildOptions = {
  title: "Cloud9 Documentation",
  assets: "./assets",
  development: development
};

panda.make("./manifest.json", buildOptions, function(err, cbReturn) {
    if (err) console.error(err);
    
    if (!development) {
      console.log("Compiling assets...");
       sm.compileAssets(function(err) {
         if(err) {
           console.error("An asset compilation error occurred", err);
         } else {
           console.log("Compilation done!");
         }
         return;
       });
     }
});