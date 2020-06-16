import axios from 'axios';

const setAuthToken = (jwtToken) => {
  axios.interceptors.request.use(
    function (config) {
      if (jwtToken) {
        config.headers['authorization'] = 'Bearer ' + jwtToken;
      }
      return config;
    },
    function (err) {
      return Promise.reject(err);
    }
  );
};
export default setAuthToken;
