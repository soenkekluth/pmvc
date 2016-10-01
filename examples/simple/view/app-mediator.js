import { Mediator } from '../../../src/pmvc';

export default class ApplicationMediator extends Mediator {
  static NAME = 'ApplicationMediator';

  onRegister() {
    console.log('ApplicationMediator registered');
    this.view.show();
  }

  onRemove() {
    super.onRemove();
  }
}
