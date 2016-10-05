

/**
 * @author PureMVC JS Native Port by Sönke Kluth
 * @author Copyright(c) 2006-2012 Futurescale, Inc., Some rights reserved.
 *
 * @class puremvc.SimpleCommand
 * @extends puremvc.Notifier
 *
 * SimpleCommands encapsulate the business logic of your application. Your
 * subclass should override the #execute method where your business logic will
 * handle the
 * {@link puremvc.Notification Notification}
 *
 * Take a look at
 * {@link puremvc.Facade#addCommand Facade's addCommand}
 * or {@link puremvc.Controller#addCommand Controllers addCommand}
 * methods to see how to add commands to your application.
 *
 * @constructor
 */

import Notifier from '../observer/Notifier';

export default class SimpleCommand extends Notifier {


  /**
   * Fulfill the use-case initiated by the given Notification
   *
   * In the Command Pattern, an application use-case typically begins with some
   * user action, which results in a Notification is handled by the business logic
   * in the #execute method of a command.
   *
   * @param {puremvc.Notification} notification
   *  The notification to handle.
   * @return {void}
   */
  execute(notification) {}

}
