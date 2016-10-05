'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Proxy = require('../proxy/Proxy');

var _Proxy2 = _interopRequireDefault(_Proxy);

var _Notifier2 = require('../observer/Notifier');

var _Notifier3 = _interopRequireDefault(_Notifier2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Mediator = function (_Notifier) {
  _inherits(Mediator, _Notifier);

  function Mediator(mediatorName, viewComponent) {
    _classCallCheck(this, Mediator);

    var _this = _possibleConstructorReturn(this, _Notifier.call(this));

    _this.mediatorName = mediatorName || Mediator.NAME;
    _this.viewComponent = viewComponent;
    return _this;
  }

  Mediator.prototype.getName = function getName() {
    return this.mediatorName;
  };

  Mediator.prototype.setViewComponent = function setViewComponent(viewComponent) {
    this.viewComponent = viewComponent;
  };

  Mediator.prototype.getViewComponent = function getViewComponent() {
    return this.viewComponent;
  };

  Mediator.prototype.getProxy = function getProxy(name) {
    return this.facade.getProxy(name);
  };

  Mediator.prototype.addProxy = function addProxy(proxy) {
    this.facade.addProxy(proxy);
  };

  Mediator.prototype.listNotificationInterests = function listNotificationInterests() {
    return [];
  };

  Mediator.prototype.handleNotification = function handleNotification(notification) {};

  Mediator.prototype.onRegister = function onRegister() {};

  Mediator.prototype.onRemove = function onRemove() {};

  _createClass(Mediator, [{
    key: 'view',
    get: function get() {
      return this.getViewComponent();
    },
    set: function set(viewComponent) {
      this.setViewComponent(viewComponent);
    }
  }]);

  return Mediator;
}(_Notifier3.default);

Mediator.NAME = 'Mediator';
exports.default = Mediator;
module.exports = exports['default'];