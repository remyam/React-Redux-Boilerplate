import {combineReducers} from 'redux'; 
import itemListReducer from './left-panel-reducer';
import ActiveItemEditReducer from './active-item-reducer';




const allReducers = combineReducers({
	itemList: itemListReducer,
	activeItem: ActiveItemEditReducer
});

export default allReducers;  