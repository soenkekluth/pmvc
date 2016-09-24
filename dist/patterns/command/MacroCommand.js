'use strict';Object.defineProperty(exports,'__esModule',{value:true});exports.default=undefined;var _Notifier2=require('../observer/Notifier');var _Notifier3=_interopRequireDefault(_Notifier2);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _defaults(obj,defaults){var keys=Object.getOwnPropertyNames(defaults);for(var i=0;i<keys.length;i++){var key=keys[i];var value=Object.getOwnPropertyDescriptor(defaults,key);if(value&&value.configurable&&obj[key]===undefined){Object.defineProperty(obj,key,value)}}return obj}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError('Cannot call a class as a function')}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called')}return call&&(typeof call==='object'||typeof call==='function')?call:self}function _inherits(subClass,superClass){if(typeof superClass!=='function'&&superClass!==null){throw new TypeError('Super expression must either be null or a function, not '+typeof superClass)}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):_defaults(subClass,superClass)}/**
 * @author PureMVC JS Native Port by David Foley, Frédéric Saunier, & Alain Duchesneau
 * @author Copyright(c) 2006-2012 Futurescale, Inc., Some rights reserved.
 *
 * @class puremvc.MacroCommand
 * @extends puremvc.Notifier
 *
 * A base command implementation that executes other commands, such as
 * {@link puremvc.SimpleCommand SimpleCommand}
 * or {@link puremvc.MacroCommand MacroCommand}
 * subclasses.
 *
 * A MacroCommand maintains an list of
 * command constructor references called *SubCommands*.
 *
 * When #execute is called, the MacroCommand
 * instantiates and calls #execute on each of its *SubCommands* in turn.
 * Each *SubCommand* will be passed a reference to the original
 * {@link puremvc.Notification Notification}
 * that was passed to the MacroCommands #execute method
 *
 * Unlike {@link puremvc.SimpleCommand SimpleCommand},
 * your subclass should not override #execute but instead, should
 * override the #initializeMacroCommand method, calling #addSubCommand once for
 * each *SubCommand* to be executed.
 *
 * If your subclass does define a constructor, be sure to call "super" like so
 *
 *     function MyMacroCommand ()
 *     {
 *         MacroCommand.call(this);
 *     };
 * @constructor
 */var MacroCommand=function(_Notifier){_inherits(MacroCommand,_Notifier);function MacroCommand(){_classCallCheck(this,MacroCommand);/**
     * @private
     * @type {Array.<puremvc.SimpleCommand|puremvc.MacroCommand>}
     */var _this=_possibleConstructorReturn(this,_Notifier.call(this));_this.subCommands=[];_this.initializeMacroCommand();return _this}/**
   * @protected
   * Initialize the MacroCommand.
   *
   * In your subclass, override this method to
   * initialize the MacroCommand's *SubCommand*
   * list with command class references like
   * this:
   *
   *     // Initialize MyMacroCommand
   *     MyinitializeMacroCommand ()
   *     {
   *         this.addSubCommand( com.me.myapp.controller.FirstCommand );
   *         this.addSubCommand( com.me.myapp.controller.SecondCommand );
   *         this.addSubCommand( com.me.myapp.controller.ThirdCommand );
   *     };
   *
   * Note that *SubCommand*s may be any command implementor,
   * MacroCommands or SimpleCommands are both acceptable.
   * @return {void}
   */MacroCommand.prototype.initializeMacroCommand=function initializeMacroCommand(){};/**
   * @protected
   * Add a *SubCommand*
   *
   * The *SubCommand*s will be called in First In / First Out (FIFO) order
   * @param {Function} commandClassRef
   *  A reference to a subclassed SimpleCommand or MacroCommand constructor
   */MacroCommand.prototype.addSubCommand=function addSubCommand(commandClassRef){this.subCommands.push(commandClassRef)};/**
   * Execute this MacroCommands *SubCommands*
   *
   * The *SubCommand*s will be called in First In / First Out (FIFO) order
   * @param {puremvc.Notification} note
   *  The Notification object to be passed to each *SubCommand*
   */MacroCommand.prototype.execute=function execute(note){// SIC- TODO optimize
while(this.subCommands.length>0){var ref=this.subCommands.shift();var cmd=new ref;cmd.initializeNotifier(this.multitonKey);cmd.execute(note)}};return MacroCommand}(_Notifier3.default);exports.default=MacroCommand;module.exports=exports['default'];