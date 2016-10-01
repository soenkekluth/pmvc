/**
 * @author PureMVC JS Native Port by David Foley, Frédéric Saunier, & Alain Duchesneau
 * @author Copyright(c) 2006-2012 Futurescale, Inc., Some rights reserved.
 *
 * @class puremvc.Notifier
 *
 * A Base Notifier implementation.
 *
 * {@link puremvc.MacroCommand MacroCommand},
 * {@link puremvc.SimpleCommand SimpleCommand},
 * {@link puremvc.Mediator Mediator} and
 * {@link puremvc.Proxy Proxy}
 * all have a need to send Notifications
 *
 * The Notifier interface provides a common method called #sendNotification that
 * relieves implementation code of the necessity to actually construct
 * Notifications.
 *
 * The Notifier class, which all of the above mentioned classes
 * extend, provides an initialized reference to the
 * {@link puremvc.Facade Facade}
 * Multiton, which is required for the convienience method
 * for sending Notifications but also eases implementation as these
 * classes have frequent
 * {@link puremvc.Facade Facade} interactions
 * and usually require access to the facade anyway.
 *
 * NOTE: In the MultiCore version of the framework, there is one caveat to
 * notifiers, they cannot send notifications or reach the facade until they
 * have a valid multitonKey.
 *
 * The multitonKey is set:
 *   - on a Command when it is executed by the Controller
 *   - on a Mediator is registered with the View
 *   - on a Proxy is registered with the Model.
 *
 * @constructor
 */

import Facade from '../facade/Facade';

export default class Notifier {

  /**
   * @protected
   * A reference to this Notifier's Facade. This reference will not be available
   * until #initializeNotifier has been called.
   *
   * @type {puremvc.Facade}
   */
  facade: Facade;

  /**
   * @ignore
   * The Notifiers internal multiton key.
   *
   * @protected
   * @type string
   */
  multitonKey: string;


    /**
     * Create and send a Notification.
     *
     * Keeps us from having to construct new Notification instances in our
     * implementation code.
     *
     * @param {string} notificationName
     *  A notification name
     * @param {Object} [body]
     *  The body of the notification
     * @param {string} [type]
     *  The notification type
     * @return {void}
     */
  sendNotification(notificationName: string, body: any, type: any): void {
    const facade: Facade = this.getFacade();
    if (facade) {
      facade.sendNotification(notificationName, body, type);
    }
  }


  /**
   * Initialize this Notifier instance.
   *
   * This is how a Notifier gets its multitonKey.
   * Calls to #sendNotification or to access the
   * facade will fail until after this method
   * has been called.
   *
   * Mediators, Commands or Proxies may override
   * this method in order to send notifications
   * or access the Multiton Facade instance as
   * soon as possible. They CANNOT access the facade
   * in their constructors, since this method will not
   * yet have been called.
   *
   *
   * @param {string} key
   *  The Notifiers multiton key;
   * @return {void}
   */
  initializeNotifier(key: string): void {
    this.multitonKey = key;
    this.facade = this.getFacade();
  }

  /**
   * Retrieve the Multiton Facade instance
   *
   *
   * @protected
   * @return {puremvc.Facade}
   */
  getFacade(): Facade {
    if (!this.multitonKey) {
      throw new Error(Notifier.MULTITON_MSG);
    }

    return Facade.getInstance(this.multitonKey);
  }


  /**
   * @ignore
   * The error message used if the Notifier is not initialized correctly and
   * attempts to retrieve its own multiton key
   *
   * @static
   * @protected
   * @const
   * @type string
   */
  static MULTITON_MSG: string = 'multitonKey for this Notifier not yet initialized!';

}
