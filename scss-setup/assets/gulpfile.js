var elixir = require('laravel-elixir');

// Site Config
var assetsPath = '';
var publicPath = '../public';

// Elixir Config
elixir.config.sourcemaps = false;
elixir.config.assetsPath = '';
elixir.config.publicPath = publicPath;

elixir(function (mix) {
    // Main Styles
    mix.sass([
        'main.scss'
    ], publicPath + '/css/main.css');
});
