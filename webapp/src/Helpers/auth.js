import Axios from 'axios';
const TOKEN_KEY = 'ivum_token';

export const setToken = token => {
  return localStorage.setItem(TOKEN_KEY, token);
};

export const getToken = () => {
  return localStorage.getItem(TOKEN_KEY);
};

export const deleteToken = () => {
  return localStorage.removeItem(TOKEN_KEY);
};

export const authSessionClient = async () => {
  if (sessionStorage.getItem('ivum_user')) {
    let user = JSON.parse(sessionStorage.getItem('ivum_user'));
    try {
      let res = await Axios.get(`http://localhost:3000/usuarios/${user.id}`, {
        headers: { token: getToken() },
      });
      return res;
    } catch (error) {
      console.error(error);
    }
  }
};

export const AxiosInterceptors = () => {
  Axios.interceptors.request.use(
    config => {
      const token = getToken();

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    error => {
      return Promise.reject(error);
    }
  );

  Axios.interceptors.response.use(
    response => {
      return response;
    },
    error => {
      console.error(error);
    }
  );
};
