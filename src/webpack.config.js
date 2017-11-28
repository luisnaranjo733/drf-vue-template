var path = require('path')
var webpack = require('webpack')
var BundleTracker = require('webpack-bundle-tracker')
// const isReachable = require('is-reachable');

let ip = 'localhost';

module.exports = {
    //the base directory (absolute path) for resolving the entry option
    context: __dirname,
    entry: [
        `webpack-dev-server/client?http://${ip}:3000`,
        'webpack/hot/only-dev-server',
        './assets/js/index'
    ],
    
    output: {
        // where you want your compiled bundle to be stored
        path: path.resolve('./assets/bundles/'), 
        // naming convention webpack should use for your files
        filename: '[name]-[hash].js', 
        publicPath: `http://${ip}:3000/assets/bundles/`
    },
    
    plugins: [
        new BundleTracker({filename: './webpack-stats.json'}), 
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(), 
    ],
    
    module: {
        rules: [
            {
                test: /\.jsx?$/, 
                exclude: /node_modules/, 
                use: [
                    {
                        loader: "react-hot-loader/webpack"
                    },
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ['react']
                        }
                    }
                ],
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            }
        ]
    },
    
    resolve: {
        //tells webpack where to look for modules
        modules: ['node_modules', 'bower_components'],
        //extensions that should be used to resolve modules
        extensions: ['.js', '.jsx'] 
    }   
}