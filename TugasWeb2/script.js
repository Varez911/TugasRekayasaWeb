const industrialButton = document.getElementById('industrial');
const tradisionalButton = document.getElementById('tradisional');

const body = document.body;

// Button Click Event

industrialButton.onclick = () => {
  
  document.getElementById('icon-tradisional').style.opacity=0;
  document.getElementById('icon-industrial').style.opacity=1;
  //document.getElementById('icon').src='img/industrial.png';
  //document.getElementById('icon').style.opacity=1;
  body.classList.replace('tradisional', 'industrial');
  document.getElementById('title').innerHTML='Industrial Matrix';
};

tradisionalButton.onclick = () => {
  //document.getElementById('icon').src='img/tradisional.png';
  document.getElementById('icon-tradisional').style.opacity=1;
  document.getElementById('icon-industrial').style.opacity=0;
  //document.getElementById('bg-image').style.background= 'url(img/Flower.gif)';
  body.classList.replace('industrial', 'tradisional');
  document.getElementById('title').innerHTML='Tradisional Matrix';
};