const axios = require('axios');
const { API_ENDPOINT } = require('./config.json');

class AbstractApi {
  constructor (url, token) {
    if (!url) throw new Error ('Property "url" is undefined.');
    if (!token) throw new Error ('Property "token" is undefined.');

    this.url = url
    this.token = token
  }

  request(method, path, params) {
    const url = [
      this.url,
      API_ENDPOINT,
      ...(typeof (path) !== 'string' ? path : [path])
    ];

    const options = {
      url: url.join('/'),
      method,
    };

    if (method === 'POST' || method === 'PUT') {
      options.data = params;
    } else {
      options.params = params;
    }

    options.headers = {
      'Api-Key': this.token,
    };

    return axios(options)
      .then(({ data }) => (data));
  }
}

module.exports = AbstractApi;
