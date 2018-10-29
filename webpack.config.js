var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin'); //生成html

var loaders = []

// 将ES6代码转换成ES5
loaders.push({
    test: /\.js$/,
    exclude: 'node_modules',
    loader: 'babel?presets=env'
})
loaders.push({
    test: /\.vue$/,
    exclude: 'node_modules',
    loader: 'vue'
})

var plusgins = []
plusgins.push(new HtmlWebpackPlugin({ //根据模板插入css/js等生成最终HTML
    filename: '../index.html', //生成的html存放路径，相对于 path
    template: './src/template/index.html', //html模板路径
    hash: true    //为静态资源生成hash值
}))

module.exports = {
    entry: './src/app.js',
    output: {
        publicPath: '/app/', //服务器的路径
        path: __dirname + '/app', //编译到app目录
        filename: '[name].js' //编译后的文件名
    },
    module: {
        loaders: loaders
    },
    plugins: plusgins
}
