/**
 * 配置编译环境和线上环境之间的切换
 * 
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * imgBaseUrl: 图片所在域名地址
 * 
 */

let baseUrl = '';
let routerMode = 'hash';
let imgBaseUrl = "";

let fromSource = 'localhost';
//let fromSource = 'team';

if (fromSource == 'localhost') {
	//baseUrl = 'http://10.200.201.72:8090';
	baseUrl = "http://192.168.1.101:8090";

	imgBaseUrl = 'http://10.200.201.72:8090/img/';

} else {
	baseUrl = 'http://10.200.54.126:8006/elevTv/apis';
	imgBaseUrl = '';
}


/*if (process.env.NODE_ENV == 'development') {
	baseUrl = 'http://www.localhost:8090';
	//baseUrl = "http://10.201.78.23:8100";
	baseUrl='http://10.200.54.126:8006/elevTv/apis';
	imgBaseUrl = 'http://www.localhost:8090/img/';

} else if (process.env.NODE_ENV == 'production') {
	baseUrl = 'http://www.localhost:8090';
	imgBaseUrl = '';
}*/

export {
	baseUrl,
	routerMode,
	imgBaseUrl
}