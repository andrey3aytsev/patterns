import { MacFormBuilder, FormDirector } from './builder';

const macBuilder = new MacFormBuilder();
const director = new FormDirector(macBuilder);
const loginForm = director.buildLoginForm();
console.log(loginForm.render());
