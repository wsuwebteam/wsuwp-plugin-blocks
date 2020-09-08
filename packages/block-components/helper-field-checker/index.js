const empty = ( field ) => {
	return typeof field == 'undefined' || field.length == 0 || Object.keys(field) == 0;
}

export default empty
