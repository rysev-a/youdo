const requestAction = (promise, types, complete) => {
  let {request, success, error} = types;

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
          complete();
        }
      })
    });
  }
};


export default requestAction
