import { combineReducers } from 'redux';

import profile from './profile';
import preConditions from './preConditions';
import identification from './identification';

const appReducer = () => combineReducers({ profile, preConditions, identification });

export default appReducer;
