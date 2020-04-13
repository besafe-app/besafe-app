import { takeLatest, put } from 'redux-saga/effects';
import { Types } from '../ducks/user';
import { api } from 'utils';

function* checkUser({ name = '', phone = '', callback = () => {} }) {
  try {
    const response = yield api.get('/users/check/', { name, phone });

    yield put({
      type: Types.CHECK_USER_EXISTS_SUCCESS,
      user: response.data
    });
    callback();
  } catch (error) {
    if (error.response.status === 404) {
      const response = yield api.post('/users/create', { name, phone });

      if (response.status === 201) {
        yield put({
          type: Types.CHECK_USER_EXISTS_SUCCESS,
          user: response.data
        });
        return callback();
      }

      return yield put({
        type: Types.CHECK_USER_EXISTS_FAILURE,
        errors: error
      });
    }

    yield put({
      type: Types.CHECK_USER_EXISTS_FAILURE,
      errors: error
    });
  }
}

export default function* watcherSaga() {
  yield takeLatest(Types.CHECK_USER_EXISTS, checkUser);
}
