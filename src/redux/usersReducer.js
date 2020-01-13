import { SET_USERS, SET_PAGE } from './types';

const handlers = {
	[SET_PAGE]: (state, { page }) => ({ ...state, currentPage: page }),
	[SET_USERS]: (state, { users }) => ({
		...state,
		users,
		usersCount: users.length
	}),
	DEFAULT: state => state
};

const initialState = {
	users: [],
	usersCount: 0,
	pageLimit: 5,
	currentPage: 1
};

const reducer = (state = initialState, action) => {
	const handle = handlers[action.type] || handlers.DEFAULT;
	return handle(state, action);
};

export const setUsersAC = users => ({ type: SET_USERS, users });
export const setPageAC = page => ({ type: SET_PAGE, page });

export default reducer;
