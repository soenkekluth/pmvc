import { Model, View, Controller, MacroCommand, SimpleCommand, Facade, Mediator, Notification, Notifier, Observer, Proxy } from '../../dist/pmvc';

const NotificationNames = {
  STARTUP: 'STARTUP',
  STARTUP_COMPLETE: 'STARTUP_COMPLETE',
  TEST: 'TEST'
};


/**
 * Application
 *
 */

class Application {

  static NAME = 'Application';

  constructor(data) {
    this._data = data;
    this.init();
  }

  init() {
    this._facade = ApplicationFacade.getInstance(Application.NAME);
  }

  start() {
    this._facade.startup(this);
  }

  stop() {
    this._facade.shutdown();
    this._facade = null;
  }

  destroy() {
    this.stop();
    this._data = null;
  }


  get data() {
    return this._data;
  }
}




/**
 * Facade
 *
 */

class ApplicationFacade extends Facade {
  static NAME = "ApplicationFacade";

  constructor(key) {
    super(key);
  }

  static getInstance(key) {
    if (!key) {
      return null;
    }
    if (!Facade.instanceMap[key]) {
      return new ApplicationFacade(key);
    }

    return Facade.instanceMap[key];
  }


  startup(app) {
    this.sendNotification(NotificationNames.STARTUP, app);
  }

  shutdown(app) {

  }


  initializeView() {
    super.initializeView();
  }


  initializeController() {
    console.log('initializeController')
    super.initializeController();
    this.registerCommand(NotificationNames.STARTUP, StartupCommand);
    this.registerCommand(NotificationNames.TEST, TestCommand);
    // this.registerCommand( NotificationNames.STARTUP_COMPLETE, StartupCompleteCommand);
  }
}


/**
 * Proxy
 *
 */

class ApplicationProxy extends Proxy {
  static NAME = "ApplicationProxy";

  constructor(data) {
    super(ApplicationProxy.NAME, data);
  }

  onRegister() {

  }

  onRemove() {

  }
}






/**
 * View
 *
 */


class ApplicationView {

}



class ApplicationMediator extends Mediator {
  static NAME = "ApplicationMediator";


  constructor(mediatorName, viewComponent) {
    super(mediatorName, viewComponent);
  }


  onRegister() {
    console.log('ApplicationMediator registered');
  }

  onRemove() {
    super.onRemove();
  }
}



/**
 * Controller
 *
 */



class ModelPrepCommand extends SimpleCommand {
  execute(note) {
    console.log(note);
    var app = Application(note.getBody());
    var appProxy = new ApplicationProxy(app.data);
    this.facade.registerProxy(appProxy);
  }
}


class ViewPrepCommand extends SimpleCommand {

  execute(note) {
    console.log(note);
    var appView = new ApplicationView();
    var appMediator = new ApplicationMediator(ApplicationMediator.NAME, appView);
    this.facade.registerMediator(appMediator);
  }
}




class StartupCommand extends MacroCommand {

  initializeMacroCommand() {
    this.addSubCommand(ModelPrepCommand);
    this.addSubCommand(ViewPrepCommand);
  }


  execute(note) {
    console.log(note);
    super.execute(note);
    this.facade.removeCommand(NotificationNames.STARTUP);
    this.sendNotification(NotificationNames.STARTUP_COMPLETE);
  }
}



class TestCommand extends SimpleCommand {
  execute(note) {
    console.log(note);
    this.commandComplete();
  }
}







const app = new Application({});
app.start();
