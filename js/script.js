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
  menu.classList.toggle('show');
  menu.classList.toggle('hidden');
  const sidebar = document.querySelector('.sidebar');
  sidebar.classList.toggle('short');
  const inner = document.querySelector('.inner');
  inner.classList.toggle('full-width');
}

document.querySelector('.hamburger').addEventListener('click', function() {
  toggleMenu();
});


function closeModal() {
  document.getElementById('overlay').classList.remove('show');
}

document.querySelectorAll('#overlay .js--close-modal').forEach(function(btn) {
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    closeModal();
  });
});

document.querySelector('#overlay').addEventListener('click', function(e) {
  if(e.target === this) {
    closeModal();
  }
});

function openModal(modal) {
  document.querySelectorAll('#overlay > *').forEach(function(modal) {
    modal.classList.remove('show');
  });
  document.querySelector('#overlay').classList.add('show');
  document.querySelector(modal).classList.add('show');
}

const quits = document.querySelectorAll('.icon-quit');

for (let quit of quits) {
  quit.addEventListener('click', function() {
    openModal('#myModal');
  });
}

var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
  // 1
  type: 'bar',
  data: {
    // 2
    labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"],
    // 3
    datasets: [{
    // 4
      label: "Signups",
      // 5
      backgroundColor: '#8DBEC8',
      borderColor: '#8DBEC8',
      // 6
      data: [ 52, 51, 41, 94, 26, 6, 72, 9, 21, 88 ],
    },
    {
      label: "FTD",
      backgroundColor: '#F29E4E',
      borderColor: '#F29E4E',
      data: [ 6, 72, 1, 0, 47, 11, 50, 44, 63, 76 ],
    },
    {
      label: "Earned",
      backgroundColor: '#71B374',
      borderColor: '#71B374',
      data: [ 59, 49, 68, 90, 67, 41, 13, 38, 48, 48 ],
      // 7
      hidden: true,
    }]
  },
});
