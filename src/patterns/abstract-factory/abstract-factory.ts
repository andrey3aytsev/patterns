import {
  IButton,
  ILink,
  MacButton,
  MacLink,
  WindowsButton,
  WindowsLink,
} from '../models';

interface ITextField {
  render(): string;
}

class WindowsTextField implements ITextField {
  render(): string {
    return 'Windows text field';
  }
}

class MacTextField implements ITextField {
  render(): string {
    return 'Mac text field';
  }
}

// AbstractFactory
interface IGuiFactory {
  createButton(): IButton;
  createLink(): ILink;
  createTextField(): ITextField;
}

// ConcreteFactory
class WindowsFactory implements IGuiFactory {
  createButton(): IButton {
    return new WindowsButton();
  }

  createLink(): ILink {
    return new WindowsLink();
  }

  createTextField(): ITextField {
    return new WindowsTextField();
  }
}

// ConcreteFactory
class MacFactory implements IGuiFactory {
  createButton(): IButton {
    return new MacButton();
  }

  createLink(): ILink {
    return new MacLink();
  }

  createTextField(): ITextField {
    return new MacTextField();
  }
}

// Client
class Application {
  public button: IButton;
  public link: ILink;

  constructor(private factory: IGuiFactory) {}

  createUi(): void {
    this.button = this.factory.createButton();
    this.link = this.factory.createLink();
  }
}

export { WindowsFactory, MacFactory, Application };
