'use strict';Object.defineProperty(exports,'__esModule',{value:true});exports.default=undefined;var _Notifier2=require('../observer/Notifier');var _Notifier3=_interopRequireDefault(_Notifier2);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _defaults(obj,defaults){var keys=Object.getOwnPropertyNames(defaults);for(var i=0;i<keys.length;i++){var key=keys[i];var value=Object.getOwnPropertyDescriptor(defaults,key);if(value&&value.configurable&&obj[key]===undefined){Object.defineProperty(obj,key,value)}}return obj}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError('Cannot call a class as a function')}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called')}return call&&(typeof call==='object'||typeof call==='function')?call:self}function _inherits(subClass,superClass){if(typeof superClass!=='function'&&superClass!==null){throw new TypeError('Super expression must either be null or a function, not '+typeof superClass)}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):_defaults(subClass,superClass)}/**
 * @author PureMVC JS Native Port by David Foley, Frédéric Saunier, & Alain Duchesneau
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
 * {@link puremvc.Facade#registerCommand Facade's registerCommand}
 * or {@link puremvc.Controller#registerCommand Controllers registerCommand}
 * methods to see how to add commands to your application.
 *
 * @constructor
 */var SimpleCommand=function(_Notifier){_inherits(SimpleCommand,_Notifier);function SimpleCommand(){_classCallCheck(this,SimpleCommand);return _possibleConstructorReturn(this,_Notifier.apply(this,arguments))}/**
   * Fulfill the use-case initiated by the given Notification
   *
   * In the Command Pattern, an application use-case typically begins with some
   * user action, which results in a Notification is handled by the business logic
   * in the #execute method of a command.
   *
   * @param {puremvc.Notification} notification
   *  The notification to handle.
   * @return {void}
   */SimpleCommand.prototype.execute=function execute(notification){};return SimpleCommand}(_Notifier3.default);exports.default=SimpleCommand;module.exports=exports['default'];