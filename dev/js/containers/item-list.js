 import React, {Component} from 'react';
 import {bindActionCreators} from 'redux';
 import {connect} from 'react-redux';
 import {selectItem} from '../actions';

 class ItemList extends Component {
 	createListItems() {
 			return this.props.items.map( (item) => {
 				return(
 					<li key={item.id} >
 						{item.label} 
 						<a onClick ={() => this.props.selectItem(item)}>
 							&nbsp; select
 						</a>
 					</li>
 					);
 			}) 
 		}

 	render() {
 		
 		return (
 			<ul className="sidebar-nav">
 				{this.createListItems()}
 			</ul>
 		);
 	}
 }

 function mapStoreToProps(state) {
 	return {
 		items : state.itemList
 	};
 }

 function matchDispatchToProps(dispatch) {
 	return bindActionCreators({selectItem: selectItem}, dispatch)
 }


 export default connect(mapStoreToProps, matchDispatchToProps)(ItemList);