const path = require("path");

res = {};
res.entry = {
  // uikit: path.join(__dirname, "../src/uikit/uikit-page/uikit-page.js"),
  // index: path.join(__dirname, "./src/assets/js/app.js"),
  // "page-two": path.join(__dirname, "./src/assets/js/for-two.js"),
};

res.pages = [
  { chunks: ["uikit"], page: "uikit.html", template: path.join(__dirname, "./src/uikit-page.pug") },
  { chunks: ["index"], page: "index.html", template: path.join(__dirname, "./src/index.pug") },
  // { chunks: ["search-room"], page: "search-room.html", template: path.join(__dirname, "./src/pages/search-room/search-room.pug") },
  { page: "test.html", template: path.join(__dirname, "./src/test.pug") },
];

module.exports = res;
