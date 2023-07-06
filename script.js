const speakers = [
  {
    id: 1,
    speakerName: 'Mozamel Jawad',
    speakerPosition: 'Database and Software Developer',
    imgSource: 'assets/speakers/1.JPG',
    description: 'He has Studied Computer Science Faculty at Kabul University, and currently working as a Senior Database and Software Developer with ABC Company',
  },
  {
    id: 2,
    speakerName: 'Modasir Jawad',
    speakerPosition: 'Database General Manager',
    imgSource: 'assets/speakers/2.jpg',
    description: 'He has Studied Computer Science Faculty at Nangrahar University, and currently working as a Database and Software Manager with CBA Company',
  },
  {
    id: 3,
    speakerName: 'M.Mozamel Jawad',
    speakerPosition: 'Full Stack Developer',
    imgSource: 'assets/speakers/3.JPG',
    description: 'He has Studied Computer Science at Kabul University, and currently working as a Senior Database and Software Developer with ABC Company',
  },
  {
    id: 4,
    speakerName: 'Ahmad Jawad',
    speakerPosition: 'Database and Software Developer',
    imgSource: 'assets/speakers/1.JPG',
    description: 'He has Studied Computer Science Faculty at Kabul University, and currently working as a Senior Database and Software Developer with ABC Company',
  },
  {
    id: 5,
    speakerName: 'M. Modasir Jawad',
    speakerPosition: 'Database General Manager',
    imgSource: 'assets/speakers/2.jpg',
    description: 'He has Studied Computer Science Faculty at Nangrahar University, and currently working as a  Database and Software Manager with CBA Company',
  },
  {
    id: 6,
    speakerName: 'Jawad Mozamel',
    speakerPosition: 'Full Stack Developer',
    imgSource: 'assets/speakers/3.JPG',
    description: 'He has Studied Computer Science at Kabul University, and currently working as a Senior Database and Software Developer with ABC Company',
  },

];

speakers.forEach((speaker) => {
  const speakerSection = document.getElementById('mainSection');
  const partDiv = document.createElement('div');
  partDiv.className = 'col-md-5';
  partDiv.className = 'speaker-card';
  partDiv.innerHTML = `
        <div class="speaker">
                <img src="${speaker.imgSource}" alt="speaker image" class="img-fluid speaker-photo">
            </div> 
            <div class="speaker-info">
                <h1 class="name">${speaker.speakerName}</h1>
                <p class="speaker-job">${speaker.speakerPosition}</p>
                <div class="left-line"></div>
                <p class="speaker-exp">${speaker.description}</p>
            </div>`;

  speakerSection.append(partDiv);
});

function ShowXicon() {
  const iconMenu = document.getElementById('meneIcon');
  const iconX = document.getElementById('Xicon');

  iconX.style.display = 'inline';
  iconMenu.style.display = 'none';
}

ShowXicon();

function removeXiocn() {
  const iconMenu = document.getElementById('meneIcon');
  const iconX = document.getElementById('Xicon');

  iconX.style.display = 'none';
  iconMenu.style.display = 'block';
}

removeXiocn();