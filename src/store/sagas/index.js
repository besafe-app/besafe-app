import { all } from 'redux-saga/effects';
import profileSaga from './profile';
import userSaga from './user';

function* sagas() {
  yield all([profileSaga(), userSaga()]);
}

export default sagas;
