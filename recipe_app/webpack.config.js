const path=require('path')
const Dotenv=require('dotenv-webpack');
// const CompressionPlugin=require('compression-webpack-plugin');

module.exports={
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname,'build'),
        filename: '[name].[contenthash].js '
    },
    module:{
        rules:[
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {loader:'babel-loader'}
        },
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader', 'postcss-loader']
        },
        {
            test: /\.(scss|sass)$/,
            use: ['style-loader', 'css-loader','postcss-loader', 'sass-loader']
        },
        {
            test:/\.(png|jpg|gif|svg|PNG)$/,
            use:['file-loader']
        },
        {
            test:/\.(woff|woff2|eot|ttf|svg)$/,
            loader:'url-loader',
            options:{linit:100000}
        }
        ]
    },
    plugins:[
        new Dotenv({
            path:process.env.ENV_PATH,
            systemvars: true
        })
    ]
}