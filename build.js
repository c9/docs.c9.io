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
  development: development,
  resources: "./resources",
  baseUrl: "https://docs.c9.io",
  json: true,
  tocId: "doc-nav",
  contentId: "content"
};

panda.make([ 
        "./src/index.md",
        "./src/deploying", 
        "./src/features", 
        "./src/ide-components", 
        "./src/workspaces", 
        "./src/running_and_debugging",
        "./src/c9_local"
        ], buildOptions, function(err, cbReturn) {
    if (err) console.error(err);

    // in case the index has been updated recently, remove it
    var recentFiles = cbReturn["files"].sort(function(a,b) { return b.mtime - a.mtime } ).splice(0, 6).filter(function (file) {
      return file.filename !== "index";
    });

    // in case the index WASN'T updated, drop the last item
    if (recentFiles.length > 5)
      recentFiles.pop();

    addRecentChanges(recentFiles);
    compileAssets();
    fixJson(recentFiles);
});

function addRecentChanges(recentFiles) {
  fs.readFile(__dirname + "/out/index.html", "utf8", function(err, contents) {
    if (err) console.error(err);

    contents = replaceRecentFiles(recentFiles, contents);

    fs.writeFile(__dirname + "/out/index.html", contents, "utf8", function(err, contents) {
      if (err) console.error(err);
    });
  });
}

function compileAssets() {
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
}

function fixJson(recentFiles) {
  fs.readFile(__dirname + "/out/cloud9-user-documentation.json", "utf8", function(err, contents) {
    if (err) console.error(err);
    var docsJson = JSON.parse(contents);
    docsJson["files"] = docsJson["files"].map(function(file) {
      file.contents = file.contents.replace("\n              <div id=\"disqus_thread\"></div>\n            ", "").replace("\n              <div id=\"toh_btn\" onclick=\"toggleTOH(this)\"></div>\n              ", "");
      
      if (file.filename === "index")
        file.contents = replaceRecentFiles(recentFiles, contents);

      return file;
    });
    
    docsJson.toc = docsJson.toc.replace(new RegExp('<i class=\"icon-chevron-down tocNavArrow\"></i><i class=\"icon-chevron-up tocNavArrow\"></i>', "g"), "");
    
    fs.writeFile(__dirname + "/out/cloud9-user-documentation.json", JSON.stringify(docsJson, null, "    "), "utf8", function(err, contents) {
      if (err) console.error(err);
    });
  });
}

function replaceRecentFiles(recentFiles, contents) {
  recentFiles.forEach(function (recentFile, i) {
    contents = contents.replace("%placeholder" + (i+1) + "%", "<a href='" + recentFile.filename + ".html'>" + recentFile.pageTitle + "</a>");
  });

  return contents;
}