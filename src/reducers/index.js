import { combineReducers } from 'redux';

import dataReducer from './dataReducer';
import columnsInfoReducer from './columnsInfoReducer';

export default combineReducers({
  data: dataReducer,
  columnsInfo: columnsInfoReducer
});
