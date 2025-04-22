const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  module : {
    rules :
    [{test : /\.css$/, use : [MiniCssExtractPlugin.loader, 'css-loader']}]
  },
  plugins :
          [
            new HtmlWebpackPlugin({template : './src/index.html'}),
            new MiniCssExtractPlugin()
          ],
  devServer : {static : './dist', port : 8081, watchFiles : ['src/*']},
}