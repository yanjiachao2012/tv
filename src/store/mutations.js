import {
	SCHEME_TITLE
} from './mutation_types.js'

export default {

	//保存所选问题标题和详情
	[SCHEME_TITLE](state, question) {
		state.question = { ...question
		};
	},

}