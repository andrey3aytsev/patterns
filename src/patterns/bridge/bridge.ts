export class Button {
  constructor(protected readonly implementor: ButtonImplementor) {}

  render(): string {
    return this.implementor.render();
  }

  onClick(): void {
    this.implementor.onClick();
  }
}

export class LoadableButton extends Button {
  loading(): void {
    this.implementor.loading();
  }
}

export class IconButton extends Button {
  showIcon(): void {
    console.log(`show icon for ${this.render()}`);
  }
}

export interface ButtonImplementor {
  render(): string;
  onClick(): void;
  loading(): void;
}

export class WindowsButtonImplementor implements ButtonImplementor {
  render(): string {
    return 'windows render';
  }

  onClick(): void {
    console.log('windows click');
  }

  loading(): void {
    console.log('windows loading');
  }
}

export class MacButtonImplementor implements ButtonImplementor {
  render(): string {
    return 'mac render';
  }

  onClick(): void {
    console.log('mac click');
  }

  loading(): void {
    console.log('mac loading');
  }
}

export class LinuxButtonImplementor implements ButtonImplementor {
  render(): string {
    return 'linux render';
  }

  onClick(): void {
    console.log('linux click');
  }

  loading(): void {
    console.log('linux loading');
  }
}
