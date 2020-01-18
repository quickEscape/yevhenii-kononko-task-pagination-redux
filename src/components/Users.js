import React from 'react';
import { connect } from 'react-redux';
import { setUsersAC, setActiveUserAC } from '../redux/usersReducer';

const usersApi = `${window.location.href}data/users`;

const mapStateToProps = state => {
	return {
		users: state.users,
		usersLimit: state.pageLimit,
		currentPage: state.currentPage,
		activeUser: state.activeUser
	};
};

const mapDispatchToProps = dispatch => {
	return {
		setUsers: users => dispatch(setUsersAC(users)),
		setActiveUser: () => dispatch(setActiveUserAC())
	};
};

class Users extends React.Component {
	componentDidMount() {
		const { setUsers, setActiveUser } = this.props;
		fetch(usersApi)
			.then(response => response.json())
			.then(users => setUsers(users));

		setInterval(() => {
			setActiveUser();
		}, 8000);
	}

	render() {
		const { users, activeUser, currentPage, usersLimit } = this.props;
		const usersOffset = (currentPage - 1) * usersLimit;
		const usersLimited = users.slice(usersOffset, usersOffset + usersLimit);
		return (
			<div className="users">
				{!usersLimited.length
					? 'Oops! No users! (run "yarn serve" or "npm run serve" command in terminal and reload page)'
					: usersLimited.map(user => {
							return (
								<div key={user.id} className="user">
									<p className="user-name">{`${user.name} ${user.surname}`}</p>
									<p className="user-desc">{user.desc}</p>
								</div>
							);
					  })}
				{activeUser && (
					<div className="user user-active">
						{`${activeUser.name} ${activeUser.surname}`}
					</div>
				)}
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);
