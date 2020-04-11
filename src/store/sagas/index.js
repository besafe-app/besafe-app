import { all } from 'redux-saga/effects';
import profileSaga from './profile';
import preConditionsSaga from './preConditions';

function* sagas() {
  yield all([profileSaga(), preConditionsSaga()]);
}

export default sagas;
