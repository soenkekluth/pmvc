

/**
 * @author PureMVC JS Native Port by Sönke Kluth
 * @author Copyright(c) 2006-2012 Futurescale, Inc., Some rights reserved.
 *
 * @class puremvc.Model
 *
 * A Multiton Model implementation.
 *
 * In PureMVC, the Model class provides
 * access to model objects (Proxies) by named lookup.
 *
 * The Model assumes these responsibilities:
 *
 * - Maintain a cache of {@link puremvc.Proxy Proxy}
 *   instances.
 * - Provide methods for registering, retrieving, and removing
 *   {@link puremvc.Proxy Proxy} instances.
 *
 * Your application must register
 * {@link puremvc.Proxy Proxy} instances with the Model.
 * Typically, you use a
 * {@link puremvc.SimpleCommand SimpleCommand}
 * or
 * {@link puremvc.MacroCommand MacroCommand}
 * to create and register Proxy instances once the Facade has initialized the
 * *Core* actors.
 *
 * This Model implementation is a Multiton, so you should not call the
 * constructor directly, but instead call the
 * {@link #getInstance static Multiton Factory method}
 * @constructor
 * @param {string} key
 *  The Models multiton key
 * @throws {Error}
 *  An error is thrown if this multitons key is already in use by another instance
 */

import Proxy from '../patterns/proxy/Proxy';

export default class Model {

  /**
   * @ignore
   * The map used by the Model to store Proxy instances.
   *
   * @protected
   * @type Array
   */
  proxyMap: Object = {};


  /**
   * @ignore
   * The Models multiton key.
   *
   * @protected
   * @type string
   */
  multitonKey: string = '';


  constructor(key: string) {
    if (Model.instanceMap[key]) {
      throw new Error(Model.MULTITON_MSG);
    }


    /**
     * @ignore
     * The Models multiton key.
     *
     * @protected
     * @type string
     */
    this.multitonKey = key;
    Model.instanceMap[key] = this;

    this.initializeModel();
  }

  /**
   * Initialize the Model instance.
   *
   * Called automatically by the constructor, this
   * is your opportunity to initialize the Singleton
   * instance in your subclass without overriding the
   * constructor.
   *
   * @return void
   */
  initializeModel(): void {}


  /**
   * Model Multiton Factory method.
   * Note that this method will return null if supplied a null
   * or undefined multiton key.
   *
   * @param {string} key
   *  The multiton key for the Model to retrieve
   * @return {puremvc.Model}
   *  the instance for this Multiton key
   */
  static getInstance(key: string): Model {
    if (!key) {
      return null;
    }
    if (!Model.instanceMap[key]) {
      return new Model(key);
    }

    return Model.instanceMap[key];
  }

  /**
   * Register a Proxy with the Model
   * @param {puremvc.Proxy}
   */
  registerProxy(proxy: Proxy): void {
    proxy.initializeNotifier(this.multitonKey);
    this.proxyMap[proxy.getProxyName()] = proxy;
    proxy.onRegister();
  }

  /**
   * Retrieve a Proxy from the Model
   *
   * @param {string} proxyName
   * @return {puremvc.Proxy}
   *  The Proxy instance previously registered with the provided proxyName
   */
  retrieveProxy(proxyName: string): Proxy {
    return this.proxyMap[proxyName];
  }

  /**
   * Check if a Proxy is registered
   * @param {string} proxyName
   * @return {boolean}
   *  whether a Proxy is currently registered with the given proxyName.
   */
  hasProxy(proxyName: string): boolean {
    return !!this.proxyMap[proxyName];
  }

  /**
   * Remove a Proxy from the Model.
   *
   * @param {string} proxyName
   *  The name of the Proxy instance to remove
   * @return {puremvc.Proxy}
   *  The Proxy that was removed from the Model
   */
  removeProxy(proxyName: string): Proxy {
    const proxy = this.proxyMap[proxyName];
    if (proxy) {
      delete this.proxyMap[proxyName];
      proxy.onRemove();
    }

    return proxy;
  }

  /**
   * @static
   * Remove a Model instance.
   *
   * @param {string} key
   * @return {void}
   */
  static removeModel(key: string): void {
    delete Model.instanceMap[key];
  }


  /**
   * @ignore
   * The map used by the Model to store multiton instances
   *
   * @protected
   * @static
   * @type Array
   */
  static instanceMap: Object = {};


  /**
   * @ignore
   * Message Constants
   *
   * @static
   * @type {string}
   */
  static MULTITON_MSG: string = 'Model instance for this Multiton key already constructed!';

}
