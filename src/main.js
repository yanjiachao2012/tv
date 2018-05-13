// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Router from 'vue-router';
import store from './store/index';
import App from './App';

import routes from './router/index';


import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'vue-awesome-swiper/node_modules/swiper/dist/css/swiper.min.css';

import VueDND from 'awe-dnd';
import VueAwesomeSwiper from 'vue-awesome-swiper';

Vue.use(VueAwesomeSwiper)
Vue.use(VueDND);


Vue.use(ElementUI);
Vue.use(Router)

Vue.config.productionTip = false

const router = new Router({
	store,
	routes,
})

/* eslint-disable no-new */
/*new Vue({
	el: '#app',
	router,
	components: {
		App
	},
	template: '<App/>'
})*/
new Vue({
	router
}).$mount('#app')