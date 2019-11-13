const links = document.querySelectorAll('.sidebar ul li');
console.log('Links', links);
const sections = document.querySelectorAll('section');
console.log('Sections',sections);


function update() {
  const activeLink = document.querySelector('.sidebar ul li.active');
  console.log('Desavtivated link', activeLink);
  activeLink.classList.remove('active');
  const activeSection = document.querySelector('section.visible');
  activeSection.classList.remove('visible');
  console.log('Desactivated section', activeSection);
}



for (let singleLink of links) {
  singleLink.addEventListener('click', function() {
    const clickedElement = this;
    update();
    clickedElement.classList.add('active');
    const target = clickedElement.getAttribute('target');
    const targetSection = document.querySelector(target);
    targetSection.classList.add('visible');

  });
}
