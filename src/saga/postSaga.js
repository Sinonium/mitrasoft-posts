import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { API_URL } from '../api';
import {
	getPosts,
	getPostsComments,
	getPostsCommentsError,
	getPostsCommentsSuccess,
	getPostsError,
	getPostsSuccess,
} from '../store/reducers/postReducer';

const delay = (ms) => new Promise(res => setTimeout(res, ms))

function* fetchPostsWorker(action) {
	try {
		yield put(getPosts());
      yield delay(500)
		const response = yield axios.get(`${API_URL}/posts`, {
			params: action.payload,
		});
		yield put(getPostsSuccess(response.data));
	} catch (e) {
		yield put(getPostsError(e.message));
	}
}

function* fetchPostsByIdWorker(action) {
	try {
		yield put(getPosts());
      yield delay(500)
		const response = yield axios.get(`${API_URL}/posts`, {
			params: {
				userId: action.payload,
			},
		});
		yield put(getPostsSuccess(response.data));
	} catch (e) {
		yield put(getPostsError(e.message));
	}
}

function* fetchPostsComments(action) {
	try {
		yield put(getPostsComments());
      yield delay(500)
		const response = yield axios.get(`${API_URL}/posts/${action.payload}/comments`);
		yield put(getPostsCommentsSuccess({id: action.payload, comments: response.data}));
	} catch (e) {
		yield put(getPostsCommentsError(e.message));
	}
}

export function* postsWatcher() {
	yield takeEvery('GET_POSTS_RESPONSE_ASYNC', fetchPostsWorker);
	yield takeEvery('GET_POSTS_RESPONSE_BY_ID_ASYNC', fetchPostsByIdWorker);
	yield takeEvery('GET_POSTS_COMMENTS_RESPONSE_ASYNC', fetchPostsComments);
}
