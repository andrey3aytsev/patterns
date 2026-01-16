import { IButton, MacButton, WindowsButton } from '../models';

// Creator
abstract class Dialog {
  abstract createButton(): IButton;

  render() {
    const button = this.createButton();
    return `Dialog ${button.render()}`;
  }
}

// ConcreteCreator
class WindowsDialog extends Dialog {
  createButton(): IButton {
    return new WindowsButton();
  }
}

// ConcreteCreator
class MacDialog extends Dialog {
  createButton(): IButton {
    return new MacButton();
  }
}

export { WindowsDialog, MacDialog };
