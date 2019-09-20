'user strict'
var Hogan = require('hogan.js');
var conf = {
  serverHost:''
}
var _mm = {
	request:function(param){
		var _this = this;
		$.ajax({
			type:param.meehod || 'get',
			url:param.url || '',
			dateType:param.type || 'json',
			data:param.data || '',
			success:function(res){
				if(0 === res.status){
					  typeof param.success === 'function' && param.success(res.data,res.msg);
				  }else if (10 === res.status){
					  
				  }else if (1 === res.status){
					  typeof param.error ===  'function' && param.error(res.msg);
				  }
			},
			error:function(err){
				typeof param.error ===  'function' && param.error(err.statusText);
			}
		});
	},
	doLogin:function(){
		window.location.href = './user-login.html?redirect' + 
		encodeURIComponent(window.location.href);
	},
	getServerUrl:function(path){
		return conf.severHost + path;
	},
	getUrlParam:function(name){
		var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|&)');
		var result = window.location.search.substr(1).match(reg);
		return result ? decodeURIComponent(reset[2]):null;
	},
	renderHtml:function(htmlTemplate,date){
		//Hogan编译模板
		var template = Hogan.compile(htmlTemplate);
		//Hogan渲染模板
		var result = template.render(date);
		//蒋渲染
		return result;
	},
	successTips:function(msg){
		alert(masg || '操作成功');
	},
	errorTips:function(msg){
		alert(mag || '哪里不对了');
	},
	validate:function(value,type){
		var value = $.trim(value);
		if('require' === type){
			return !! value;
		}
		if('phone' === type){
			return /^1\d{10}$/.test(value);
		}
		if('email' === type){
			return /^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/.test(value);
		} 
	},
	goHome:function(){
		window.location.href = './index.html';
	}
};
module.exports = _mm;