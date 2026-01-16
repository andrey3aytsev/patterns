import { MacDialog, WindowsDialog } from './factory-method';

const windowsDialog = new WindowsDialog();
console.log(windowsDialog.render());

const macDialog = new MacDialog();
console.log(macDialog.render());
