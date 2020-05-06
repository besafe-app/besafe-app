import { all } from 'redux-saga/effects';
import profileSaga from './profile';
import preConditionsSaga from './preConditions';
import identificationSaga from './identification';
import symptomsSaga from './symptoms';

function* sagas() {
  yield all([profileSaga(), preConditionsSaga(), identificationSaga(), symptomsSaga()]);
}

export default sagas;
