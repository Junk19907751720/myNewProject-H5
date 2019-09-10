var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var config = {
	entry:{
		'index': './src/page/index/index.js',
		'login': './src/page/login/index.js'
	},
	output:{
		path: path.resolve(__dirname,'dist'),
		filename:'js/[name].js'
	},
	externals:{
		'jquery' : 'window.jQuery'
	},
	/*optimization:{
		//抽取公共模块的对象
		splitChunks: {
			//缓存组
			cacheGroups: {
				//commons表示公共都的模块
				commons: {
					//即会生产独立通用模块base.js文件
					name:'base',
					chunks:'initial',
					//最小2个文件有公共内容才提取
					minChunks:2,
					 //SplitChunksPlugin默认地只会分离大于30Kb的文件
       				 //我们的公共文件并没有大于30Kb，所以改为0之后就完美了
					minSize:0
				}
			}
		}
	},*/
	module:{
		rules:[
		{
			test: /\.css$/,
			loader:ExtractTextPlugin.extract({
				fallback:"style-loader",
				use:"css-loader"
			})
			//loader:"style-loader!css-loader"
		}
		]
	},
	plugins:[
		new ExtractTextPlugin("css/[name].css")
	]
}
module.exports = config;