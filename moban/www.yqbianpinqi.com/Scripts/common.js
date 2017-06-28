var url_str=window.location.href;
var host =window.location.host;
var protocol=document.location.protocol; 
var pathinfo=url_str.replace(protocol+'//'+host,'').replace('index.php/','').replace(root_path,'');
var is_pad = navigator.userAgent.toLowerCase().match(/(ipad)/i) != null;
var is_mobi = navigator.userAgent.toLowerCase().match(/(xiaomi|mobile|iphone|android|wap|netfront|java|operasmini|ucweb|windowssce|symbian|series|webos|sonyericsson|sony|blackberry|cellphone|dopod|nokia|samsung|palmsource|xphone|xda|smartphone|pieplus|meizu|midp|cldc|huawei)/i) != null;
if(mobile==1&&is_mobi&&!is_pad){
	
	window.location.href=protocol+'//'+host+root_path+'/Wap'+pathinfo;
}