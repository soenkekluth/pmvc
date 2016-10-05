

/**
 * @author PureMVC JS Native Port by Sönke Kluth
 * @author Copyright(c) 2006-2012 Futurescale, Inc., Some rights reserved.
 *
 * @class puremvc.Proxy
 * @extends puremvc.Notifier
 *
 * A base Proxy implementation.
 *
 * In PureMVC, Proxy classes are used to manage parts of the application's data
 * model.
 *
 * A Proxy might simply manage a reference to a local data object, in which case
 * interacting with it might involve setting and getting of its data in
 * synchronous fashion.
 *
 * Proxy classes are also used to encapsulate the application's interaction with
 * remote services to save or retrieve data, in which case, we adopt an
 * asyncronous idiom; setting data (or calling a method) on the Proxy and
 * listening for a
 * {@link puremvc.Notification Notification}
 * to be sent  when the Proxy has retrieved the data from the service.
 *
 *
 * @param {string} [proxyName]
 *  The Proxy's name. If none is provided, the Proxy will use its constructors
 *  NAME property.
 * @param {Object} [data]
 *  The Proxy's data object
 * @constructor
 */

import Notifier from '../observer/Notifier';

export default class Proxy extends Notifier {

  /**
   * @ignore
   * The Proxys name.
   *
   * @protected
   * @type String
   */
  proxyName: string = null;

  /**
   * @ignore
   * The Proxy's data object.
   *
   * @protected
   * @type Object
   */
  data: Object = null;


  constructor(proxyName: string, data: Object) {
    super();

    this.proxyName = proxyName || Proxy.NAME;

    if (data) {
      this.setData(data);
    }
  }


  static NAME: string = 'Proxy';


  /**
   * Get the Proxy's name.
   *
   * @return {string}
   */
  getProxyName(): string {
    return this.proxyName;
  }

  /**
   * Set the Proxy's data object
   *
   * @param {Object} data
   * @return {void}
   */
  setData(data): void {
    this.data = data;
  }

  /**
   * Get the Proxy's data object
   *
   * @return {Object}
   */
  getData(): Object {
    return this.data;
  }

  /**
   * Called by the {@link puremvc.Model Model} when
   * the Proxy is registered.
   *
   * @return {void}
   */
  onRegister(): void {
    return;
  }

  /**
   * Called by the {@link puremvc.Model Model} when
   * the Proxy is removed.
   *
   * @return {void}
   */
  onRemove(): void {
    return;
  }
}
