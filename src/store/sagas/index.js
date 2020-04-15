import { all } from 'redux-saga/effects';
import profileSaga from './profile';
import preConditionsSaga from './preConditions';
import identificaionSaga from './identificaion';

function* sagas() {
  yield all([profileSaga(), preConditionsSaga(), identificaionSaga()]);
}

export default sagas;
