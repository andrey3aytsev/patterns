import { ButtonAdapter } from './adapter';
import { LegacyButton } from '../models';

// Using legacy button through adapter
const legacyButton = new LegacyButton();
const adaptedButton = new ButtonAdapter(legacyButton);

console.log(adaptedButton.render());
adaptedButton.onClick();

