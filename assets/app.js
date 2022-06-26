const botton = document.querySelector('#toggle');
const header = document.querySelector('#parallax');
const navigation = document.querySelector('.navigation');
const about = document.querySelector('.about-area');
const work = document.querySelector('.work-area');
const contact = document.querySelector('.contact-area');
const technogies = document.querySelector('.technogies-area');
const footer = document.querySelector('.footer-widget');

botton.addEventListener('click', () => {
  console.log('clicked');
  navigation.style.backgroundColor = '#000000';
  navigation.style.color = '#ffffff';
  header.style.backgroundColor = '#000000';
  header.style.color = '#ffffff';
  about.style.backgroundColor = '#000000';
  about.style.color = '#ffffff';
  work.style.backgroundColor = '#000000';
  work.style.color = '#ffffff';
  contact.style.backgroundColor = '#000000';
  contact.style.color = '#ffffff';
  technogies.style.backgroundColor = '#000000';
  // footer.style.backgroundColor = '#001111';
  // footer.style.color = '#ffffff';

});