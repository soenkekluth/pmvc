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
  static NAME = 'ApplicationFacade';

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
  static NAME = 'ApplicationProxy';

  constructor(data) {
    super(ApplicationProxy.NAME, data);
  }

  onRegister() {
    console.log('ApplicationProxy registered');
  }

  onRemove() {

  }
}






/**
 * View
 *
 */


class ApplicationView {

  show(){
    console.log('ApplicationView show()');
  }

  hide(){

  }

}



class ApplicationMediator extends Mediator {
  static NAME = 'ApplicationMediator';


  constructor(mediatorName, viewComponent) {
    super(mediatorName, viewComponent);
  }


  onRegister() {
    console.log('ApplicationMediator registered');
    this.view.show();
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
    console.log('ModelPrepCommand exexute()');
    var app = note.getBody();
    var appProxy = new ApplicationProxy(app.data);
    this.facade.registerProxy(appProxy);
  }
}


class ViewPrepCommand extends SimpleCommand {

  execute(note) {
    console.log('ViewPrepCommand exexute()');
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
    console.log('StartupCommand exexute()');
    super.execute(note);
    this.facade.removeCommand(NotificationNames.STARTUP);
    this.sendNotification(NotificationNames.STARTUP_COMPLETE);
  }
}



class TestCommand extends SimpleCommand {
  execute(note) {
    console.log('TestCommand exexute()');
  }
}




const app = new Application({key:'value'});
app.start();
