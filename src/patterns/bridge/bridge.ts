export abstract class Button {
  abstract render(): string;
  abstract onClick(): void;
}

export class MacButton extends Button {
  render() {
    return 'mac render';
  }

  onClick(): void {
    console.log('mac click');
  }
}

export class WindowsButton extends Button {
  render() {
    return 'windows render';
  }

  onClick(): void {
    console.log('windows click');
  }
}

export abstract class LoadableButton extends Button {
  abstract loading(): void;
}

export class WindowsLoadabeButton extends LoadableButton {
  render() {
    return 'windows render';
  }

  onClick(): void {
    console.log('windows click');
  }

  loading(): void {
    console.log('windows loading');
  }
}

export class MacLoadabeButton extends LoadableButton {
  render() {
    return 'mac render';
  }

  onClick(): void {
    console.log('mac click');
  }

  loading(): void {
    console.log('mac loading');
  }
}
