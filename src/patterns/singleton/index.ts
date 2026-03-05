import { UIThemeManager } from './singleton';

const themeManager1 = UIThemeManager.getInstance();
console.log('\nCreated theme manager 1:', themeManager1.getThemeInfo());

themeManager1.setPlatform('windows');
console.log('Set platform to:', themeManager1.getPlatform());

const themeManager2 = UIThemeManager.getInstance();
console.log('Created theme manager 2:', themeManager2.getThemeInfo());

console.log(
  'themeManager1 === themeManager2:',
  themeManager1 === themeManager2
);

themeManager2.setPlatform('mac');
console.log(
  'Changed platform via themeManager2 to:',
  themeManager1.getPlatform()
);
console.log(themeManager1.getThemeInfo());
