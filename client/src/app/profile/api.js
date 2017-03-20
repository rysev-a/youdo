import settings from 'app/settings';
import {editSerializer} from './serializers';


const {API_URL, API_HEADERS} = settings;
const baseUrl = `${API_URL}/parsers`;

const api = {
  login: (profile)=> {
    return fetch(`${API_URL}/profile/login`, {
      method: 'post',
      headers: API_HEADERS,
      credentials: 'include',
      body: JSON.stringify(profile)
    });
  },

  register: (profile)=> {
    return fetch(`${API_URL}/profile/register`, {
      method: 'post',
      headers: API_HEADERS,
      credentials: 'include',
      body: JSON.stringify(profile)
    });
  },

  current: ()=> {
    return fetch(`${API_URL}/profile/current`, {
      method: 'get',
      headers: API_HEADERS,
      credentials: 'include',
    });
  },

  logout: ()=> {
    return fetch(`${API_URL}/profile/logout`, {
      method: 'post',
      headers: API_HEADERS,
      credentials: 'include'
    });
  },

  edit: (profile)=> {
    return fetch(`${API_URL}/profile/edit`, {
      method: 'post',
      headers: API_HEADERS,
      credentials: 'include',
      body: JSON.stringify(editSerializer(profile))
    })
  }
}

export default api
