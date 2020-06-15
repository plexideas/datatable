import { 
  ACTION_DATA_FETCH_STARTED,
  ACTION_DATA_FETCH_SUCCESS,
  ACTION_DATA_FETCH_ERROR, 
  ACTION_SET_DATA
} from '../actions/dataActions';

const initialState = {
  data: [],
  error: '',
  loading: true,
}

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_DATA_FETCH_STARTED: 
      return {...state, loading: true }
    case ACTION_DATA_FETCH_SUCCESS: 
      return {
        ...state,
        loading: false,
        error: '',
        data: action.payload
      }
    case ACTION_DATA_FETCH_ERROR: 
      return {...state, loading: false, error: action.payload}
    case ACTION_SET_DATA: 
      return {
        ...state, 
        data: action.payload,
      }
    default: 
      return state;
  }
}

export default dataReducer;
