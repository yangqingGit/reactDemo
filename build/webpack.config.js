const path = require('path');
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: '/src/index.jsx', //js入口文件;
    output: {
        path: path.resolve(__dirname, '/dist'), //利用path包获取绝对文件路径
        filename: 'bundle.js' //打包成功后的文件名<br>
    }, //js出口文件;路径加文件名;
    module: {
        rules: [{
                test: /\.(jsx)$/,
                loader: 'babel-loader'
            },
            {
                test: /\.(less)$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }]
            },
            {
                test: /\.(jpg|png|gif)$/,
                use: [{
                    loader: "url-loader",
                    options: {
                        //当加载的图片小于limit时，会直接用url-loader将图片的格式编译成base64格式的
                        //当加载图片大于limit时，需要使用file-loader来编译，并且打包到dist文件夹下面
                        // limit: 16000',
                        // 对打包后的图片命名进行相关的处理，表示在dist文件夹下建一个img文件夹保存图片，同时图片的名字是原来的名字加上8位hash值
                        //name: 'img/[name].[hash:8].[ext]'
                    }
                }]

            },
        ]
    },
    resolve: {
        extensions: ['.jsx', '.js', '.json']
    }, //解析 import引入更简单
    plugins: [
        new HtmlWebpackPlugin({
            template: "src/index.html",
            inject: "body",
            filename: "index.html",
        }) //在 body 中使用 script 标签引入你所有 webpack 生成的 bundle。
    ],
    devServer: {
        static: path.resolve(__dirname, '/src'), //启动入口
        port: 8001,
        hot: true,
        proxy: { //代理服务器 api请求
            '/api': {
                target: 'http://your_api_server.com',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }

}