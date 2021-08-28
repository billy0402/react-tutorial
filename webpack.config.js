const path = require('path');

const MiniCssExtraPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, './dist/'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
          options: { presets: ['@babel/preset-react', '@babel/preset-env'] },
        },
      },
      {
        test: /\.(scss)$/,
        use: [
          {
            loader: MiniCssExtraPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[path][local]___[hash:base64:5]',
              },
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
  plugins: [new MiniCssExtraPlugin({ filename: 'index.css' })],
  mode: 'production',
  devServer: { static: './dist' },
  performance: {
    maxAssetSize: 300000,
    maxEntrypointSize: 300000,
  },
};
