import Model from './core/Model';
import View from './core/View';
import Controller from './core/Controller';
import MacroCommand from './patterns/command/MacroCommand';
import SimpleCommand from './patterns/command/SimpleCommand';
import Facade from './patterns/facade/Facade';
import Mediator from './patterns/mediator/Mediator';
import Notification from './patterns/observer/Notification';
import Notifier from './patterns/observer/Notifier';
import Observer from './patterns/observer/Observer';
import Proxy from './patterns/proxy/Proxy';


const pmvc = {
  Model,
  View,
  Controller,
  MacroCommand,
  SimpleCommand,
  Facade,
  Mediator,
  Notification,
  Notifier,
  Observer,
  Proxy
}

module.exports = pmvc;
