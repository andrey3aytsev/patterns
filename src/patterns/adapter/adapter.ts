import { IButton, LegacyButton } from '../models';

// Adapter - makes Adaptee compatible with Target
class ButtonAdapter implements IButton {
  constructor(private legacyButton: LegacyButton) {}

  render(): string {
    return this.legacyButton.display();
  }

  onClick(): void {
    this.legacyButton.handleClick();
  }
}

export { ButtonAdapter };

