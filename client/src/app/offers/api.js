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
  }
};

export default api
