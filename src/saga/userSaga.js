import {  put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { API_URL } from '../api';
import { getUser, getUserError, getUserSuccess } from '../store/reducers/userReducer';

function* fetchUserWorker(action) {
   try {
      yield put(getUser())
      const response = yield axios.get(`${API_URL}/users/${action.payload}`)
      yield put(getUserSuccess(response.data))
   } catch (e) {
      yield put(getUserError(e.message))
   }
}

export function* userWatcher() {
   yield takeEvery('GET_USER_RESPONSE_ASYNC', fetchUserWorker)
}