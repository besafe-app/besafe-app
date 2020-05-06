import { combineReducers } from 'redux';

import profile from './profile';
import preConditions from './preConditions';
import identification from './identification';
import symptoms from './symptoms';

const appReducer = () => combineReducers({ profile, preConditions, identification, symptoms });

export default appReducer;
