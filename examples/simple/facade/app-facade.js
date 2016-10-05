import { Facade } from '../../../src/pmvc';
import { NotificationNames } from '../constants';
import StartupCommand, { TestCommand } from '../controller/startup-command';


export default class ApplicationFacade extends Facade {
  static NAME = 'ApplicationFacade';


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
    this.addCommand(NotificationNames.STARTUP, StartupCommand);
    this.addCommand(NotificationNames.TEST, TestCommand);
    // this.addCommand( NotificationNames.STARTUP_COMPLETE, StartupCompleteCommand);
  }
}
