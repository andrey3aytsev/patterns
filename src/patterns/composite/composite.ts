import { IButton, ILink } from '../models';

// Component
interface IUIComponent {
  render(): string;
  onClick(): void;
}

// Leaf
type UILeaf = IButton | ILink;

// Composite
class Panel implements IUIComponent {
  private readonly children: IUIComponent[] = [];

  constructor(private readonly title: string) {}

  add(child: IUIComponent): void {
    this.children.push(child);
  }

  remove(child: IUIComponent): void {
    const index = this.children.indexOf(child);
    if (index !== -1) {
      this.children.splice(index, 1);
    }
  }

  render(): string {
    const renderedChildren = this.children
      .map((child) => child.render())
      .join(', ');
    return `Panel "${this.title}" [${renderedChildren}]`;
  }

  onClick(): void {
    console.log(`click Panel "${this.title}"`);
    this.children.forEach((child) => child.onClick());
  }
}

export { IUIComponent, UILeaf, Panel };
