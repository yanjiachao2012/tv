//import fetch from '../config/fetch';
//import 'whatwg-fetch';
import {
	baseUrl
} from '../config/env.js';

export const example = (aa) => fetch('/guoyao/list', {
	aa: '1'
}, 'GET');

export const listItem = function(param) {
	fetch(baseUrl + '/tv/getLibrary', param)
}
/*fetch('/users.json').then(function(response) {
  console.log(response.headers.get('Content-Type'))
  console.log(response.headers.get('Date'))
  console.log(response.status)
  console.log(response.statusText)
})*/


export const changePassword = (username, oldpassWord, newpassword, confirmpassword, captcha_code) => fetch('/v2/changepassword', {
	username,
	oldpassWord,
	newpassword,
	confirmpassword,
	captcha_code
}, 'POST');