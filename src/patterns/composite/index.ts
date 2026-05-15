import { Panel } from './composite';
import { MacButton, MacLink, WindowsButton, WindowsLink } from '../models';

const mainPanel = new Panel('Main');

const header = new Panel('Header');
header.add(new WindowsButton());
header.add(new WindowsLink());

const footer = new Panel('Footer');
footer.add(new MacButton());
footer.add(new MacLink());

mainPanel.add(header);
mainPanel.add(footer);
mainPanel.add(new WindowsButton());

console.log(mainPanel.render());
mainPanel.onClick();
