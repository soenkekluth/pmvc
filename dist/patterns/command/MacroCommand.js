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

var MacroCommand = function (_Notifier) {
  _inherits(MacroCommand, _Notifier);

  function MacroCommand() {
    _classCallCheck(this, MacroCommand);

    var _this = _possibleConstructorReturn(this, _Notifier.call(this));

    _this.subCommands = [];


    _this.initializeMacroCommand();
    return _this;
  }

  MacroCommand.prototype.initializeMacroCommand = function initializeMacroCommand() {};

  MacroCommand.prototype.addSubCommand = function addSubCommand(commandClassRef) {
    this.subCommands.push(commandClassRef);
  };

  MacroCommand.prototype.execute = function execute(note) {
    while (this.subCommands.length > 0) {
      var Ref = this.subCommands.shift();
      var cmd = new Ref();
      cmd.initializeNotifier(this.multitonKey);
      cmd.execute(note);
    }
  };

  return MacroCommand;
}(_Notifier3.default);

exports.default = MacroCommand;
module.exports = exports['default'];