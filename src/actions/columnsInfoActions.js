import axios from 'axios';
import generateColumns from '../utils/generateColumns';

const TEST_COLUMNS_INFO_URL = 'https://run.mocky.io/v3/9700b81e-1edd-49b8-8160-736b24a989a7';

export const ACTION_COLUMNS_INFO_FETCH_STARTED = 'ACTION_COLUMNS_INFO_FETCH_STARTED';
export const ACTION_COLUMNS_INFO_FETCH_SUCCESS = 'ACTION_COLUMNS_INFO_SUCCESS';
export const ACTION_COLUMNS_INFO_FETCH_ERROR = 'ACTION_COLUMNS_INFO_ERROR';

export const actionFetchColumnsInfo = () => (
  (dispatch) => {
    dispatch(actionFetchColumnsInfoStarted());
    axios.get(TEST_COLUMNS_INFO_URL)
    .then((result) => {
      const { config } = result.data;
      if (config) {
        const columns = generateColumns(config);
        dispatch(actionFetchColumnsInfoSucces(columns));
      };
    })
    .catch((error) => {
      dispatch(actionFetchColumnsInfoError('Failed fetching columns info! Please, try refresh page a little later'));
    })
  }
)

export const actionFetchColumnsInfoStarted = () => {
  return {
    type: ACTION_COLUMNS_INFO_FETCH_STARTED
  }
}

export const actionFetchColumnsInfoSucces = (data) => {
  return {
    type: ACTION_COLUMNS_INFO_FETCH_SUCCESS,
    payload: data,
  }
}

export const actionFetchColumnsInfoError = (error) => {
  return {
    type: ACTION_COLUMNS_INFO_FETCH_ERROR,
    payload: error,
  }
}
