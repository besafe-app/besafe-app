import { combineReducers } from 'redux';

import profile from './profile';
import user from './user';

const appReducer = () => combineReducers({ profile, user });

export default appReducer;
