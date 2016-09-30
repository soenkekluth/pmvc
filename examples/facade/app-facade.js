import { Facade } from '../../src/pmvc';
import { NotificationNames } from '../constants';
import StartupCommand, { TestCommand } from '../controller/startup-command';


export default class ApplicationFacade extends Facade {
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
