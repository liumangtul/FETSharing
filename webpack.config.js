const path = require('path');
module.exports = {
	mode:'development',
	entry:'./js/main.js',
	output:{
		path:path.resolve(__dirname,'dist'),
		filename:'bundle.js'
	},
	module:{
		rules:[
			{
				test:/\.js?$/,
				loader:'babel-loader',
				query:{
					presets:['es2015','stage-0','react']
				},
				exclude:/node_modules/
			}
		]
	}
}