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

    var mtimes = [];

    for (var f in cbReturn.files)
    {
        if (cbReturn.files[f].file !== "index")
            mtimes.push(cbReturn.files[f].mtime);
    }

    mtimes = mtimes.sort().slice(-5).reverse();
    var anchorTags = [];

    for (var t in mtimes) {
        for (var f in cbReturn.files)
        {
            if (cbReturn.files[f].mtime === mtimes[t]) {
               anchorTags.push("<a href='./" + cbReturn.files[f].file + ".html'>" + cbReturn.files[f].pageTitle + "</a>");
               break;
            }
        }
    }

    fs.readFile("./out/index.html", "utf8", function(err, contents) {
        for (var i = 1; i < 6; i++) {
            contents = contents.replace("RECENTLY_UPDATED_PLACEHOLDER_" + i, anchorTags[i - 1]);
        }
        fs.writeFile("./out/index.html", contents, function() {
            if (development) {
                return;
            }

            console.log("Compiling assets...");
             sm.compileAssets(function(err) {
               if(err) {
                 console.error("An asset compilation error occurred", err);
               } else {
                 console.log("Compilation done!");
               }
               return;
             });
        });
    });
});