"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default=undefined;var _Notifier2=require("../observer/Notifier");var _Notifier3=_interopRequireDefault(_Notifier2);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _defaults(obj,defaults){var keys=Object.getOwnPropertyNames(defaults);for(var i=0;i<keys.length;i++){var key=keys[i];var value=Object.getOwnPropertyDescriptor(defaults,key);if(value&&value.configurable&&obj[key]===undefined){Object.defineProperty(obj,key,value)}}return obj}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return call&&(typeof call==="object"||typeof call==="function")?call:self}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass)}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):_defaults(subClass,superClass)}/**
 * @author PureMVC JS Native Port by David Foley, Frédéric Saunier, & Alain Duchesneau
 * @author Copyright(c) 2006-2012 Futurescale, Inc., Some rights reserved.
 *
 * @class puremvc.Mediator
 * @extends puremvc.Notifier
 *
 * A base Mediator implementation.
 *
 * In PureMVC, Mediator classes are used to mediate communication between a view
 * component and the rest of the application.
 *
 * A Mediator should listen to its view components for events, and handle them
 * by sending notifications (to be handled by other Mediators,
 * {@link puremvc.SimpleCommand SimpleCommands}
 * or
 * {@link puremvc.MacroCommand MacroCommands})
 * or passing data from the view component directly to a
 * {@link puremvc.Proxy Proxy}, such as submitting
 * the contents of a form to a service.
 *
 * Mediators should not perform business logic, maintain state or other
 * information for its view component, or break the encapsulation of the view
 * component by manipulating the view component's children. It should only call
 * methods or set properties on the view component.
 *
 * The view component should encapsulate its own behavior and implementation by
 * exposing methods and properties that the Mediator can call without having to
 * know about the view component's children.
 *
 * @constructor
 * @param {string} [mediatorName]
 *  The Mediators name. The Mediators static #NAME value is used by default
 * @param {Object} [viewComponent]
 *  The Mediators {@link #setViewComponent viewComponent}.
 */var Mediator=function(_Notifier){_inherits(Mediator,_Notifier);function Mediator(mediatorName,viewComponent){_classCallCheck(this,Mediator);var _this=_possibleConstructorReturn(this,_Notifier.call(this));_this.mediatorName=mediatorName||Mediator.NAME;// this.constructor.NAME;
_this.viewComponent=viewComponent;return _this}/**
   * @static
   * The name of the Mediator.
   *
   * Typically, a Mediator will be written to serve one specific control or group
   * of controls and so, will not have a need to be dynamically named.
   *
   * @type {string}
   *//**
   * Get the name of the Mediator
   *
   * @return {string}
   *  The Mediator name
   */Mediator.prototype.getMediatorName=function getMediatorName(){return this.mediatorName};/**
   * Set the Mediators view component. This could
   * be a HTMLElement, a bespoke UiComponent wrapper
   * class, a MooTools Element, a jQuery result or a
   * css selector, depending on which DOM abstraction
   * library you are using.
   *
   *
   * @param {Object} the view component
   * @return {void}
   */Mediator.prototype.setViewComponent=function setViewComponent(viewComponent){this.viewComponent=viewComponent};/**
   * Get the Mediators view component.
   *
   * Additionally, an optional explicit getter can be
   * be defined in the subclass that defines the
   * view components, providing a more semantic interface
   * to the Mediator.
   *
   * This is different from the AS3 implementation in
   * the sense that no casting is required from the
   * object supplied as the view component.
   *
   *     MygetComboBox ()
   *     {
   *         return this.viewComponent;
   *     }
   *
   * @return {Object}
   *  The view component
   */Mediator.prototype.getViewComponent=function getViewComponent(){return this.viewComponent};/**
   * List the Notification names this Mediator is interested
   * in being notified of.
   *
   * @return {Array}
   *  The list of Notification names.
   */Mediator.prototype.listNotificationInterests=function listNotificationInterests(){return[]};/**
   * Handle Notifications.
   *
   * Typically this will be handled in a switch statement
   * with one 'case' entry per Notification the Mediator
   * is interested in
   *
   * @param {puremvc.Notification} notification
   * @return {void}
   */Mediator.prototype.handleNotification=function handleNotification(notification){return};/**
   * Called by the View when the Mediator is registered
   * @return {void}
   */Mediator.prototype.onRegister=function onRegister(){return};/**
   * Called by the View when the Mediator is removed
   */Mediator.prototype.onRemove=function onRemove(){return};return Mediator}(_Notifier3.default);Mediator.NAME="Mediator";exports.default=Mediator;module.exports=exports["default"];