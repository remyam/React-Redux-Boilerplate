import React from 'react';
import '../../scss/style.scss';
import ItemList from '../containers/item-list';
import ItemDetail from '../containers/item-detail';
import { Navbar} from 'react-bootstrap';

const App = () => {  
	return(
	<div className = "row-fluid">
		<Navbar />
		<div className="span2 sidebar" id="sidebar-wrapper">
			<h2>Item List:</h2>
			<ItemList />
		</div>
		
		<div className="span8 main" id="main-container">
			<h2>Item Details</h2>
			<ItemDetail />
		</div>
	</div>
	)
};

export default App;