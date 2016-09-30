import { SimpleCommand } from '../../src/pmvc';
import ApplicationProxy from '../model/app-proxy';
import ApplicationView from '../view/app-view';
import ApplicationMediator from '../view/app-mediator';

export class ModelPrepCommand extends SimpleCommand {
  execute(note) {
    console.log('ModelPrepCommand execute()');
    var app = note.getBody();
    var appProxy = new ApplicationProxy(app.data);
    this.facade.registerProxy(appProxy);
  }
}


export class ViewPrepCommand extends SimpleCommand {

  execute(note) {
    console.log('ViewPrepCommand execute()');
    var appView = new ApplicationView();
    var appMediator = new ApplicationMediator(ApplicationMediator.NAME, appView);
    this.facade.registerMediator(appMediator);
  }
}
