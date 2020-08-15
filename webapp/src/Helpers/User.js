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
        const {data} = await Axios.post('http://localhost:3000/usuarios/login', {
          usuario: username,
          clave: password,
        });
        if (data.token) {
          resolve(data);
        } else {
          reject(data.message);
        }
      } catch (error) {
        console.error('Backend not available');
        reject(error);
      }
    });
  }
}

export default User;
