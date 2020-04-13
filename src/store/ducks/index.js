import { combineReducers } from 'redux';

import profile from './profile';
import preConditions from './preConditions';

const appReducer = () => combineReducers({ profile, preConditions });

export default appReducer;
