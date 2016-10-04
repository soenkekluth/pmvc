'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Proxy = require('../patterns/proxy/Proxy');

var _Proxy2 = _interopRequireDefault(_Proxy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Model = function () {
  function Model(key) {
    _classCallCheck(this, Model);

    this.proxyMap = {};
    this.multitonKey = '';

    if (Model.instanceMap[key]) {
      throw new Error(Model.MULTITON_MSG);
    }

    this.multitonKey = key;
    Model.instanceMap[key] = this;

    this.initializeModel();
  }

  Model.prototype.initializeModel = function initializeModel() {};

  Model.getInstance = function getInstance(key) {
    if (!key) {
      return null;
    }
    if (!Model.instanceMap[key]) {
      return new Model(key);
    }

    return Model.instanceMap[key];
  };

  Model.prototype.registerProxy = function registerProxy(proxy) {
    proxy.initializeNotifier(this.multitonKey);
    this.proxyMap[proxy.getProxyName()] = proxy;
    proxy.onRegister();
  };

  Model.prototype.retrieveProxy = function retrieveProxy(proxyName) {
    return this.proxyMap[proxyName];
  };

  Model.prototype.hasProxy = function hasProxy(proxyName) {
    return !!this.proxyMap[proxyName];
  };

  Model.prototype.removeProxy = function removeProxy(proxyName) {
    var proxy = this.proxyMap[proxyName];
    if (proxy) {
      delete this.proxyMap[proxyName];
      proxy.onRemove();
    }

    return proxy;
  };

  Model.removeModel = function removeModel(key) {
    delete Model.instanceMap[key];
  };

  return Model;
}();

Model.instanceMap = {};
Model.MULTITON_MSG = 'Model instance for this Multiton key already constructed!';
exports.default = Model;
module.exports = exports['default'];