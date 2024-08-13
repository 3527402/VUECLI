const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin
module.exports = {
  mode: 'development',
  entry: {
    main: path.resolve(__dirname, '../src/main.js'),
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/[name].[hash:8].js',
    chunkFilename: 'js/[name].[hash:8].js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader', 'postcss-loader'],
      },
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader',
          },
        ],
      },
      {
        test: /\.jsx?$/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          'css-loader',
          {
            loader: 'postcss-loader',
          },
        ],
      },
    ],
  },
  devServer: {
    port: 8080,
    open: true,
    hot: true,
    host: 'localhost', //指定地址
    // 这个属性似乎不能用了
    // contentBase: path.resolve(__dirname, 'src'), //指定访问的文件路径
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html'),
      filename: 'index.html',
    }),
    new VueLoaderPlugin(),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
    }),
  ],
}
