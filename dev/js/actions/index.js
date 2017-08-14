export const selectItem = (item) => {
	console.log('You clicked on item: ' ,item.label);
	return {
		type: "ITEM SELECTED",
		payload: item
	}
}; 

export const updateItem = (item) => {
	console.log('You updated item: ' ,item.label);
	return {
		type: "ITEM UPDATED",
		payload: item
	}
}; 

