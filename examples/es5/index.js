'use strict';

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _pmvc = require('../../dist/pmvc');

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NotificationNames = {
  STARTUP: 'STARTUP',
  STARTUP_COMPLETE: 'STARTUP_COMPLETE',
  TEST: 'TEST'
};

/**
 * Application
 *
 */

var Application = function () {
  function Application(data) {
    _classCallCheck(this, Application);

    this._data = data;
    this.init();
  }

  Application.prototype.init = function init() {
    this._facade = ApplicationFacade.getInstance(Application.NAME);
  };

  Application.prototype.start = function start() {
    this._facade.startup(this);
  };

  Application.prototype.stop = function stop() {
    this._facade.shutdown();
    this._facade = null;
  };

  Application.prototype.destroy = function destroy() {
    this.stop();
    this._data = null;
  };

  _createClass(Application, [{
    key: 'data',
    get: function get() {
      return this._data;
    }
  }]);

  return Application;
}();

/**
 * Facade
 *
 */

Application.NAME = 'Application';

var ApplicationFacade = function (_Facade) {
  _inherits(ApplicationFacade, _Facade);

  function ApplicationFacade(key) {
    _classCallCheck(this, ApplicationFacade);

    return _possibleConstructorReturn(this, _Facade.call(this, key));
  }

  ApplicationFacade.getInstance = function getInstance(key) {
    if (!key) {
      return null;
    }
    if (!_pmvc.Facade.instanceMap[key]) {
      return new ApplicationFacade(key);
    }

    return _pmvc.Facade.instanceMap[key];
  };

  ApplicationFacade.prototype.startup = function startup(app) {
    this.sendNotification(NotificationNames.STARTUP, app);
  };

  ApplicationFacade.prototype.shutdown = function shutdown(app) {};

  ApplicationFacade.prototype.initializeView = function initializeView() {
    _Facade.prototype.initializeView.call(this);
  };

  ApplicationFacade.prototype.initializeController = function initializeController() {
    _Facade.prototype.initializeController.call(this);
    this.registerCommand(NotificationNames.STARTUP, StartupCommand);
    this.registerCommand(NotificationNames.TEST, TestCommand);
    // this.registerCommand( NotificationNames.STARTUP_COMPLETE, StartupCompleteCommand);
  };

  return ApplicationFacade;
}(_pmvc.Facade);

/**
 * Proxy
 *
 */

ApplicationFacade.NAME = 'ApplicationFacade';

var ApplicationProxy = function (_Proxy) {
  _inherits(ApplicationProxy, _Proxy);

  function ApplicationProxy(data) {
    _classCallCheck(this, ApplicationProxy);

    return _possibleConstructorReturn(this, _Proxy.call(this, ApplicationProxy.NAME, data));
  }

  ApplicationProxy.prototype.onRegister = function onRegister() {
    console.log('ApplicationProxy registered');
  };

  ApplicationProxy.prototype.onRemove = function onRemove() {};

  return ApplicationProxy;
}(_pmvc.Proxy);

/**
 * View
 *
 */

ApplicationProxy.NAME = 'ApplicationProxy';

var ApplicationView = function () {
  function ApplicationView() {
    _classCallCheck(this, ApplicationView);
  }

  ApplicationView.prototype.show = function show() {
    console.log('ApplicationView show()');
  };

  ApplicationView.prototype.hide = function hide() {};

  return ApplicationView;
}();

var ApplicationMediator = function (_Mediator) {
  _inherits(ApplicationMediator, _Mediator);

  function ApplicationMediator(mediatorName, viewComponent) {
    _classCallCheck(this, ApplicationMediator);

    return _possibleConstructorReturn(this, _Mediator.call(this, mediatorName, viewComponent));
  }

  ApplicationMediator.prototype.onRegister = function onRegister() {
    console.log('ApplicationMediator registered');
    this.view.show();
  };

  ApplicationMediator.prototype.onRemove = function onRemove() {
    _Mediator.prototype.onRemove.call(this);
  };

  return ApplicationMediator;
}(_pmvc.Mediator);

/**
 * Controller
 *
 */

ApplicationMediator.NAME = 'ApplicationMediator';

var ModelPrepCommand = function (_SimpleCommand) {
  _inherits(ModelPrepCommand, _SimpleCommand);

  function ModelPrepCommand() {
    _classCallCheck(this, ModelPrepCommand);

    return _possibleConstructorReturn(this, _SimpleCommand.apply(this, arguments));
  }

  ModelPrepCommand.prototype.execute = function execute(note) {
    console.log('ModelPrepCommand exexute()');
    var app = note.getBody();
    var appProxy = new ApplicationProxy(app.data);
    this.facade.registerProxy(appProxy);
  };

  return ModelPrepCommand;
}(_pmvc.SimpleCommand);

var ViewPrepCommand = function (_SimpleCommand2) {
  _inherits(ViewPrepCommand, _SimpleCommand2);

  function ViewPrepCommand() {
    _classCallCheck(this, ViewPrepCommand);

    return _possibleConstructorReturn(this, _SimpleCommand2.apply(this, arguments));
  }

  ViewPrepCommand.prototype.execute = function execute(note) {
    console.log('ViewPrepCommand exexute()');
    var appView = new ApplicationView();
    var appMediator = new ApplicationMediator(ApplicationMediator.NAME, appView);
    this.facade.registerMediator(appMediator);
  };

  return ViewPrepCommand;
}(_pmvc.SimpleCommand);

var StartupCommand = function (_MacroCommand) {
  _inherits(StartupCommand, _MacroCommand);

  function StartupCommand() {
    _classCallCheck(this, StartupCommand);

    return _possibleConstructorReturn(this, _MacroCommand.apply(this, arguments));
  }

  StartupCommand.prototype.initializeMacroCommand = function initializeMacroCommand() {
    this.addSubCommand(ModelPrepCommand);
    this.addSubCommand(ViewPrepCommand);
  };

  StartupCommand.prototype.execute = function execute(note) {
    console.log('StartupCommand exexute()');
    _MacroCommand.prototype.execute.call(this, note);
    this.facade.removeCommand(NotificationNames.STARTUP);
    this.sendNotification(NotificationNames.STARTUP_COMPLETE);
  };

  return StartupCommand;
}(_pmvc.MacroCommand);

var TestCommand = function (_SimpleCommand3) {
  _inherits(TestCommand, _SimpleCommand3);

  function TestCommand() {
    _classCallCheck(this, TestCommand);

    return _possibleConstructorReturn(this, _SimpleCommand3.apply(this, arguments));
  }

  TestCommand.prototype.execute = function execute(note) {
    console.log('TestCommand exexute()');
  };

  return TestCommand;
}(_pmvc.SimpleCommand);

var app = new Application({ key: 'value' });
app.start();