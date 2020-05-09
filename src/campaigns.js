const AbstractApi = require('./abstract-api');

class KeitaroCampaignsApi extends AbstractApi {
  list () {
    return this.request('GET', 'campaigns');
  }

  create (params) {
    const {
      alias,
      name,
    } = params;

    if (!alias) throw new Error('Alias is required.');
    if (!name) throw new Error('Name is required.');

    return this.request('POST', 'campaigns', params);
  }

  get (id) {
    if (!id) throw new Error('Campaign ID is required.');

    return this.request('GET', ['campaigns', id]);
  }

  update (id, params) {
    if (!id) throw new Error('Campaign ID is required.');

    return this.request('PUT', ['campaigns', id], params);
  }

  move (id) {
    if (!id) throw new Error('Campaign ID is required.');

    return this.request('DELETE', ['campaigns', id]);
  }

  clone (id) {
    if (!id) throw new Error('Campaign ID is required.');

    return this.request('POST', ['campaigns', id, 'clone']);
  }

  disable (id) {
    if (!id) throw new Error('Campaign ID is required.');

    return this.request('POST', ['campaigns', id, 'disable']);
  }

  enable (id) {
    if (!id) throw new Error('Campaign ID is required.');

    return this.request('POST', ['campaigns', id, 'enable']);
  }

  restore (id) {
    if (!id) throw new Error('Campaign ID is required.');

    return this.request('POST', ['campaigns', id, 'restore']);
  }

  updateCosts (id, params) {
    const {
      start_date: startDate,
      end_date: endDate,
      timezone,
      cost,
      currency,
    } = params;

    if (!id) throw new Error('Campaign ID is required.');
    if (typeof (startDate) !== 'string' || Number.isNaN(Date.parse(startDate))) throw new Error('Start date is wrong.');
    if (typeof (endDate) !== 'string' || Number.isNaN(Date.parse(endDate))) throw new Error('End date is wrong.');
    if (!timezone) throw new Error('Timezone is required.');
    if (!cost) throw new Error('Cost is required.');
    if (!currency) throw new Error('Currency is required.');

    return this.request('POST', ['campaigns', id, 'update_costs'], params);
  }

  listDeleted () {
    return this.request('GET', ['campaigns', 'deleted']);
  }
}

module.exports = KeitaroCampaignsApi;
