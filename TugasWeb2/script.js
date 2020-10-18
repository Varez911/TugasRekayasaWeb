const industrialButton = document.getElementById('industrial');
const tradisionalButton = document.getElementById('tradisional');

const body = document.body;

// Saving Cache theme to local storage
const theme = localStorage.getItem('theme');

if (theme){
  body.classList.add(theme);
  if (theme == 'industrial'){
    document.getElementById('icon-tradisional').style.opacity=0;
    document.getElementById('icon-industrial').style.opacity=1;
  }
  else if(theme == 'tradisional'){
    document.getElementById('icon-tradisional').style.opacity=1;
    document.getElementById('icon-industrial').style.opacity=0;
  }
  
}

// Button Click Event

industrialButton.onclick = () => {
  
  document.getElementById('icon-tradisional').style.opacity=0;
  document.getElementById('icon-industrial').style.opacity=1;
  
  body.classList.replace('tradisional', 'industrial');
  localStorage.setItem('theme', 'industrial');

  document.getElementById('title').innerHTML='Industrial Matrix';
};

tradisionalButton.onclick = () => {
  document.getElementById('icon-tradisional').style.opacity=1;
  document.getElementById('icon-industrial').style.opacity=0;

  body.classList.replace('industrial', 'tradisional');
  localStorage.setItem('theme', 'tradisional');

  document.getElementById('title').innerHTML='Tradisional Matrix';
};