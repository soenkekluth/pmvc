'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Notification = function () {
  function Notification(name, body, type) {
    _classCallCheck(this, Notification);

    this.name = null;
    this.body = null;
    this.type = null;

    this.name = name;
    this.body = body;
    this.type = type;
  }

  Notification.prototype.getName = function getName() {
    return this.name;
  };

  Notification.prototype.setBody = function setBody(body) {
    this.body = body;
  };

  Notification.prototype.getBody = function getBody() {
    return this.body;
  };

  Notification.prototype.setType = function setType(type) {
    this.type = type;
  };

  Notification.prototype.getType = function getType() {
    return this.type;
  };

  Notification.prototype.toString = function toString() {
    var msg = 'Notification Name: ' + this.getName();
    msg += '\nBody:' + (this.body === null ? 'null' : this.body.toString());
    msg += '\nType:' + (this.type === null ? 'null' : this.type);
    return msg;
  };

  return Notification;
}();

exports.default = Notification;
module.exports = exports['default'];