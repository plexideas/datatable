export const ACTION_FILTER_SET_CRITERIA = 'ACTION_FILTER_SET_CRITERIA';
export const ACTION_FILTER_CLEAR = 'ACTION_FILTER_CLEAR';

export const actionFilterSetCriteria = (criteria) => {
  return {
    type: ACTION_FILTER_SET_CRITERIA,
    payload: criteria
  }
}

export const actionFilterClear = () => {
  return {
    type: ACTION_FILTER_CLEAR,
  }
}
