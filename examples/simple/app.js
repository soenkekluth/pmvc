import ApplicationFacade from './facade/app-facade';

export default class Application {

  static NAME: string = 'Application';
  facade: ApplicationFacade;
  data: ApplicationVO;

  constructor(data: ApplicationVO) {
    this.data = data;
    this.init();
  }

  init() {
    this.facade = ApplicationFacade.getInstance(Application.NAME);
  }

  start() {
    // this.facade = 'hello';
    this.facade.startup(this);
  }

  stop() {
    this.facade.shutdown();
    this.facade = null;
  }

  destroy() {
    this.stop();
    this.data = null;
  }
}

export class ApplicationVO {

  key: string = 'test';
  value: any = null;

  constructor(key: string, value: any) {
    this.key = key;
    this.value = value;
  }
}
