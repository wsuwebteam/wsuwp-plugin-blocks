const feedControlAtts = {
	postType: {
		type: 'string',
		default: 'post'
	},
	taxonomy: {
		type: 'string',
		default: 'category'
	},
	termIds: {
		type: 'string',
		default: ''
	},
	count: {
		type: 'integer',
		default: 5,
	},
	offset: {
		type: 'integer',
		default: 0,
	},	
};


export default feedControlAtts;