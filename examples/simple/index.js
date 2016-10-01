import Application, { ApplicationVO } from './app';

const app = new Application(new ApplicationVO('test', 'wurst'));
app.start();


module.exports = app;
