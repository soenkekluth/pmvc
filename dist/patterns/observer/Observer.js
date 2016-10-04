'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Notification = require('./Notification');

var _Notification2 = _interopRequireDefault(_Notification);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Observer = function () {
  function Observer(notifyMethod, notifyContext) {
    _classCallCheck(this, Observer);

    this.notify = null;
    this.context = null;

    this.setNotifyMethod(notifyMethod);
    this.setNotifyContext(notifyContext);
  }

  Observer.prototype.setNotifyMethod = function setNotifyMethod(notifyMethod) {
    this.notify = notifyMethod;
  };

  Observer.prototype.setNotifyContext = function setNotifyContext(notifyContext) {
    this.context = notifyContext;
  };

  Observer.prototype.getNotifyMethod = function getNotifyMethod() {
    return this.notify;
  };

  Observer.prototype.getNotifyContext = function getNotifyContext() {
    return this.context;
  };

  Observer.prototype.notifyObserver = function notifyObserver(notification) {
    this.notify.call(this.context, notification);
  };

  Observer.prototype.compareNotifyContext = function compareNotifyContext(object) {
    return object === this.context;
  };

  return Observer;
}();

exports.default = Observer;
module.exports = exports['default'];