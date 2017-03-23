import settings from 'app/settings';


const {API_URL} = settings;
const baseUrl = `${API_URL}/tasks/categories`;

let api = {
  list: ()=> {
    return fetch(baseUrl);
  }
};

export default api
