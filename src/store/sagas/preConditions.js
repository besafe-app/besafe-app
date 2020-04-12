import { takeLatest, put } from 'redux-saga/effects';
import { Types } from '../ducks/preConditions';
import { api } from 'utils';
import constants from 'config/constants';
import { getLanguage } from 'helpers';

function* listPreConditions({ payload: { token } }) {
  try {
    const response = yield api.get(constants.api.preConditions.list, {
      params: {
        language: getLanguage().split('-')[0]
      },
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    yield put({
      type: Types.LIST_PRE_CONDITIONS_SUCCESS,
      listPreConditions: response.data
    });
  } catch (error) {
    console.log(error);
    yield put({
      type: Types.LIST_PRE_CONDITIONS_FAIL,
      errors: [error]
    });
  }
}

function* savePreConditions({ payload: { conditions, token } }) {
  try {
    yield api.post(
      constants.api.preConditions.save,
      {
        conditions
      },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    yield put({ type: Types.SAVE_PRE_CONDITIONS_SUCCESS });
  } catch (error) {
    yield put({
      type: Types.SAVE_PRE_CONDITIONS_FAIL,
      errors: [error]
    });
  }
}

export default function* watcherSaga() {
  yield takeLatest(Types.LIST_PRE_CONDITIONS_REQUEST, listPreConditions);
  yield takeLatest(Types.SAVE_PRE_CONDITIONS_REQUEST, savePreConditions);
}
