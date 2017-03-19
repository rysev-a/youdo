import settings from 'app/settings';


const {API_URL, API_HEADERS} = settings;
const baseUrl = `${API_URL}/parsers`;

const api = {
  login: (profile)=> {
    return fetch(`${API_URS}/profile/login`, {
      method: 'post',
      headers: API_HEADERS,
      credentials: 'include',
      body: JSON.stringify(profile)
    });
  },

  logout: ()=> {
    return fetch(`${API_URL}/profile/logout`, {
      method: 'post',
      headers: API_HEADERS,
      credentials: 'include'
    });
  },

  register: (profile)=> {
    return fetch(`${API_URL}/profile/register`), {
      method: 'post',
      headers: API_HEADERS,
      credentials: 'include',
      body: JSON.stringify(profile)
    }
  },

  current: ()=> {
    return fetch(`${API_URL}/profile/current`, {
      method: 'get',
      headers: API_HEADERS,
      credentials: 'include',
    });
  }
}

export default api
