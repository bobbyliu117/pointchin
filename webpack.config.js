const {join} = require('path');

const tsRule = {
  test: /\.ts$/,
  use: 'ts-loader',
  exclude: /node_modules/
};

module.exports = {
  entry: {
    content: join(__dirname, 'src/content.ts'),
    background: join(__dirname, 'src/background.ts'),
    popup: join(__dirname, 'src/popup.ts')
  },
  output: {
    path: join(__dirname, './dist'),
    filename: '[name].js'
  },
  devtool: 'inline-source-map',
  module: {
    rules: [tsRule]
  },
  resolve: {
    extensions: ['.ts', '.js']
  }
}