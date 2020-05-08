/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

var Resource = require('../resource');
const AppUserCredentials = require('./AppUserCredentials');

/**
 * @class AppUser
 * @extends Resource
 * @property { hash } _embedded
 * @property { hash } _links
 * @property { dateTime } created
 * @property { AppUserCredentials } credentials
 * @property { string } externalId
 * @property { string } id
 * @property { dateTime } lastSync
 * @property { dateTime } lastUpdated
 * @property { dateTime } passwordChanged
 * @property { hash } profile
 * @property { string } scope
 * @property { string } status
 * @property { dateTime } statusChanged
 * @property { string } syncState
 */
class AppUser extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.credentials) {
      this.credentials = new AppUserCredentials(this.credentials);
    }
  }

  /**
   * @param {string} appId
   * @returns {Promise<AppUser>}
   */
  update(appId) {
    return this.client.updateApplicationUser(appId, this.id, this);
  }
  /**
   * @param {string} appId
   * @param {object} queryParameters
   */
  delete(appId, queryParameters) {
    return this.client.deleteApplicationUser(appId, this.id, queryParameters);
  }
}

module.exports = AppUser;
