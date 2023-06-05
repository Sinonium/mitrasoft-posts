const initialState = {
	user: {},
	loading: false,
	error: null
};

const GET_USER_RESPONSE = 'GET_USER_RESPONSE'
const GET_USER_SUCCESS = 'GET_USER_SUCCESS'
const GET_USER_ERROR = 'GET_USER_ERROR'
const GET_USER_RESPONSE_ASYNC = 'GET_USER_RESPONSE_ASYNC'
const GET_POSTS_RESPONSE_BY_ID_ASYNC = 'GET_POSTS_RESPONSE_BY_ID_ASYNC'


export const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_USER_RESPONSE:
			return {
				...state,
				user: {},
				loading: true,
			};
		case GET_USER_SUCCESS:
			return {
				...state,
				user: action.payload,
				loading: false,
			};
		case GET_USER_ERROR:
			return {
				...state,
				error: action.payload,
				loading: false,
			};

		default:
			return state;
	}
};

export const getUserAsync = (payload) => ({type: GET_USER_RESPONSE_ASYNC, payload})
export const getUserByIdAsync = (payload) => ({type: GET_POSTS_RESPONSE_BY_ID_ASYNC, payload})
export const getUser = () => ({type: GET_USER_RESPONSE})
export const getUserSuccess = (payload) => ({type: GET_USER_SUCCESS, payload})
export const getUserError = (payload) => ({type: GET_USER_ERROR, payload})