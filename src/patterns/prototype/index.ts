import {
  CloneableMacButton,
  CloneableMacLink,
  CloneableWindowsButton,
  CloneableWindowsLink,
  ICloneableButton,
  ICloneableLink,
  UIComponentPrototypeRegistry,
} from './prototype';

const registry = new UIComponentPrototypeRegistry();

const windowsButtonProto = new CloneableWindowsButton();
const macButtonProto = new CloneableMacButton();
const windowsLinkProto = new CloneableWindowsLink();
const macLinkProto = new CloneableMacLink();

registry.registerPrototype('windows-button', windowsButtonProto);
registry.registerPrototype('mac-button', macButtonProto);
registry.registerPrototype('windows-link', windowsLinkProto);
registry.registerPrototype('mac-link', macLinkProto);

console.log('\nRegistered 4 prototypes');

const clonedWindowsBtn1 =
  registry.createComponent<ICloneableButton>('windows-button');
const clonedWindowsBtn2 =
  registry.createComponent<ICloneableButton>('windows-button');
console.log('Cloned two Windows buttons:');
console.log('Button 1:', clonedWindowsBtn1.render());
console.log('Button 2:', clonedWindowsBtn2.render());
console.log(
  'Are they different instances?',
  clonedWindowsBtn1 !== clonedWindowsBtn2
);

const clonedMacBtn = registry.createComponent<ICloneableButton>('mac-button');
const clonedMacLink = registry.createComponent<ICloneableLink>('mac-link');
console.log('Cloned Mac button and link:');
console.log('Button:', clonedMacBtn.render());
console.log('Link:', clonedMacLink.render());
