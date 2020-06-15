import { 
  ACTION_COMMON_SET_EDITING_KEY,
} from '../actions/commonActions';

const initialState = {
  editingKey: '',
}

const commonReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_COMMON_SET_EDITING_KEY: 
      return {...state, editingKey: action.payload }
    default: 
      return state;
  }
}

export default commonReducer;
