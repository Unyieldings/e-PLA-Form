import { combineReducers } from 'redux';
import resultsROA from './reducer-active-ROA';

export const allReducers = combineReducers ({
    resROA: resultsROA
    
})

