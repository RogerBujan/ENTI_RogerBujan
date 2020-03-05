
const path = require('path');

const configObject = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        publicPath: '/dist',
        path: path.resolve(__dirname, 'dist')
      },
    mode: 'production',
    devtool: 'eval-source-map',
    watch: true
};

module.exports = configObject;