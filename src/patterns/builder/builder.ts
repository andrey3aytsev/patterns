import {
  IButton,
  ILink,
  MacButton,
  MacLink,
  WindowsButton,
  WindowsLink,
} from '../models';

// Product
class Form {
  private buttons: IButton[] = [];
  private links: ILink[] = [];
  private title: string = '';

  public addButton(button: IButton): void {
    this.buttons.push(button);
  }

  public addLink(link: ILink): void {
    this.links.push(link);
  }

  public setTitle(title: string): void {
    this.title = title;
  }

  public render(): string {
    const buttonsRendered = this.buttons.map((btn) => btn.render()).join(', ');
    const linksRendered = this.links.map((link) => link.render()).join(', ');
    return `Form "${this.title}": [${buttonsRendered}] [${linksRendered}]`;
  }

  public getButtons(): IButton[] {
    return this.buttons;
  }

  public getLinks(): ILink[] {
    return this.links;
  }
}

// Builder
interface IFormBuilder {
  reset(): IFormBuilder;
  setTitle(title: string): IFormBuilder;
  addButton(): IFormBuilder;
  addLink(): IFormBuilder;
  build(): Form;
}

// ConcreteBuilder
class WindowsFormBuilder implements IFormBuilder {
  private form: Form;

  constructor() {
    this.reset();
  }

  reset(): IFormBuilder {
    this.form = new Form();
    return this;
  }

  setTitle(title: string): IFormBuilder {
    this.form.setTitle(title);
    return this;
  }

  addButton(): IFormBuilder {
    this.form.addButton(new WindowsButton());
    return this;
  }

  addLink(): IFormBuilder {
    this.form.addLink(new WindowsLink());
    return this;
  }

  build(): Form {
    const result = this.form;
    return result;
  }
}

// ConcreteBuilder
class MacFormBuilder implements IFormBuilder {
  private form: Form;

  constructor() {
    this.reset();
  }

  reset(): IFormBuilder {
    this.form = new Form();
    return this;
  }

  setTitle(title: string): IFormBuilder {
    this.form.setTitle(title);
    return this;
  }

  addButton(): IFormBuilder {
    this.form.addButton(new MacButton());
    return this;
  }

  addLink(): IFormBuilder {
    this.form.addLink(new MacLink());
    return this;
  }

  build(): Form {
    const result = this.form;
    this.reset();
    return result;
  }
}

// Director
class FormDirector {
  constructor(private builder: IFormBuilder) {}

  buildLoginForm(): Form {
    return this.builder
      .reset()
      .setTitle('Login Form')
      .addButton()
      .addButton()
      .addLink()
      .build();
  }
}

export { Form, IFormBuilder, WindowsFormBuilder, MacFormBuilder, FormDirector };
