'user strict'
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
	}
};
module.exports = _mm;