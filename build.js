var panda = require("panda-docs");
var Smasher = require('asset-smasher').Smasher;

var argv = process.argv.splice(2);
var fs = require("fs");

var development = argv[0];

var sm = new Smasher({
  paths:['./assets'],
  only:['styles.css.mf', 'javascripts.js.mf'],
  compress: true,
  outputTo: './out/assets/min'
});

var buildOptions = {
  title: "Cloud9 User Documentation",
  assets: "./assets",
  development: development
};

panda.make("./manifest.json", buildOptions, function(err, cbReturn) {
    if (err) console.error(err);

    // in case the index has been updated recently, remove it
    var recentFiles = cbReturn["files"].sort(function(a,b) { return b.mtime - a.mtime } ).splice(0, 6).filter(function (file) {
      return file.filename !== "index";
    });

    // in case the index WASN'T updated, drop the last item
    if (recentFiles.length > 5)
      recentFiles.pop();

    fs.readFile(__dirname + "/out/index.html", "utf8", function(err, contents) {
      if (err) console.error(err);
      recentFiles.forEach(function (file, i) {
        contents = contents.replace("%placeholder" + (i+1) + "%", "<a href='" + file.filename + ".html'>" + file.pageTitle + "</a>");
      });
      fs.writeFile(__dirname + "/out/index.html", contents, "utf8", function(err, contents) {
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
    })
});