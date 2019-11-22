const links = document.querySelectorAll('.sidebar ul li');

function disactivate() {
  const activeLink = document.querySelector('.sidebar ul li.active');
  activeLink.classList.remove('active');
  const activeSection = document.querySelector('section.visible');
  activeSection.classList.remove('visible');
}

for (let singleLink of links) {
  singleLink.addEventListener('click', function() {
    const clickedElement = this;
    disactivate();
    clickedElement.classList.add('active');
    const target = clickedElement.getAttribute('date-target');
    const targetSection = document.querySelector(target);
    targetSection.classList.add('visible');

  });
}


function toggleMenu() {
  const menu = document.querySelector('.sidebar-inner');
  console.log('menu', menu);
  menu.classList.toggle('show');
  const sidebar = document.querySelector('.sidebar');
  sidebar.classList.add('fullHeight');
}

document.querySelector('.hamburger').addEventListener('click', function() {
  toggleMenu();
});
