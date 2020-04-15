import { takeLatest, put } from 'redux-saga/effects';
import { Types } from '../ducks/preConditions';
import { api } from 'utils';
import constants from 'config/constants';

function* createProfile({ payload: { name, phone } }) {
  try {
    const response = api.post(constants.api.identification.create, {
      params: {
        name: name,
        phone: phone
      }
      // ,
      // headers: {
      //   Authorization: `Bearer ${token}`
      // }
    });

    yield post({ type: Types.CREATE_PROFILE_SUCCESS, id: response.data });
  } catch (error) {
    yield post({ type: Types.CREATE_PROFILE_FAIL, errors: [error] });
  }
}

function* validationProfile({ payload: { id, code } }) {
  try {
    const response = api.post(constants.api.identification.validate, {
      params: {
        id: id,
        code: code
      }
      // ,
      // headers: {
      //   Authorization: `Bearer ${token}`
      // }
    });
    yield post({ type: Types.VALIDATION_PROFILE_SUCCESS, id: response.data });
  } catch (error) {
    yield post({ type: Types.VALIDATION_PROFILE_FAIL, errors: [error] });
  }
}

export default function* watcherSaga() {
  yield takeLatest(Types.CREATE_PROFILE_REQUEST, createProfile);
  yield takeLatest(Types.VALIDATION_PROFILE_REQUEST, validationProfile);
}
