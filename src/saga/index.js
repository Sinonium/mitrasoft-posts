import { all } from 'redux-saga/effects';
import { postsWatcher } from './postSaga';
import { userWatcher } from './userSaga';
export function* rootWatcher() {
	yield all([postsWatcher(), userWatcher()]);
}
