const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const paths = {
  DIST: path.resolve(__dirname, 'dist'),
  SRC: path.resolve(__dirname, 'src'),
  JS: path.resolve(__dirname, 'src/js')
};

module.exports = {
  
  entry: path.join(paths.JS, 'app.js'),
  output: {
    path: paths.DIST,
    filename: 'app.bundle.js'
  },
  devServer: {
    contentBase: paths.SRC,
    port: 9090
  },
  module: {
    rules: [
      { 
        test:/\.(js|jsx)$/, 
        use: 'babel-loader', 
        exclude: '/node_modules/' },
      {
        test:/\.styl$/,
        use: ['style-loader', 'css-loader', 'stylus-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(paths.SRC, 'index.html')
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.styl']
  }

}
