import { combineReducers } from 'redux';

import dataReducer from './dataReducer';
import columnsInfoReducer from './columnsInfoReducer';
import commonReducer from './commonReducer';

export default combineReducers({
  data: dataReducer,
  columnsInfo: columnsInfoReducer,
  common: commonReducer
});
