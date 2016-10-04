'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Facade = require('../facade/Facade');

var _Facade2 = _interopRequireDefault(_Facade);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Notifier = function () {
  function Notifier() {
    _classCallCheck(this, Notifier);
  }

  Notifier.prototype.sendNotification = function sendNotification(notificationName, body, type) {
    var facade = this.getFacade();
    if (facade) {
      facade.sendNotification(notificationName, body, type);
    }
  };

  Notifier.prototype.initializeNotifier = function initializeNotifier(key) {
    this.multitonKey = key;
    this.facade = this.getFacade();
  };

  Notifier.prototype.getFacade = function getFacade() {
    if (!this.multitonKey) {
      throw new Error(Notifier.MULTITON_MSG);
    }

    return _Facade2.default.getInstance(this.multitonKey);
  };

  return Notifier;
}();

Notifier.MULTITON_MSG = 'multitonKey for this Notifier not yet initialized!';
exports.default = Notifier;
module.exports = exports['default'];