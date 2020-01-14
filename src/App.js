import React from 'react';
import Users from './components/Users';
import Pagination from './components/Pagination';
import PerPage from './components/PerPage';

function App() {
	return (
		<section className="container">
			<header className="header">
				<div className="header-top">
					<h1>Users</h1>
					<PerPage />
				</div>
				<hr />
				<Pagination />
			</header>
			<Users />
		</section>
	);
}

export default App;
