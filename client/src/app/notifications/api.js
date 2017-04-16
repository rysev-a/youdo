import settings from 'app/settings';


const {API_URL, API_HEADERS} = settings;
const baseUrl = `${API_URL}/notifications`;

let api = {
  list: (page, user)=> {
    return fetch(`${baseUrl}?page=${page}&user=${user}`);
  },

  item: (id)=> {
    return fetch(`${baseUrl}/${id}`)
  },

  add: (notification)=> {
    return fetch(baseUrl, {
      method: 'post',
      headers: API_HEADERS,
      credentials: 'include',
      body: JSON.stringify(notification)
    });
  },

  read: (notificationID)=> {
    return fetch(`${baseUrl}/${notificationID}`, {
      method: 'put',
      headers: API_HEADERS,
      credentials: 'include',
      body: JSON.stringify({status: 'old'})
    });
  }

};

export default api
