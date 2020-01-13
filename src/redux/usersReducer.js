import { SET_USERS, SET_PAGE, SET_ACTIVE_USER } from './types';

const handlers = {
	[SET_ACTIVE_USER]: state => {
		const usersCount = state.users.length;
		if (!usersCount) return { ...state, activeUser: null };
		return {
			...state,
			activeUser: state.users[Math.floor(Math.random() * usersCount)]
		};
	},
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
	activeUser: null,
	pageLimit: 5,
	currentPage: 1
};

const reducer = (state = initialState, action) => {
	const handle = handlers[action.type] || handlers.DEFAULT;
	return handle(state, action);
};

export const setUsersAC = users => ({ type: SET_USERS, users });
export const setPageAC = page => ({ type: SET_PAGE, page });
export const setActiveUserAC = () => ({ type: SET_ACTIVE_USER });

export default reducer;
