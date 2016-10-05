'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Notification = require('../patterns/observer/Notification');

var _Notification2 = _interopRequireDefault(_Notification);

var _Observer = require('../patterns/observer/Observer');

var _Observer2 = _interopRequireDefault(_Observer);

var _View = require('./View');

var _View2 = _interopRequireDefault(_View);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Controller = function () {
  function Controller(key) {
    _classCallCheck(this, Controller);

    this.commandMap = {};

    if (Controller.instanceMap[key]) {
      throw new Error(Controller.MULTITON_MSG);
    }

    this.multitonKey = key;

    Controller.instanceMap[this.multitonKey] = this;

    this.initializeController();
  }

  Controller.prototype.initializeController = function initializeController() {
    this.view = _View2.default.getInstance(this.multitonKey);
  };

  Controller.getInstance = function getInstance(key) {
    if (!key) {
      return null;
    }

    if (!Controller.instanceMap[key]) {
      return new Controller(key);
    }

    return Controller.instanceMap[key];
  };

  Controller.prototype.executeCommand = function executeCommand(note) {
    if (!note) {
      return;
    }
    var CommandClassRef = this.commandMap[note.getName()];
    if (!CommandClassRef) {
      return;
    }

    var commandInstance = new CommandClassRef();
    commandInstance.initializeNotifier(this.multitonKey);
    commandInstance.execute(note);
  };

  Controller.prototype.addCommand = function addCommand(notificationName, CommandClassRef) {
    if (!this.commandMap[notificationName]) {
      this.view.registerObserver(notificationName, new _Observer2.default(this.executeCommand, this));
    }

    this.commandMap[notificationName] = CommandClassRef;
  };

  Controller.prototype.hasCommand = function hasCommand(notificationName) {
    return !!this.commandMap[notificationName];
  };

  Controller.prototype.removeCommand = function removeCommand(notificationName) {
    if (this.hasCommand(notificationName)) {
      this.view.removeObserver(notificationName, this);
      delete this.commandMap[notificationName];
    }
  };

  Controller.removeController = function removeController(key) {
    delete this.instanceMap[key];
  };

  return Controller;
}();

Controller.instanceMap = {};
Controller.MULTITON_MSG = 'controller key for this Multiton key already constructed';
exports.default = Controller;
module.exports = exports['default'];