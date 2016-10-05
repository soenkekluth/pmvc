'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Notifier2 = require('../observer/Notifier');

var _Notifier3 = _interopRequireDefault(_Notifier2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Proxy = function (_Notifier) {
  _inherits(Proxy, _Notifier);

  function Proxy(proxyName, data) {
    _classCallCheck(this, Proxy);

    var _this = _possibleConstructorReturn(this, _Notifier.call(this));

    _this.proxyName = null;
    _this.data = null;


    _this.proxyName = proxyName || Proxy.NAME;
    _this.data = data;
    return _this;
  }

  Proxy.prototype.getName = function getName() {
    return this.proxyName;
  };

  Proxy.prototype.setData = function setData(data) {
    this.data = data;
  };

  Proxy.prototype.getData = function getData() {
    return this.data;
  };

  Proxy.prototype.onRegister = function onRegister() {
    return;
  };

  Proxy.prototype.onRemove = function onRemove() {
    return;
  };

  return Proxy;
}(_Notifier3.default);

Proxy.NAME = 'Proxy';
exports.default = Proxy;
module.exports = exports['default'];