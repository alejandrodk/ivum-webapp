import Axios from 'axios';

/**
 * This class manage de access and validation for
 * users
 * @class User
 */
class User {
  /**
   * Validate username and password and return access token
   * @param {String} username
   * @param {String} password
   * @return {String} Return valid token
   */
  static validateUser(username, password) {
    return new Promise(async (resolve, reject) => {
      try {
        const { data } = await Axios.post('http://localhost:3000/usuarios/login', {
          usuario: username,
          clave: password,
        });
        if (data.token) {
          resolve(data);
        } else {
          resolve(null);
        }
      } catch (error) {
        console.error('Backend not available');
        reject(error);
      }
    });
  }
  /**
   * get User info from localStorage
   * @return {Object}
   */
  static getUserFromStorage() {
    const stored = JSON.parse(localStorage.getItem('user_IVUM'));
    return stored
      ? stored
      : {
          id: null,
          tipo: 'guest',
          cedula: null,
          token: null,
        };
  }
  /**
   * Save user data in LocalStorage
   * @param {Object} data user data response from validateUser
   */
  static saveUserInStorage(data) {
    if (data) {
      const { user, token } = data;
      localStorage.setItem(
        'user_IVUM',
        JSON.stringify({
          id: user.id,
          tipo: user.tipo,
          cedula: user.cedula,
          token,
        })
      );
      Axios.defaults.headers.common = {
        token: token,
      };
    }
  }
  /**
   * Validate token from user (async)
   * @param {Object} user User object from App Context
   * @return {Bool} True or False
   */
  static async validateSessionToken(user) {
    try {
      const { data } = await Axios.get(`http://localhost:3000/usuarios/${user.id}`, {
        headers: { token: user.token },
      });
      if (data.usuario) {
        return true;
      }
      return false;
    } catch (error) {
      console.error({
        message: 'Error validation user token',
        error,
      });
      return false;
    }
  }

  /**
   * Logout handler
   * @param {Function} callback setUser function from App context
   */
  static closeUserSession(callback) {
    localStorage.removeItem('user_IVUM');
    callback(null);
  }
}

export default User;
