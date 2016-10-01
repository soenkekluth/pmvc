import Observer from './patterns/observer/Observer';
import Notification from './patterns/observer/Notification';
import Facade from './patterns/facade/Facade';
import Notifier from './patterns/observer/Notifier';
import Model from './core/Model';
import View from './core/View';
import Controller from './core/Controller';
import MacroCommand from './patterns/command/MacroCommand';
import SimpleCommand from './patterns/command/SimpleCommand';
import Mediator from './patterns/mediator/Mediator';
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
  Proxy,
};

module.exports = pmvc;
