import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations.js'

Vue.use(Vuex)

const state = {

	question: '' //会员卡价格
};

export default new Vuex.Store({
	state,
	mutations,
})