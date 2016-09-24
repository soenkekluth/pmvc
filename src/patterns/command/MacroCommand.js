/**
 * @author PureMVC JS Native Port by David Foley, Frédéric Saunier, & Alain Duchesneau
 * @author Copyright(c) 2006-2012 Futurescale, Inc., Some rights reserved.
 *
 * @class puremvc.MacroCommand
 * @extends puremvc.Notifier
 *
 * A base command implementation that executes other commands, such as
 * {@link puremvc.SimpleCommand SimpleCommand}
 * or {@link puremvc.MacroCommand MacroCommand}
 * subclasses.
 *
 * A MacroCommand maintains an list of
 * command constructor references called *SubCommands*.
 *
 * When #execute is called, the MacroCommand
 * instantiates and calls #execute on each of its *SubCommands* in turn.
 * Each *SubCommand* will be passed a reference to the original
 * {@link puremvc.Notification Notification}
 * that was passed to the MacroCommands #execute method
 *
 * Unlike {@link puremvc.SimpleCommand SimpleCommand},
 * your subclass should not override #execute but instead, should
 * override the #initializeMacroCommand method, calling #addSubCommand once for
 * each *SubCommand* to be executed.
 *
 * If your subclass does define a constructor, be sure to call "super" like so
 *
 *     function MyMacroCommand ()
 *     {
 *         MacroCommand.call(this);
 *     };
 * @constructor
 */


import Notifier from '../observer/Notifier';

export default class MacroCommand extends Notifier {

  constructor() {
    super();
    /**
     * @private
     * @type {Array.<puremvc.SimpleCommand|puremvc.MacroCommand>}
     */
    this.subCommands = [];
    this.initializeMacroCommand();
  }



  /**
   * @protected
   * Initialize the MacroCommand.
   *
   * In your subclass, override this method to
   * initialize the MacroCommand's *SubCommand*
   * list with command class references like
   * this:
   *
   *     // Initialize MyMacroCommand
   *     MyinitializeMacroCommand ()
   *     {
   *         this.addSubCommand( com.me.myapp.controller.FirstCommand );
   *         this.addSubCommand( com.me.myapp.controller.SecondCommand );
   *         this.addSubCommand( com.me.myapp.controller.ThirdCommand );
   *     };
   *
   * Note that *SubCommand*s may be any command implementor,
   * MacroCommands or SimpleCommands are both acceptable.
   * @return {void}
   */
  initializeMacroCommand() {}

  /**
   * @protected
   * Add a *SubCommand*
   *
   * The *SubCommand*s will be called in First In / First Out (FIFO) order
   * @param {Function} commandClassRef
   *  A reference to a subclassed SimpleCommand or MacroCommand constructor
   */
  addSubCommand(commandClassRef) {
    this.subCommands.push(commandClassRef);
  }

  /**
   * Execute this MacroCommands *SubCommands*
   *
   * The *SubCommand*s will be called in First In / First Out (FIFO) order
   * @param {puremvc.Notification} note
   *  The Notification object to be passed to each *SubCommand*
   */
  execute(note) {
    // SIC- TODO optimize
    while (this.subCommands.length > 0) {
      var ref = this.subCommands.shift();
      var cmd = new ref;
      cmd.initializeNotifier(this.multitonKey);
      cmd.execute(note);
    }
  }
}
