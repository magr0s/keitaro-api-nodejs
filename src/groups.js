const AbstractApi = require('./abstract-api');

class KeitaroGroupsApi extends AbstractApi {
  list (type) {
    if (!type || typeof (type) !== 'string') throw new Error('Wrong "type" property.');

    return this.request('GET', 'groups', { type });
  }
}

module.exports = KeitaroGroupsApi;
