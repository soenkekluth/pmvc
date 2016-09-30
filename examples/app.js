import ApplicationFacade from './facade/app-facade';

export default class Application {

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


