import React from 'react';
import { connect } from 'react-redux';
import { setPageLimitAC as setUsersLimitAC } from '../redux/usersReducer';

const mapStateToProps = state => {
	return {
		usersLimit: state.pageLimit
	};
};

const mapDispatchToProps = dispatch => {
	return {
		setUsersLimit: limit => dispatch(setUsersLimitAC(limit))
	};
};

function PerPage(props) {
	const { usersLimit, setUsersLimit } = props;
	return (
		<div className="limit">
			<span>Per page: </span>
			{[3, 5, 10, 20].map((limit, i) => {
				const active = limit === usersLimit ? ' active' : '';
				return (
					<button
						key={i}
						onClick={() => setUsersLimit(limit)}
						className={'limit-btn' + active}
					>
						{limit}
					</button>
				);
			})}
		</div>
	);
}

export default connect(mapStateToProps, mapDispatchToProps)(PerPage);
