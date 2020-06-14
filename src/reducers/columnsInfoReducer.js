import { 
  ACTION_COLUMNS_INFO_FETCH_STARTED,
  ACTION_COLUMNS_INFO_FETCH_SUCCESS,
  ACTION_COLUMNS_INFO_FETCH_ERROR 
} from '../actions/columnsInfoActions';

const initialState = {
  columns: [],
  error: '',
  loading: true,
}

const columnsInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_COLUMNS_INFO_FETCH_STARTED: 
      return {...state, loading: true }
    case ACTION_COLUMNS_INFO_FETCH_SUCCESS: 
      return {
        ...state,
        loading: false,
        error: '',
        columns: action.payload
      }
    case ACTION_COLUMNS_INFO_FETCH_ERROR: 
      return {...state, loading: false, error: action.payload}
    default: 
      return state;
  }
}

export default columnsInfoReducer;
