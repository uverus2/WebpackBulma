var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin'); // automatic  ejection of main.css and bundle.js into your page
var FaviconsWebpackPlugin = require('favicons-webpack-plugin'); // plugin that adds a favicon
var webpack = require('webpack'); //gets webpack
var HtmlWebpackPlugin = require('html-webpack-plugin'); //creates the html template 
var CleanWebpackPlugin = require('clean-webpack-plugin'); // ensures new dist is generated everytime 
var CopyWebpackPlugin = require('copy-webpack-plugin'); //copy assests to dist folder
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');
var PhpLoad = require('php-loader');





var extractPlugin = new ExtractTextPlugin({ //defines what to be extracted 
    filename: 'main.css'
});


module.exports = {
    entry: './source/js/app.js', //entry location to form the bundle
    output: {

        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js', // location of bundle and its name 


    },
    module: {

        rules: [


            {
                test: /\.js$/, //test for files with js extentions 
                loader: 'babel-loader',
                exclude: /node_modules/

            },

            {
                test: /\.vue$/, //test for vue extentions
                use: [
                    { loader: 'vue-loader' }
                ]



            },




            {

                test: /\.scss$/, //test for files with sass extentions 
                use: extractPlugin.extract({

                    use: ['css-loader', 'postcss-loader', 'sass-loader']
                })



            },

            {
                test: /\.php$/,
                loaders: 'php-loader'

            },

            {
                test: /\.html/, //test for files with html extentions 
                use: ['html-loader']
            },

            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                loader: "file-loader"
            },


            {
                test: /\.(jpg|png)$/, //test for files with jpg and png extentions 
                use: [{

                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]', //keep the same file name and extention 
                        outputPath: 'img/', // specify the output path 
                        url: false,
                        minimize: true,
                        sourceMap: true



                    }


                }]
            },




        ],

    },

    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js', // resolving vue extention 

        },
        extensions: ['*', '.js', '.vue', '.json']

    },

    plugins: [ //uses the plugins  called above 



        extractPlugin,

        // new FaviconsWebpackPlugin('./source/img/facivon.png'),

        new CopyWebpackPlugin([

            { from: 'source/fonts', to: 'fonts' }
        ]),
        
         new CopyWebpackPlugin([

            { from: 'source/php', to: 'php' }
        ]),


        new UglifyJsPlugin({ test: /\.js($|\?)/i }),



        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'source/html/index.html',
        }),


        new CleanWebpackPlugin([ // specify all the folders you want to clean 
            'dist' //only dist folder is cleaned 

        ]),


    ]

};

if (process.env.NODE_ENV === 'production') {
    module.exports.plugins = (module.exports.plugins).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),

        new webpack.LoaderOptionsPlugin({
            minimize: true //minification on 
        })
    ])
}