const requestAction = (promise, types) => {
  let {request, success, error, complete} = types;

  return (dispatch)=> {
    dispatch({type: request});

    promise.then((response)=> {
      let requestType = response.ok ? success : error;

      response.json().then((json)=> {
        dispatch({               
          type: requestType,
          payload: json
        });

        // start complete dispatch
        if (response.ok && complete) {
          dispatch(complete);
        }
      })
    });
  }
};


export default requestAction
