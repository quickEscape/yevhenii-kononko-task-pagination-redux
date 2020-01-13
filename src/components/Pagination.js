import React from 'react';
import { setPageAC } from '../redux/usersReducer';
import { connect } from 'react-redux';

const mapStateToProps = state => {
	return {
		pagesCount: Math.ceil(state.usersCount / state.pageLimit),
		currentPage: state.currentPage
	};
};

const mapDispatchToProps = dispatch => {
	return {
		setPage: page => dispatch(setPageAC(page))
	};
};

function Pagination(props) {
	const { pagesCount: count, currentPage, setPage } = props;
	return count > 1 ? (
		<div className="pagination">
			{Array(count)
				.fill(0)
				.map((l, i) => {
					const page = i + 1;
					const activeClass = currentPage === page ? ' active' : '';
					return (
						<div
							key={i}
							onClick={() => setPage(page)}
							className={'pagination-item' + activeClass}
						>
							{page}
						</div>
					);
				})}
		</div>
	) : null;
}

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
