import settings from 'app/settings';


const {API_URL, API_HEADERS} = settings;
const baseUrl = `${API_URL}/tasks`;

let api = {
  list: (page)=> {
    return fetch(`${baseUrl}?page=${page}`);
  },

  item: (id)=> {
    return fetch(`${baseUrl}/${id}`)
  },

  add: (task)=> {
    return fetch(baseUrl, {
      method: 'post',
      headers: API_HEADERS,
      credentials: 'include',
      body: JSON.stringify(task)
    });
  }
};

export default api
