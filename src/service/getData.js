//import fetch from '../config/fetch';
//import 'whatwg-fetch';
import axios from 'axios';
import qs from 'qs';
import config from '../config/_axios.js';
import {
	baseUrl
} from '../config/env.js';

/*export const example = (aa) => fetch('/guoyao/list', {
	aa: '1'
}, 'GET');*/


/*class API {
	floor(param) {
		config.data.Method = "get";
		config.data.CustData.Data = param;
		return axios.post(baseUrl + '/tv/getFloor', {}, config);
	}
	listItem(param) {
		console.log(config);
		var commonData = Object.create(config);

		config.data.Method = "get";
		config.data.CustData.Data = param;
		return axios.post(baseUrl + '/tv/getLibrary', {}, config);
	}
}
export default API;*/


export const listItem = function(param) {
	return axios.get(baseUrl + '/tv/getPlanList', {
		params: param
	}, {
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		}

	})
};
export const getLibrary = function(param) {
	return axios.get(baseUrl + '/tv/getAll', param, {
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		}

	})
}
export const getPlanList = function(param) {
	return axios.get(baseUrl + '/library/getPlanList', param, {
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		}

	})
}
export const floor = function(param) {
	return axios.get(baseUrl + '/tv/getFloor', param, {
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			}
		}

	)
}

export const schemes = function(param) {
	return axios.get(baseUrl + '/tv/getPlan', param, {
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			}
		}

	)
}


/*fetch('/users.json').then(function(response) {
  console.log(response.headers.get('Content-Type'))
  console.log(response.headers.get('Date'))
  console.log(response.status)
  console.log(response.statusText)
})*/


/*export const changePassword = (username, oldpassWord, newpassword, confirmpassword, captcha_code) => fetch('/v2/changepassword', {
	username,
	oldpassWord,
	newpassword,
	confirmpassword,
	captcha_code
}, 'POST');*/