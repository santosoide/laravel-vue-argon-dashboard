const mix = require("laravel-mix");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.webpackConfig({
    resolve: {
        alias: {
            "@": path.resolve("resources")
        }
    }
}).options({
      extractVueStyles: true
   })
   .js("resources/js/app.js", "public/js")
   .sass("resources/assets/scss/argon.scss", "public/css", { implementation: require('node-sass') })
   .babelConfig({
       plugins: ["@babel/plugin-syntax-dynamic-import"]
   });
