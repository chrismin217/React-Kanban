/*AGGREGATE REDUCER*/

import { combineReducers } from 'redux';
import CardReducer from './card_reducer';
import ColumnReducer from './column_reducer';

const allReducers = combineReducers({
  cards : '',
  columns : ''
});

export default allReducers;