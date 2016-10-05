import { SimpleCommand } from '../../../src/pmvc';
import ApplicationProxy from '../model/app-proxy';
import ApplicationView from '../view/app-view';
import ApplicationMediator from '../view/app-mediator';

export class ModelPrepCommand extends SimpleCommand {
  execute(note) {
    console.log('ModelPrepCommand execute()');
    const app = note.getBody();
    const appProxy = new ApplicationProxy(app.data);
    this.facade.addProxy(appProxy);
  }
}


export class ViewPrepCommand extends SimpleCommand {

  execute(note) {
    console.log('ViewPrepCommand execute()');
    const appView = new ApplicationView();
    const appMediator = new ApplicationMediator(ApplicationMediator.NAME, appView);
    this.facade.addMediator(appMediator);
  }
}
