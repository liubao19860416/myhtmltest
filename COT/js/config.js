//提交地址-测试环境
var url_01 = "http://127.0.0.1:8080/personal/sendMail/0";

var qrcode_url = "www.iotbc.com";



//截取url数据方法
var getParam = function (name) {
	var search = document.location.search;
	//alert(search);
	var pattern = new RegExp("[?&]" + name + "\=([^&]+)", "g");
	var matcher = pattern.exec(search);
	var items = null;
	if (null != matcher) {
		try {
			items = decodeURIComponent(decodeURIComponent(matcher[1]));
		} catch (e) {
			try {
				items = decodeURIComponent(matcher[1]);
			} catch (e) {
				items = matcher[1];
			}
		}
	}
	console.log("参数:"+name+"=======>>>"+items);
	return items;
};

function changeURLPar(destiny, par, par_value) 
{ 
	var pattern = par+'=([^&]*)'; 
	var replaceText = par+'='+par_value; 
	if (destiny.match(pattern)) 
	{ 
		var tmp = '/\\'+par+'=[^&]*/'; 
		tmp = destiny.replace(eval(tmp), replaceText); 
		return (tmp); 
	} 
	else 
	{ 
	if (destiny.match('[\?]')) 
		{ 
		return destiny+'&'+ replaceText; 
		} 
	else 
		{ 
		return destiny+'?'+replaceText; 
		} 
	} 
	return destiny+'\n'+par+'\n'+par_value; 
} 

function chooseChi(){
	var url=window.location.href;	
	var language="ch";
	//var newurl=url+"?lang="+language;
	var newurl=changeURLPar(url,"lang",language);
	/**history.replaceState(null, "",newurl);
	$("a").each(function(){
         var v = $(this).attr("href");
		 if(v){
			$(this).attr("href",changeURLPar(v,"lang",language)) 
		 }
     });
	langString(language);**/
}

function chooseEng(){
	var url=window.location.href;
	var language="en";
	//var newurl=url+"?lang="+language;
	var newurl=changeURLPar(url,"lang",language);
	/**history.replaceState(null, "",newurl);
	$("a").each(function(){
         var v = $(this).attr("href");
		 if(v){
			$(this).attr("href",changeURLPar(v,"lang",language)) 
		 }
     });
	 
	 langString(language);**/
}

//获得对应字段
function langString(language){
	// $.getJSON("../language/language_"+language+".json",function(data){ 
	// 			$this = $(this);
	// 		$('[data-action]').each(function(){
	// 			var msg = $(this).attr('data-action');
	// 			$(this).text(data[msg])
	//         })  
	// 	})	
	console.log("当前获取的语言为:"+language);
	if(language == 'en'){
		$('[data-action]').each(function(){
			var msg = $(this).attr('data-action');
			console.log("当前获取msg对象为:"+ msg +"==>>"+data_en[msg]);
			$(this).text(data_en[msg]);
			//$(this).html(data_en[msg]);
		})  
	}
	if(language == 'ch'){
		$('[data-action]').each(function(){
			var msg = $(this).attr('data-action');
			console.log("当前获取msg对象为:" + msg +"==>>"+data_ch[msg]);
			$(this).text(data_ch[msg]);
		})  
	}
	
	$('[data-placeholder]').each(function(){
		var msgPlaceholder = $(this).attr('data-placeholder');
		if(language == 'ch'){
			$(this).attr('placeholder',data_ch[msgPlaceholder]);
			console.log("当前获取placeholder为:" + msgPlaceholder +"==>>"+data_ch[msgPlaceholder]);
		}else{
			$(this).attr('placeholder',data_en[msgPlaceholder]);
			console.log("当前获取placeholder为:" + msgPlaceholder +"==>>"+data_en[msgPlaceholder]);
		}
	});
		
}

$(function(){
	//语言默认中文,刷新操作
	var lang = getParam('lang');
	var url=window.location.href;
	var language = 'ch';
	if(lang && ("ch" === lang || "en" === lang)){
		language=lang;
	}
	// var newurl=url+"?lang="+lang;
	var newurl=changeURLPar(url,"lang",language);
	//history.replaceState(null, "",newurl);
	
	var $aBtn=$('ul.btn li');
    var $aBtn1=$('ul.btnSmall li');
	
	if("en" === language){
		//chooseEng();
		$aBtn.removeClass('am-active');
        $aBtn.next().addClass("am-active");
		$aBtn1.removeClass('am-active');
        $aBtn1.next().addClass("am-active");
	}else{
		//chooseChi();
		$aBtn.addClass('am-active');
        $aBtn.next().removeClass("am-active");
        $aBtn1.addClass('am-active');
        $aBtn1.next().removeClass("am-active");
	}
	$aBtn.click(function(event) { 
        $(this).addClass('am-active');
        $(this).siblings("li").removeClass("am-active");
    });
    $aBtn1.click(function(event) { 
        $(this).addClass('am-active');
        $(this).siblings("li").removeClass("am-active");
    });
	
	/**
	$("a").each(function(){
         var v = $(this).attr("href");
		 if(v){
			$(this).attr("href",changeURLPar(v,"lang",language)) 
		 }
     });

	langString(language);
	**/
})