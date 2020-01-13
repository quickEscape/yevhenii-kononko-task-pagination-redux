import React from 'react';
import Users from './components/Users';
import Pagination from './components/Pagination';

function App() {
	return (
		<div className="container">
			<h1>Users</h1>
			<hr />
			<Pagination />
			<Users />
		</div>
	);
}

export default App;
