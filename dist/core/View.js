'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Notification = require('../patterns/observer/Notification');

var _Notification2 = _interopRequireDefault(_Notification);

var _Observer = require('../patterns/observer/Observer');

var _Observer2 = _interopRequireDefault(_Observer);

var _Notifier = require('../patterns/observer/Notifier');

var _Notifier2 = _interopRequireDefault(_Notifier);

var _Mediator = require('../patterns/mediator/Mediator');

var _Mediator2 = _interopRequireDefault(_Mediator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var View = function () {
  View.removeView = function removeView(key) {
    delete View.instanceMap[key];
  };

  function View(key) {
    _classCallCheck(this, View);

    this.mediatorMap = {};
    this.observerMap = {};
    this.multitonKey = '';

    if (View.instanceMap[key]) {
      throw new Error(View.MULTITON_MSG);
    }

    this.multitonKey = key;
    View.instanceMap[this.multitonKey] = this;
    this.initializeView();
  }

  View.prototype.initializeView = function initializeView() {};

  View.getInstance = function getInstance(key) {
    if (!key) {
      return null;
    }

    if (!View.instanceMap[key]) {
      return new View(key);
    }

    return View.instanceMap[key];
  };

  View.prototype.registerObserver = function registerObserver(notificationName, observer) {
    if (!this.observerMap[notificationName]) {
      this.observerMap[notificationName] = [];
    }
    this.observerMap[notificationName].push(observer);
  };

  View.prototype.notifyObservers = function notifyObservers(notification) {
    var observerArray = this.observerMap[notification.getName()] || [];
    if (observerArray.length) {

      var i = 0;
      for (i = 0; i < observerArray.length; i++) {
        var observer = observerArray[i];
        observer.notifyObserver(notification);
      }
    }
  };

  View.prototype.removeObserver = function removeObserver(notificationName, notifyContext) {
    var observers = this.observerMap[notificationName];
    for (var i = 0; i < observers.length; i++) {
      if (observers[i].compareNotifyContext(notifyContext) === true) {
        observers.splice(i, 1);
        break;
      }
    }

    if (observers.length === 0) {
      delete this.observerMap[notificationName];
    }
  };

  View.prototype.registerMediator = function registerMediator(mediator) {
    if (this.mediatorMap[mediator.getMediatorName()]) {
      return;
    }

    mediator.initializeNotifier(this.multitonKey);

    this.mediatorMap[mediator.getMediatorName()] = mediator;

    var interests = mediator.listNotificationInterests();

    if (interests.length) {
      var observer = new _Observer2.default(mediator.handleNotification, mediator);
      for (var i = 0; i < interests.length; i++) {
        this.registerObserver(interests[i], observer);
      }
    }

    mediator.onRegister();
  };

  View.prototype.retrieveMediator = function retrieveMediator(mediatorName) {
    return this.mediatorMap[mediatorName];
  };

  View.prototype.removeMediator = function removeMediator(mediatorName) {
    var mediator = this.retrieveMediator(mediatorName);
    if (mediator) {
      var interests = mediator.listNotificationInterests();
      for (var i = 0; i < interests.length; i++) {
        this.removeObserver(interests[i], mediator);
      }

      delete this.mediatorMap[mediatorName];

      mediator.onRemove();
    }

    return mediator;
  };

  View.prototype.hasMediator = function hasMediator(mediatorName) {
    return !!this.retrieveMediator(mediatorName);
  };

  return View;
}();

View.instanceMap = {};
View.MULTITON_MSG = 'View instance for this Multiton key already constructed!';
exports.default = View;
module.exports = exports['default'];