import { all } from 'redux-saga/effects';
import profileSaga from './profile';

function* sagas() {
  yield all([profileSaga()]);
}

export default sagas;
