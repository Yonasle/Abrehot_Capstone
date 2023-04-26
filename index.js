const xMark = document.querySelector('.x-mark');
const openMenu = document.querySelector('.hamburger');

xMark.addEventListener('click', () => {
  const mobileMenu = document.querySelector('.mobile-menu');
  const head = document.querySelector('header');
  mobileMenu.style.display = 'none';
  head.style.display = 'block';
});

openMenu.addEventListener('click', () => {
  const mobileMenu = document.querySelector('.mobile-menu');
  const head = document.querySelector('header');
  mobileMenu.style.display = 'block';
  head.style.display = 'none';
});

const investors = [
  {
    img: 'images/reagan.png',
    heading: 'David Paul',
    info: 'Professor in AAU',
    details:
      'He will Advice you in Computer related studies Every Friday Afternoon. ',
  },
  {
    img: 'images/julia.png',
    heading: 'Barnabas',
    info: 'Doctor at Lancet',
    details: 'She will Advice you in Medical related research every Sunday.',
  },
  {
    img: 'images/kilnam.png',
    heading: 'Peter Paul',
    info: 'Engineer at EEPCO',
    details:
      'He will Advice you in Electrical related studies Every Monday Morning.',
  },
  {
    img: 'images/lila.png',
    heading: 'Oyedepo Elia',
    info: 'Manager at Feres',
    details:
      'He will Advice you in Management related studies Every Saturday Afternoon. ',
  },
  {
    img: 'images/yochai.png',
    heading: 'Tumaini Maganiko',
    info: 'Doctor at Amanuel',
    details:
      'He will Advice you in Psychiaty related studies Every Friday Afternoon.',
  },
  {
    img: 'images/sohyeong.png',
    heading: 'John Barnabas',
    info: 'Manager at Queens ',
    details:
      'She will Advice you in Marketing related studies Every Sunday Afternoon. ',
  },
];

const featured = document.querySelector('.partcipants');

investors.forEach((value) => {
  const div = document.createElement('div');
  div.className = 'd-flex align-items-center';
  div.innerHTML = `
    <div class="x-shade">
      <img src="${value.img}" alt="Investor">
      <div class="inner-div"></div>
    </div>
    <div class="content">
        <h3>${value.heading}</h3>
        <p class="info">${value.info}</p>
        <p>${value.details}</p>
    </div>
    `;
  featured.appendChild(div);
});
