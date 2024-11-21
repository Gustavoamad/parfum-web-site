document.addEventListener("DOMContentLoaded", function() {
    const duftElement = document.getElementById('duft');
    const dropdownMenu = document.getElementById('dropdownMenu');

    duftElement.addEventListener('click', function() {
        if (dropdownMenu.style.display === 'block') {
            dropdownMenu.style.display = 'none';
        } else {
            // Positionner le menu déroulant sous l'élément cliqué
            const rect = duftElement.getBoundingClientRect();
            dropdownMenu.style.left = `${rect.left}px`;
            dropdownMenu.style.top = `${rect.bottom}px`;
            dropdownMenu.style.display = 'block';
        }
    });

    // Fermer le menu déroulant si l'utilisateur clique en dehors
    document.addEventListener('click', function(event) {
        if (!duftElement.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.style.display = 'none';
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const uberElement = document.getElementById('uber');
    const dropdownMenu2 = document.getElementById('dropdownMenu2');

    uberElement.addEventListener('click', function() {
        if (dropdownMenu2.style.display === 'block') {
            dropdownMenu2.style.display = 'none';
        } else {
            // Positionner le menu déroulant sous l'élément cliqué
            const rect = uberElement.getBoundingClientRect();
            dropdownMenu2.style.left = `${rect.left}px`;
            dropdownMenu2.style.top = `${rect.bottom}px`;
            dropdownMenu2.style.display = 'block';
        }
    });

    // Fermer le menu déroulant si l'utilisateur clique en dehors
    document.addEventListener('click', function(event) {
        if (!uberElement.contains(event.target) && !dropdownMenu2.contains(event.target)) {
            dropdownMenu2.style.display = 'none';
        }
    });
});


document.addEventListener("DOMContentLoaded", function() {
  const langueElement = document.getElementById('blog');
  const dropdownMenu3 = document.getElementById('dropdownMenu3');

  langueElement.addEventListener('click', function() {
      if (dropdownMenu3.style.display === 'block') {
          dropdownMenu3.style.display = 'none';
      } else {
          // Positionner le menu déroulant sous l'élément cliqué
          const rect = langueElement.getBoundingClientRect();
          dropdownMenu3.style.left = `${rect.left}px`;
          dropdownMenu3.style.top = `${rect.bottom}px`;
          dropdownMenu3.style.display = 'block';
      }
  });

  // Fermer le menu déroulant si l'utilisateur clique en dehors
  document.addEventListener('click', function(event) {
      if (!langueElement.contains(event.target) && !dropdownMenu3.contains(event.target)) {
          dropdownMenu3.style.display = 'none';
      }
  });
});


/*
let translations = {};

// Charger les traductions pour une langue donnée
function loadTranslations(lang) {
  fetch(`/${lang}.json`)
    .then(response => response.json())
    .then(data => {
      translations = data;
      updateContent();
    })
    .catch(error => console.error('Error loading translations:', error));
}

// Mettre à jour le contenu en fonction des traductions chargées
function updateContent() {
  document.querySelectorAll('.i18n').forEach(element => {
    const key = element.getAttribute('data-key');
    const translation = getTranslation(key);
    if (translation) {
      if (element.tagName === 'IMG') {
        element.alt = translation; // Utiliser la traduction pour l'attribut alt des images
      } else {
        element.innerHTML = translation;
      }
    }
  });
}

// Obtenir la traduction pour une clé donnée
function getTranslation(key) {
  return key.split('.').reduce((obj, keyPart) => obj && obj[keyPart], translations);
}

// Gérer le changement de langue
function setLanguage(lang) {
  localStorage.setItem('language', lang);
  loadTranslations(lang);
}

// Événements pour changer la langue
document.getElementById('lang-en').addEventListener('click', () => setLanguage('en'));
document.getElementById('lang-fr').addEventListener('click', () => setLanguage('fr'));

// Charger la langue stockée au démarrage
function loadStoredLanguage() {
  const storedLang = localStorage.getItem('language') || 'en';
  loadTranslations(storedLang);
}

loadStoredLanguage(); // Charger la langue au démarrage
*/