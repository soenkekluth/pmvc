'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Notification = require('../../patterns/observer/Notification');

var _Notification2 = _interopRequireDefault(_Notification);

var _Controller = require('../../core/Controller');

var _Controller2 = _interopRequireDefault(_Controller);

var _Model = require('../../core/Model');

var _Model2 = _interopRequireDefault(_Model);

var _View = require('../../core/View');

var _View2 = _interopRequireDefault(_View);

var _Mediator = require('../../patterns/mediator/Mediator');

var _Mediator2 = _interopRequireDefault(_Mediator);

var _Proxy = require('../../patterns/proxy/Proxy');

var _Proxy2 = _interopRequireDefault(_Proxy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Facade = function () {
  function Facade(key) {
    _classCallCheck(this, Facade);

    this.controller = null;
    this.model = null;
    this.view = null;
    this.multitonKey = null;

    if (Facade.instanceMap[key]) {
      throw new Error(Facade.MULTITON_MSG);
    }

    Facade.instanceMap[key] = this;
    this.initializeNotifier(key);
    this.initializeFacade();
  }

  Facade.prototype.initializeFacade = function initializeFacade() {
    this.initializeModel();
    this.initializeController();
    this.initializeView();
  };

  Facade.getInstance = function getInstance(key) {
    if (!key) {
      return null;
    }

    if (!Facade.instanceMap[key]) {
      return new Facade(key);
    }

    return Facade.instanceMap[key];
  };

  Facade.prototype.initializeController = function initializeController() {
    if (this.controller) {
      return;
    }
    this.controller = _Controller2.default.getInstance(this.multitonKey);
  };

  Facade.prototype.initializeModel = function initializeModel() {
    if (this.model) {
      return;
    }

    this.model = _Model2.default.getInstance(this.multitonKey);
  };

  Facade.prototype.initializeView = function initializeView() {
    if (this.view) {
      return;
    }

    this.view = _View2.default.getInstance(this.multitonKey);
  };

  Facade.prototype.addCommand = function addCommand(notificationName, CommandClassRef) {
    this.controller.addCommand(notificationName, CommandClassRef);
  };

  Facade.prototype.removeCommand = function removeCommand(notificationName) {
    this.controller.removeCommand(notificationName);
  };

  Facade.prototype.hasCommand = function hasCommand(notificationName) {
    return this.controller.hasCommand(notificationName);
  };

  Facade.prototype.addProxy = function addProxy(proxy) {
    this.model.addProxy(proxy);
  };

  Facade.prototype.getProxy = function getProxy(proxyName) {
    return this.model.getProxy(proxyName);
  };

  Facade.prototype.removeProxy = function removeProxy(proxyName) {
    var proxy = null;
    if (this.model) {
      proxy = this.model.removeProxy(proxyName);
    }

    return proxy;
  };

  Facade.prototype.hasProxy = function hasProxy(proxyName) {
    return this.model.hasProxy(proxyName);
  };

  Facade.prototype.addMediator = function addMediator(mediator) {
    if (this.view) {
      this.view.addMediator(mediator);
    }
  };

  Facade.prototype.getMediator = function getMediator(mediatorName) {
    return this.view.getMediator(mediatorName);
  };

  Facade.prototype.removeMediator = function removeMediator(mediatorName) {
    var mediator = null;
    if (this.view) {
      mediator = this.view.removeMediator(mediatorName);
    }

    return mediator;
  };

  Facade.prototype.hasMediator = function hasMediator(mediatorName) {
    return this.view.hasMediator(mediatorName);
  };

  Facade.prototype.sendNotification = function sendNotification(notificationName, body, type) {
    var n = new _Notification2.default(notificationName, body, type);
    this.notifyObservers(n);
  };

  Facade.prototype.send = function send(notificationName, body, type) {
    this.sendNotification(notificationName, body, type);
  };

  Facade.prototype.notifyObservers = function notifyObservers(notification) {
    if (this.view) {
      this.view.notifyObservers(notification);
    }
  };

  Facade.prototype.initializeNotifier = function initializeNotifier(key) {
    this.multitonKey = key;
  };

  Facade.hasCore = function hasCore(key) {
    return !!Facade.instanceMap[key];
  };

  Facade.removeCore = function removeCore(key) {
    if (!Facade.instanceMap[key]) {
      return;
    }

    _Model2.default.removeModel(key);
    _View2.default.removeView(key);
    _Controller2.default.removeController(key);
    delete Facade.instanceMap[key];
  };

  return Facade;
}();

Facade.instanceMap = {};
Facade.MULTITON_MSG = 'Facade instance for this Multiton key already constructed!';
exports.default = Facade;
module.exports = exports['default'];