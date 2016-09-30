/**
 * @author PureMVC JS Native Port by David Foley, Frédéric Saunier, & Alain Duchesneau
 * @author Copyright(c) 2006-2012 Futurescale, Inc., Some rights reserved.
 *
 * @class puremvc.Observer
 *
 * A base Observer implementation.
 *
 * An Observer is an object that encapsulates information
 * about an interested object with a method that should
 * be called when a particular Notification is broadcast.
 *
 * In PureMVC, the Observer class assumes these responsibilities:
 *
 * - Encapsulate the notification (callback) method of the interested object.
 * - Encapsulate the notification context (this) of the interested object.
 * - Provide methods for setting the notification method and context.
 * - Provide a method for notifying the interested object.
 *
 *
 * The notification method on the interested object should take
 * one parameter of type Notification.
 *
 *
 * @param {Function} notifyMethod
 *  the notification method of the interested object
 * @param {Object} notifyContext
 *  the notification context of the interested object
 * @constructor
 */
export default class Observer {

  /**
   * The Observers callback Function
   *
   * @private
   * @type {Function}
   */
  notify = null;

  /**
   * The Observers callback Object
   * @private
   * @type {Object}
   */
  context = null;


  constructor(notifyMethod, notifyContext) {

    this.setNotifyMethod(notifyMethod);
    this.setNotifyContext(notifyContext);
  }

  /**
   * Set the Observers notification method.
   *
   * The notification method should take one parameter of type Notification
   * @param {Function} notifyMethod
   *  the notification (callback) method of the interested object.
   * @return {void}
   */
  setNotifyMethod(notifyMethod) {
    this.notify = notifyMethod;
  }

  /**
   * Set the Observers notification context.
   *
   * @param {Object} notifyContext
   *  the notification context (this) of the interested object.
   *
   * @return {void}
   */
  setNotifyContext(notifyContext) {
    this.context = notifyContext;
  }

  /**
   * Get the Function that this Observer will invoke when it is notified.
   *
   * @private
   * @return {Function}
   */
  getNotifyMethod() {
    return this.notify;
  }

  /**
   * Get the Object that will serve as the Observers callback execution context
   *
   * @private
   * @return {Object}
   */
  getNotifyContext() {
    return this.context;
  }

  /**
   * Notify the interested object.
   *
   * @param {puremvc.Notification} notification
   *  The Notification to pass to the interested objects notification method
   * @return {void}
   */
  notifyObserver(notification) {
    // this.notify.bind(this.context);
    this.notify.call(this.context, notification);
    // console.log(notification);
    // this.getNotifyMethod().apply(this.getNotifyContext(), notification);
  }

  /**
   * Compare an object to this Observers notification context.
   *
   * @param {Object} object
   *
   * @return {boolean}
   */
  compareNotifyContext(object) {
    return object === this.context;
  }

}
