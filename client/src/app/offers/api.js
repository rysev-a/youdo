import settings from 'app/settings';


const {API_URL, API_HEADERS} = settings;
const baseUrl = `${API_URL}/offers`;

let api = {
  list: (task)=> {
    return fetch(`${baseUrl}?task=${task}`);
  },

  add: (offer)=> {
    return fetch(baseUrl, {
      method: 'post',
      headers: API_HEADERS,
      credentials: 'include',
      body: JSON.stringify(offer)
    });
  },

  accept: (offerID, data)=> {
    return fetch(`${baseUrl}/${offerID}/accept`, {
      method: 'post',
      headers: API_HEADERS,
      credentials: 'include',
      body: JSON.stringify(data)
    });
  },

  confirm: (offerID, data)=> {
    return fetch(`${baseUrl}/${offerID}/confirm`, {
      method: 'post',
      headers: API_HEADERS,
      credentials: 'include',
      body: JSON.stringify(data)
    });
  },

  complete: (offerID, data)=> {
    return fetch(`${baseUrl}/${offerID}/complete`, {
      method: 'post',
      headers: API_HEADERS,
      credentials: 'include',
      body: JSON.stringify(data)
    });
  }

};

export default api
