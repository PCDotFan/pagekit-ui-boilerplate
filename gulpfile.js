var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    mix
        .copy([
            'node_modules/font-awesome/css/'
        ], 'public/assets/css/')

        .copy([
            'node_modules/font-awesome/fonts/'
        ], 'public/assets/fonts/')

        .copy([
            'node_modules/font-awesome/fonts/'
        ], 'resources/assets/fonts/')

        .copy([
            'node_modules/uikit/dist/less'
        ], 'resources/assets/less/uikit')

        .copy([
            'node_modules/uikit/dist/js'
        ], 'resources/assets/js/uikit')

        .less([
            'resources/assets/less/pagekit/pagekit.less'
        ], 'public/assets/css/theme.css')

});
