const menuToggle = document.getElementById('menuToggle');
const menuIcon = document.getElementById('menuIcon');
const navigation = document.getElementById('navigation');
const overlay = document.getElementById('overlay');

const iconMenu = 'assets/images/icon-menu.svg';
const iconClose = 'assets/images/icon-menu-close.svg';

function checkScreenWidth() {
  if (window.innerWidth <= 900) {
    menuToggle.style.display = 'block';
  } else {
    menuToggle.style.display = 'none';
    navigation.classList.remove('active');
    overlay.classList.remove('active');
    menuIcon.src = iconMenu;
  }
}

window.addEventListener('load', checkScreenWidth);
window.addEventListener('resize', checkScreenWidth);

menuToggle.addEventListener('click', () => {
  const isOpen = navigation.classList.toggle('active');
  overlay.classList.toggle('active', isOpen);
  menuIcon.src = isOpen ? iconClose : iconMenu;
});

overlay.addEventListener('click', () => {
  navigation.classList.remove('active');
  overlay.classList.remove('active');
  menuIcon.src = iconMenu;
});