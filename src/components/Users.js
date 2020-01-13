import React from 'react';
import { connect } from 'react-redux';
import { setUsersAC } from '../redux/usersReducer';

const usersApi = 'http://localhost:5000/users';

const mapStateToProps = state => {
	return {
		users: state.users,
		usersLimit: state.pageLimit,
		currentPage: state.currentPage
	};
};

const mapDispatchToProps = dispatch => {
	return {
		setUsers: users => dispatch(setUsersAC(users))
	};
};

class Users extends React.Component {
	componentDidMount() {
		const { setUsers } = this.props;
		fetch(usersApi)
			.then(response => response.json())
			.then(users => setUsers(users));
	}

	render() {
		const { users, currentPage, usersLimit } = this.props;
		const usersOffset = (currentPage - 1) * usersLimit;
		const usersLimited = users.slice(usersOffset, usersOffset + usersLimit);
		return (
			<div className="users">
				{!usersLimited.length
					? 'No users'
					: usersLimited.map(user => {
							return (
								<div key={user.id} className="user">
									<p className="user-name">{`${user.name} ${user.surname}`}</p>
									<p className="user-desc">{user.desc}</p>
								</div>
							);
					  })}
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);
