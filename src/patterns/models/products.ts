// AbstractProduct
interface IButton {
  render(): string;
  onClick(): void;
}

// AbstractProduct
interface ILink {
  render(): string;
  onClick(): void;
}

// ConcreteProduct
class WindowsButton implements IButton {
  render() {
    return 'Windows button';
  }
  onClick(): void {
    console.log('click Windows button');
  }
}

// ConcreteProduct
class WindowsLink implements ILink {
  render() {
    return 'Windows link';
  }
  onClick(): void {
    console.log('click Windows link');
  }
}

// ConcreteProduct
class MacButton implements IButton {
  render() {
    return 'Mac button';
  }
  onClick(): void {
    console.log('click Mac button');
  }
}

// ConcreteProduct
class MacLink implements ILink {
  render() {
    return 'Mac link';
  }
  onClick(): void {
    console.log('click Mac link');
  }
}

// Legacy class with incompatible interface (Adaptee)
class LegacyButton {
  display(): string {
    return 'Legacy button';
  }

  handleClick(): void {
    console.log('click legacy button');
  }
}

export {
  IButton,
  ILink,
  MacButton,
  MacLink,
  WindowsButton,
  WindowsLink,
  LegacyButton,
};
