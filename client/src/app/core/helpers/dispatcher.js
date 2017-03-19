export const AsyncActionsCreator = (dispatch, promise, types) => {
  let {request, success, failure} = types;

  return (dispatch)=> {
    dispatch({type: request});

    promise.then((response)=> {
      let requestType = response.ok ? success : failure;

      response.json().then((json)=> {
        dispatch({               
          type: requestType,
          payload: json
        })
      })
    });
  }
}
