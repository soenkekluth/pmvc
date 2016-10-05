

/**
 * @author PureMVC JS Native Port by Sönke Kluth
 * @author Copyright(c) 2006-2012 Futurescale, Inc., Some rights reserved.
 *
 * @class puremvc.Notification
 *
 * A base Notification implementation.
 *
 * PureMVC does not rely upon underlying event models such as the one provided
 * with the DOM or other browser centric W3C event models.
 *
 * The Observer Pattern as implemented within PureMVC exists to support
 * event-driven communication between the application and the actors of the MVC
 * triad.
 *
 * Notifications are not meant to be a replacement for events in the browser.
 * Generally, Mediator implementors place event listeners on their view
 * components, which they then handle in the usual way. This may lead to the
 * broadcast of Notifications to trigger commands or to communicate with other
 * Mediators. {@link puremvc.Proxy Proxy},
 * {@link puremvc.SimpleCommand SimpleCommand}
 * and {@link puremvc.MacroCommand MacroCommand}
 * instances communicate with each other and
 * {@link puremvc.Mediator Mediator}s
 * by broadcasting Notifications.
 *
 * A key difference between browser events and PureMVC Notifications is that
 * events follow the 'Chain of Responsibility' pattern, 'bubbling' up the
 * display hierarchy until some parent component handles the event, while
 * PureMVC Notification follow a 'Publish/Subscribe' pattern. PureMVC classes
 * need not be related to each other in a parent/child relationship in order to
 * communicate with one another using Notifications.
 *
 * @constructor
 * @param {string} name
 *  The Notification name
 * @param {Object} [body]
 *  The Notification body
 * @param {Object} [type]
 *  The Notification type
 */
export default class Notification {

  name: string = null;
  body: any = null;
  type: any = null;

  constructor(name: string, body: any, type: any) {
    this.name = name;
    this.body = body;
    this.type = type;
  }

  /**
   * Get the name of the Notification instance
   *
   * @return {string}
   *  The name of the Notification instance
   */
  getName(): string {
    return this.name;
  }

  /**
   * Set this Notifications body.
   * @param {Object} body
   * @return {void}
   */
  setBody(body): void {
    this.body = body;
  }

  /**
   * Get the Notification body.
   *
   * @return {Object}
   */
  getBody(): any {
    return this.body;
  }

  /**
   * Set the type of the Notification instance.
   *
   * @param {Object} type
   * @return {void}
   */
  setType(type: any) {
    this.type = type;
  }

  /**
   * Get the type of the Notification instance.
   *
   * @return {Object}
   */
  getType(): any {
    return this.type;
  }

  /**
   * Get a string representation of the Notification instance
   *
   * @return {string}
   */
  toString(): string {
    let msg = `Notification Name: ${this.getName()}`;
    msg += `\nBody:${(this.body === null) ? 'null' : this.body.toString()}`;
    msg += `\nType:${(this.type === null) ? 'null' : this.type}`;
    return msg;
  }

}
