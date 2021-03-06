 import { MacroCommand, SimpleCommand } from '../../../src/pmvc';
 import { NotificationNames } from '../constants';
 import { ModelPrepCommand, ViewPrepCommand } from './prep-commands';

 export default class StartupCommand extends MacroCommand {

   initializeMacroCommand() {
     this.addSubCommand(ModelPrepCommand);
     this.addSubCommand(ViewPrepCommand);
   }


   execute(note) {
     console.log('StartupCommand execute()');
     super.execute(note);
     this.facade.removeCommand(NotificationNames.STARTUP);
     this.sendNotification(NotificationNames.STARTUP_COMPLETE);
   }
 }


 export class TestCommand extends SimpleCommand {
   execute(note) {
     console.log('TestCommand execute()');
   }
 }
