import { Proxy } from '../../src/pmvc';

export default class ApplicationProxy extends Proxy {
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

