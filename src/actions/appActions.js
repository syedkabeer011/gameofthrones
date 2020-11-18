import ajax from '../utils/ajax';

export const getDataAction = (params) => dispatch => ajax
  .get('/characters/'+params, {
    
  })
  .then((response) => {
    if (response) {
      if (response.data.success) {
        dispatch({ type: 'GET_DATA_SUCCESS', payload: response.data });
      } else {
        dispatch({ type: 'GET_DATA_FAILURE', payload: response.data });
        
      }
    } else {
      let errorMessage = {
        data: {
          success: false,
          message: "No Response"
        }
      }
      dispatch({ type: 'GET_DATA_FAILURE', payload: errorMessage });
    }

  })
  .catch((error) => {
    
    if (error)
      dispatch({ type: 'GET_DATA_FAILURE', payload: error });
    else
      dispatch({ type: 'GET_DATA_FAILURE', payload: error.response });
  });


