const AbstractApi = require('./abstract-api');

class KeitaroReportsApi extends AbstractApi {
  build (params) {
    return this.request('POST', 'report/build', params)
  }
}

module.exports = KeitaroReportsApi;
