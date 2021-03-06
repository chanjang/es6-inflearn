var path = require('path');

module.exports = {
    entry: './src/index.js', 
    output: {
        filename:'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },    
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'src'),
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', {
                            'browsers': ["last 2 versions"]
                        }]
                    }
                }
            }
        ]
    }
}