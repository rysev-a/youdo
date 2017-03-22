import settings from 'app/settings';


const {API_URL} = settings;
const baseUrl = `${API_URL}/tasks`;

let api = {
  list: (page)=> {
    return fetch(`${baseUrl}?page=${page}`);
  }
};

export default api
