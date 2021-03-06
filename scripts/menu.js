const closeMenu = (img) => {
  if (!img) img = document.querySelector('.menu-button img');
  document.querySelector('.logo-text').textContent = 'Welcome';
  img.src = 'images/icon-menu.svg';
  img.alt = 'menu icon';
  const menu = document.querySelector('.menu');
  menu.remove();
};

const newMenuItem = (text, ref) => {
  const anchor = document.createElement('a');
  anchor.href = ref;
  anchor.textContent = text;
  anchor.addEventListener('click', () => closeMenu(null));
  const menuItem = document.createElement('li');
  menuItem.classList.add('menu-item');
  menuItem.appendChild(anchor);
  return menuItem;
};

const openMenu = (img) => {
  document.querySelector('.logo-text').textContent = '';
  img.src = 'images/icon-cancel.svg';
  img.alt = 'cancel icon';

  const menuList = document.createElement('ul');
  menuList.classList.add('menu-items');

  menuList.appendChild(newMenuItem('Portfolio', '#works'));
  menuList.appendChild(newMenuItem('About', '#about'));
  menuList.appendChild(newMenuItem('Contact', '#contact'));

  const menu = document.createElement('div');
  menu.classList.add('menu');
  menu.appendChild(menuList);

  const menuDiv = document.querySelector('#menu-div');
  menuDiv.appendChild(menu);
};

document.querySelector('.menu-button').addEventListener('click', (event) => {
  if (event.target.alt === 'menu icon') {
    openMenu(event.target);
  } else {
    closeMenu(event.target);
  }
});
