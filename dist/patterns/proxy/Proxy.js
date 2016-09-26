"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _Notifier2 = require("../observer/Notifier");

var _Notifier3 = _interopRequireDefault(_Notifier2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author PureMVC JS Native Port by David Foley, Frédéric Saunier, & Alain Duchesneau
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author Copyright(c) 2006-2012 Futurescale, Inc., Some rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @class puremvc.Proxy
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @extends puremvc.Notifier
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * A base Proxy implementation.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * In PureMVC, Proxy classes are used to manage parts of the application's data
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * model.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * A Proxy might simply manage a reference to a local data object, in which case
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * interacting with it might involve setting and getting of its data in
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * synchronous fashion.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Proxy classes are also used to encapsulate the application's interaction with
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * remote services to save or retrieve data, in which case, we adopt an
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * asyncronous idiom; setting data (or calling a method) on the Proxy and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * listening for a
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * {@link puremvc.Notification Notification}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * to be sent  when the Proxy has retrieved the data from the service.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @param {string} [proxyName]
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *  The Proxy's name. If none is provided, the Proxy will use its constructors
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *  NAME property.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @param {Object} [data]
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *  The Proxy's data object
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @constructor
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var Proxy = function (_Notifier) {
  _inherits(Proxy, _Notifier);

  function Proxy(proxyName, data) {
    _classCallCheck(this, Proxy);

    /**
     * @ignore
     * The Proxys name.
     *
     * @protected
     * @type String
     */
    var _this = _possibleConstructorReturn(this, _Notifier.call(this));

    _this.proxyName = proxyName || Proxy.NAME;

    /**
     * @ignore
     * The Proxy's data object.
     *
     * @protected
     * @type Object
     */
    _this.data = null;

    if (data) {
      _this.setData(data);
    }
    return _this;
  }

  /**
   * Get the Proxy's name.
   *
   * @return {string}
   */
  Proxy.prototype.getProxyName = function getProxyName() {
    return this.proxyName;
  };

  /**
   * Set the Proxy's data object
   *
   * @param {Object} data
   * @return {void}
   */


  Proxy.prototype.setData = function setData(data) {
    this.data = data;
  };

  /**
   * Get the Proxy's data object
   *
   * @return {Object}
   */


  Proxy.prototype.getData = function getData() {
    return this.data;
  };

  /**
   * Called by the {@link puremvc.Model Model} when
   * the Proxy is registered.
   *
   * @return {void}
   */


  Proxy.prototype.onRegister = function onRegister() {
    return;
  };

  /**
   * Called by the {@link puremvc.Model Model} when
   * the Proxy is removed.
   *
   * @return {void}
   */


  Proxy.prototype.onRemove = function onRemove() {
    return;
  };

  return Proxy;
}(_Notifier3.default);

Proxy.NAME = "Proxy";
exports.default = Proxy;
module.exports = exports["default"];