var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var getHtmlConfig = function(name){
	return{
		template:'./src/view/'+ name +'.html',
		filename:'view/'+ name +'.html',
		inject:true,
		hash:true,
		chunks:['common','name']
	}
}
var config = {
	entry:{
		'common':'./src/page/common/index.js',
		'index': './src/page/index/index.js',
		'user-login': './src/page/user-login/index.js'
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
		},
		{
			test: /\.(gif|png|jpg|woff|svg|eot|ttf).??.*$/,
			loader:'url-loader?limit=100&name=resource/[name].[ext]'
		}
		]
	},
	plugins:[
		new ExtractTextPlugin("css/[name].css"),
		new HtmlWebpackPlugin(getHtmlConfig('index')),
		new HtmlWebpackPlugin(getHtmlConfig('user-login'))
	]
}
module.exports = config;