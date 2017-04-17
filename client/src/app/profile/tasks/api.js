import settings from 'app/settings'


const {API_URL} = settings;
const baseUrl = `${API_URL}/tasks`;

let api = {
  list: (page, sort, filter)=> {
    sort = JSON.stringify(sort);
    filter = JSON.stringify(filter);
    return fetch(`${baseUrl}?page=${page}&sort=${sort}&filter=${filter}`);
  }
};

export default api
