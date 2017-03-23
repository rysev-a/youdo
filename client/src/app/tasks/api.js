import settings from 'app/settings';


const {API_URL, API_HEADERS} = settings;
const baseUrl = `${API_URL}/tasks`;

let api = {
  list: (page)=> {
    return fetch(`${baseUrl}?page=${page}`);
  },

  add: (task)=> {
    return fetch(`${API_URL}/tasks`, {
      method: 'post',
      headers: API_HEADERS,
      credentials: 'include',
      body: JSON.stringify(task)
    });
  }
};

export default api
