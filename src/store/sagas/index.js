import { all } from 'redux-saga/effects';
import profileSaga from './profile';
import preConditionsSaga from './preConditions';
import identificationSaga from './identification';

function* sagas() {
  yield all([profileSaga(), preConditionsSaga(), identificationSaga()]);
}

export default sagas;
