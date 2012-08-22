var panda = require("panda-docs");
var Smasher = require('asset-smasher').Smasher;
var fs = require("fs");

var development = false;

var sm = new Smasher({
  paths:['./assets'],
  only:['styles.css.mf', 'javascripts.js.mf'],
  compress: true,
  outputTo: './out/assets/min'
});

panda.make(["./manifest.json", "-t", "Cloud9 Documentation", "--assets", "./assets", development ? "-r" : null], function(err, cbReturn) {
    if (err) console.error(err);
    
    if (development) {
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