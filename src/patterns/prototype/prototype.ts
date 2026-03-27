import {
  IButton,
  ILink,
  MacButton,
  MacLink,
  WindowsButton,
  WindowsLink,
} from '../models';

interface ICloneable<T> {
  clone(): T;
}

interface ICloneableButton extends IButton, ICloneable<ICloneableButton> {}
interface ICloneableLink extends ILink, ICloneable<ICloneableLink> {}
type UIComponentPrototype = ICloneableButton | ICloneableLink;

class CloneableWindowsButton extends WindowsButton implements ICloneableButton {
  clone(): ICloneableButton {
    return new CloneableWindowsButton();
  }
}

class CloneableMacButton extends MacButton implements ICloneableButton {
  clone(): ICloneableButton {
    return new CloneableMacButton();
  }
}

class CloneableWindowsLink extends WindowsLink implements ICloneableLink {
  clone(): ICloneableLink {
    return new CloneableWindowsLink();
  }
}

class CloneableMacLink extends MacLink implements ICloneableLink {
  clone(): ICloneableLink {
    return new CloneableMacLink();
  }
}

class UIComponentPrototypeRegistry {
  private prototypes: Map<string, UIComponentPrototype> = new Map();

  registerPrototype(key: string, prototype: UIComponentPrototype): void {
    this.prototypes.set(key, prototype);
  }

  getPrototype(key: string): UIComponentPrototype | undefined {
    return this.prototypes.get(key);
  }

  createComponent<T extends UIComponentPrototype = UIComponentPrototype>(
    key: string
  ): T {
    const prototype = this.getPrototype(key);
    if (!prototype) {
      throw new Error(`Prototype for key "${key}" not found`);
    }
    return prototype.clone() as T;
  }
}

export {
  ICloneable,
  ICloneableButton,
  ICloneableLink,
  CloneableWindowsButton,
  CloneableMacButton,
  CloneableWindowsLink,
  CloneableMacLink,
  UIComponentPrototypeRegistry,
};
