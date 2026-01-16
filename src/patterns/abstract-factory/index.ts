import { Application, MacFactory, WindowsFactory } from './abstract-factory';

const windowsFactory = new WindowsFactory();
const macFactory = new MacFactory();

const windowsApp = new Application(windowsFactory);
windowsApp.createUi();
console.log(windowsApp.button.render());

const macApp = new Application(macFactory);
macApp.createUi();
console.log(macApp.button.render());
