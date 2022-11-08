let mix = require("laravel-mix");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");
require("@chiiya/laravel-mix-imagemin");
const fs = require("fs");
const path = require("path");

mix.disableNotifications();
mix.setPublicPath("dist");
mix.sourceMaps();
// mix.extract();
// mix.options({ runtimeChunkPath: "." });

// mix.version();

const postCssPlugins = [
  require("postcss-sort-media-queries"),
  require("postcss-custom-properties"),
  require("postcss-preset-env"),
  require("autoprefixer")({
    cascade: false,
  }),
];
if (mix.inProduction()) {
  postCssPlugins.push(require("postcss-combine-duplicated-selectors")());
}

mix.options({
  legacyNodePolyfills: true,
  processCssUrls: false,
  postCss: postCssPlugins,
});

mix.autoload({
  jquery: ["$", "window.jQuery", "jQuery"],
});

mix.js("./src/assets/js/index.js", "./assets/js");
mix.js("./src/assets/js/uikit-page.js", "./assets/js");

mix.sass("./src/assets/css/index.scss", "./assets/css");
mix.sass("./src/assets/css/uikit-page.scss", "./assets/css");

mix.copyDirectory("./src/assets/fonts", "./dist/assets/fonts");

mix.imagemin(
  {
    patterns: [
      {
        from: "**/*",
        to: "assets/img",
        context: "src/assets/img",
      },
    ],
  },
  {
    pngquant: {
      quality: "95-100",
    },
  }
);

const PAGES_DIR = `./src`;
const PAGES = fs.readdirSync(PAGES_DIR).filter((fileName) => fileName.endsWith(".pug"));

const multipage = require("./multipage.config.mix");

const htmlPlugin = multipage.pages.map((page) => {
  return new HtmlWebpackPlugin({
    inject: false,
    template: page.template,
    filename: page.page,
  });
});

mix.webpackConfig((webpack) => {
  return {
    output: {
      publicPath: "./",
      clean: true,
    },
    plugins: [
      ...htmlPlugin,
      new BrowserSyncPlugin({
        host: "localhost",
        port: 3000,
        server: { baseDir: ["dist"] },
      }),
    ],
    module: {
      rules: [
        {
          test: /\.pug$/i,
          exclude: /(node_modules|bower_components)/,
          use: [{ loader: "pug-loader", options: { pretty: !mix.inProduction() } }],
        },
        {
          test: /\.html$/i,
          loader: "html-loader",
        },
      ],
    },
    optimization: {
      splitChunks: {
        chunks: "all",
      },
    },
  };
});
