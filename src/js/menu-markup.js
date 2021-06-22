import template from '../templates/menu-items.hbs';
import menuItems from '../menu.json';

const menuList = document.querySelector('.menu');

const createMenuMarkup = template(menuItems);

menuList.insertAdjacentHTML('beforeend', createMenuMarkup);
