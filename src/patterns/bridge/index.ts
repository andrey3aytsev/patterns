import {
  Button,
  LoadableButton,
  MacButtonImplementor,
  WindowsButtonImplementor,
} from './bridge';

const windowsButton = new Button(new WindowsButtonImplementor());
const macLoadableButton = new LoadableButton(new MacButtonImplementor());

console.log(windowsButton.render());
windowsButton.onClick();

console.log(macLoadableButton.render());
macLoadableButton.onClick();
macLoadableButton.loading();
