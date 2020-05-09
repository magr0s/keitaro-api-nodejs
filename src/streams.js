const AbstractApi = require('./abstract-api');

class KeitaroStreamsApi extends AbstractApi {
  list (id) {
    if (!id) throw new Error('Property "id" is undefined.');

    return this.request('GET', ['campaigns', id, 'streams'])
  }
}

module.exports = KeitaroStreamsApi
