import {
  Button,
  IconButton,
  LinuxButtonImplementor,
  LoadableButton,
  MacButtonImplementor,
  WindowsButtonImplementor,
} from './bridge';

const windowsButton = new Button(new WindowsButtonImplementor());
const macLoadableButton = new LoadableButton(new MacButtonImplementor());
const linuxIconButton = new IconButton(new LinuxButtonImplementor());

console.log(windowsButton.render());
windowsButton.onClick();

console.log(macLoadableButton.render());
macLoadableButton.onClick();
macLoadableButton.loading();

console.log(linuxIconButton.render());
linuxIconButton.onClick();
linuxIconButton.showIcon();
