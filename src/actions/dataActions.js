import axios from 'axios';

export const TEST_DATA_URL = 'https://run.mocky.io/v3/6f15e3ad-bf04-4940-9b81-0f14fac8ebf2';

export const ACTION_DATA_FETCH_STARTED = 'ACTION_DATA_FETCH_STARTED';
export const ACTION_DATA_FETCH_SUCCESS = 'ACTION_DATA_FETCH_SUCCESS';
export const ACTION_DATA_FETCH_ERROR = 'ACTION_DATA_FETCH_ERROR';

export const actionFetchData = () => (
  (dispatch) => {
    dispatch(actionFetchDataStarted());
    axios.get(TEST_DATA_URL)
    .then((result) => {
      const { items } = result.data;
      if (items) dispatch(actionFetchDataSucces(items));
    })
    .catch((error) => {
      dispatch(actionFetchDataError('Failed fetching data! Please, try refresh page a little later'));
    })
  }
)

export const actionFetchDataStarted = () => {
  return {
    type: ACTION_DATA_FETCH_STARTED
  }
}

export const actionFetchDataSucces = (data) => {
  return {
    type: ACTION_DATA_FETCH_SUCCESS,
    payload: data,
  }
}

export const actionFetchDataError = (error) => {
  return {
    type: ACTION_DATA_FETCH_ERROR,
    payload: error,
  }
}
