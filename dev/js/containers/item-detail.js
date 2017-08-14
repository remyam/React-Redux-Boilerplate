 import React, {Component} from 'react';
 import {connect} from 'react-redux';
 import {bindActionCreators} from 'redux';
 import {updateItem} from '../actions';

 class ItemDetail extends Component {

 	render() {
 		if (!this.props.item) {
 			return (<h3>Select an item from left panel to edit</h3>);
 		}
 		return (
 			<div>
 			<input type="text" 
 				value={this.props.item.label} 
 				onChange = {(e) => this.props.updateItem({id:this.props.item.id, label:e.target.value})} />
 			</div>
 		);
 	}
 }

 function mapStoreToProps(state) {
 	return {
 		item : state.activeItem 
 	};
 }

 const mapDispatchToProps = (dispatch) => {
  return {
    updateItem: (item) => {
      dispatch(updateItem(item))
    }
  }
}
export default connect(mapStoreToProps, mapDispatchToProps)(ItemDetail);