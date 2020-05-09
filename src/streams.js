const AbstractApi = require('./abstract-api');

class KeitaroStreamsApi extends AbstractApi {
  list (id) {
    if (!id || typeof (id) !== 'string') throw new Error('Property "id" is undefined or not type string.');

    return this.request('GET', ['campaigns', id, 'streams'])
  }
}

module.exports = KeitaroStreamsApi
