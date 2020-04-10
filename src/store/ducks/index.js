import { combineReducers } from 'redux';

import profile from './profile';

const appReducer = () => combineReducers({ profile });

export default appReducer;
