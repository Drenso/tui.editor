/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const webpack = require('webpack');
const { version, author, license } = require('./package.json');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'toastui-vue-editor.js',
    path: path.resolve(__dirname, 'dist'),
    library: {
      type: 'commonjs2',
    },
    environment: {
      arrowFunction: false,
      const: false,
    },
  },
  externals: {
    '@drenso-toast-ui/editor': {
      commonjs: '@drenso-toast-ui/editor',
      commonjs2: '@drenso-toast-ui/editor',
    },
    '@drenso-toast-ui/editor/dist/toastui-editor-viewer': {
      commonjs: '@drenso-toast-ui/editor/dist/toastui-editor-viewer',
      commonjs2: '@drenso-toast-ui/editor/dist/toastui-editor-viewer',
    },
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
            },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.BannerPlugin({
      banner: [
        'TOAST UI Editor : Vue Wrapper',
        `@version ${version} | ${new Date().toDateString()}`,
        `@author ${author}`,
        `@license ${license}`,
      ].join('\n'),
    }),
  ],
};
