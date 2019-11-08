import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		"showa":true,
		goods:[
			{
				id:10000110,
				num:10
			},
		]
	},
	mutations: {
		setshowa(state,log){
			state.showa=log
		}
	},
	actions: {
	},
	modules: {
	}
})
