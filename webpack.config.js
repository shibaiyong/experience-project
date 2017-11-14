module.exports={
	entry:__dirname+"/webpack-app/index.js",
	output: {
		path:__dirname+"/webpack-public",
		filename:'bundle[hash].js'
	},
	devtool: 'eval-source-map',
	devServer: {
    	contentBase: "./webpack-public",//本地服务器所加载的页面所在的目录
    	historyApiFallback: true,//不跳转
    	inline: true//实时刷新
  	} 
}
