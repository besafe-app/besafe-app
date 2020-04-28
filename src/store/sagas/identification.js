import { takeLatest, put } from 'redux-saga/effects';
import { Types } from '../ducks/identification';
import { api } from 'utils';
import constants from 'config/constants';

function* createProfile({ payload }) {
  try {
    const response = api.post(constants.api.identification.create, {
      params: {
        nickname: payload.nickname,
        phone: payload.phoneNumber
      }
      // headers: {
      //   Authorization: `Bearer ${payload.dtoken}`
      // }
    });
    console.log({ response });
    yield put({ type: Types.CREATE_PROFILE_SUCCESS, success: true, data: response.data });
  } catch (error) {
    console.log({ error });
    yield put({ type: Types.CREATE_PROFILE_FAIL, errors: [error] });
  }
}

function* validationProfile({ payload: { id, code, token } }) {
  try {
    const response = api.post(constants.api.identification.validate, {
      params: {
        id: id,
        code: code
      },
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    yield put({ type: Types.VALIDATION_PROFILE_SUCCESS, token: response.token });
  } catch (error) {
    yield put({ type: Types.VALIDATION_PROFILE_FAIL, errors: [error] });
  }
}

export default function* watcherSaga() {
  yield takeLatest(Types.CREATE_PROFILE_REQUEST, createProfile);
  yield takeLatest(Types.VALIDATION_PROFILE_REQUEST, validationProfile);
}
