const initialState = {
	posts: [],
	loading: false,
	error: null,
	page: 1,
	limit: 10,
};

const GET_POSTS_RESPONSE = 'GET_POSTS_RESPONSE'
const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS'
const GET_POSTS_ERROR = 'GET_POSTS_ERROR'
const GET_POSTS_RESPONSE_ASYNC = 'GET_POSTS_RESPONSE_ASYNC'


export const postReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_POSTS_RESPONSE:
			return {
				...state,
        		posts: [],
				loading: true,
			};
		case GET_POSTS_SUCCESS:
			return {
				...state,
				posts: action.payload,
				loading: false,
			};
		case GET_POSTS_ERROR:
			return {
				...state,
				error: action.payload,
				loading: false,
			};

		default:
			return state;
	}
};

export const getPostsAsync = (payload) => ({type: GET_POSTS_RESPONSE_ASYNC, payload})
export const getPosts = () => ({type: GET_POSTS_RESPONSE})
export const getPostsSuccess = (payload) => ({type: GET_POSTS_SUCCESS, payload})
export const getPostsError = (payload) => ({type: GET_POSTS_ERROR, payload})
