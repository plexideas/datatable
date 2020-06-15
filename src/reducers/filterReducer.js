import { ACTION_FILTER_SET_CRITERIA, ACTION_FILTER_CLEAR } from "../actions/filterReducer";


const initialState = {
  description: '',
  source: '',
  clientName: '',
  terminationDate: '',
  maxRange: null
}

const commonReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_FILTER_SET_CRITERIA: 
      return {...state, ...action.payload }
    case ACTION_FILTER_CLEAR: 
      return {...state, ...initialState};
    default: 
      return state;
  }
}

export default commonReducer;

