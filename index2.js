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
