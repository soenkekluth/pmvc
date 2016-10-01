import Application, { ApplicationVO } from './app';

const app: Application = new Application(new ApplicationVO('test', 'wurst'));
app.start();


module.exports = app;
