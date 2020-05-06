import { takeLatest, put } from 'redux-saga/effects';
import { Types } from '../ducks/symptoms';
import { api } from 'utils';
import constants from 'config/constants';
import { getLanguage } from 'helpers';

function* listSymptoms({ payload: { token } }) {
  try {
    const response = yield api.get(constants.api.symptoms.list, {
      params: {
        language: getLanguage().split('-')[0]
      },
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    yield put({
      type: Types.LIST_SYMPTOMS_SUCCESS,
      listSymptoms: response.data
    });
  } catch (error) {
    yield put({
      type: Types.LIST_SYMPOMTS_FAIL,
      errors: [error]
    });
  }
}

function* saveSymptoms({ payload: { conditions, token } }) {
  try {
    yield api.post(
      constants.api.symptoms.save,
      {
        conditions
      },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    yield put({ type: Types.SAVE_SYMPTOMS_SUCCESS });
  } catch (error) {
    yield put({
      type: Types.SAVE_SYMPTOMS_FAIL,
      errors: [error]
    });
  }
}

export default function* watcherSaga() {
  yield takeLatest(Types.LIST_SYMPTOMS_REQUEST, listSymptoms);
  yield takeLatest(Types.SAVE_SYMPTOMS_REQUEST, saveSymptoms);
}
