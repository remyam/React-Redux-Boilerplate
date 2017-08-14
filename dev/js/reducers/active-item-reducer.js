export default function(state = null, action) {
	switch (action.type) {
		case "ITEM SELECTED":
			return action.payload;
			break;

		case "ITEM UPDATED":
		       return state.map(item =>
		        item.id === action.payload.id ?
		          { ...item, label: action.payload.label } :
		          item
		      )
		      break;
	
	}
	return state;
}