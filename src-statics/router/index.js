//import Vue from 'vue'
//import Router from 'vue-router'

import App from '../App'


const home = r => require.ensure([], () => r(require('../pages/home/home')), 'home');
const schemes = r => require.ensure([], () => r(require('../pages/schemes/schemes')), 'schemes');
const addScheme = r => require.ensure([], () => r(require('../pages/schemes/addScheme')), 'addScheme');
const library = r => require.ensure([], () => r(require('../pages/library/library')), 'library');
/*import home from '../components/home/home';

import home1 from '../pages/home1/home1';

let routes = [{
	path: '/home',
	name: 'home',
	component: home
}, {
	path: '/home1',
	name: 'home1',
	component: home1
}]*/

/*export default new Router({
	routes
})*/

export default [{
	path: '/',
	component: App, //顶层路由，对应index.html
	children: [{ //二级路由。对应App.vue
		path: '', //空页面对应home
		redirect: '/home'
	}, {
		path: '/home',
		name: 'home',
		component: home
	}, {
		path: '/schemes',
		component: schemes
	}, {
		path: '/addScheme',
		name: 'addScheme',
		component: addScheme
	}, {
		path: '/library',
		name: 'library',
		component: library
	}]
}]