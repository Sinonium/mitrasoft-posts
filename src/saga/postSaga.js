import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { API_URL } from '../api';
import { getPosts, getPostsError, getPostsSuccess } from '../store/reducers/postReducer';

function* fetchPostsWorker(action) {
   try {
      yield put(getPosts())
      const response = yield axios.get(`${API_URL}/posts`, {
         params: action.payload
      })
      yield put(getPostsSuccess(response.data))
   } catch (e) {
      yield put(getPostsError(e.message))
   }
}

function* fetchPostsByIdWorker(action) {
   try {
      yield put(getPosts())
      const response = yield axios.get(`${API_URL}/posts`,{
         params: {
            userId: action.payload
         }
      })
      yield put(getPostsSuccess(response.data))
   } catch (e) {
      yield put(getPostsError(e.message))
   }
}

export function* postsWatcher() {
   yield takeEvery('GET_POSTS_RESPONSE_ASYNC', fetchPostsWorker)
   yield takeEvery('GET_POSTS_RESPONSE_BY_ID_ASYNC', fetchPostsByIdWorker)
}