// document.addEventListener('DOMContentLoaded', function () {
//   var toggleExtension = document.getElementById('toggleExtension');

//   chrome.storage.sync.get(['enabled'], function (result) {
//     toggleExtension.checked = result.enabled === undefined ? true : result.enabled;
//   });

//   toggleExtension.addEventListener('change', function () {
//     var enabled = toggleExtension.checked;
//     chrome.storage.sync.set({ 'enabled': enabled });
//     chrome.tabs.query({ url: 'https://twitter.com/*' }, function (tabs) {
//       tabs.forEach(function (tab) {
//         chrome.tabs.sendMessage(tab.id, { action: 'toggleExtension', enabled: enabled });
//       });
//     });
//   });
// });

document.addEventListener('DOMContentLoaded', function () {
  // Étape 1: Récupérer le bouton "Activer/Désactiver" dans la popup
  var toggleExtension = document.getElementById('toggleExtension');

  // Étape 2: Récupérer l'état de l'extension dans le stockage local
  chrome.storage.sync.get(['enabled'], function (result) {
    // Si l'état n'est pas encore défini (première exécution), activer l'extension par défaut.
    toggleExtension.checked = result.enabled === undefined ? true : result.enabled;
  });

  // Étape 3: Écouter le changement d'état du bouton "Activer/Désactiver"
  toggleExtension.addEventListener('change', function () {
    var enabled = toggleExtension.checked;

    // Étape 4: Enregistrer l'état de l'extension dans le stockage local
    chrome.storage.sync.set({ 'enabled': enabled });

    // Étape 5: Envoyer un message à content.js pour activer ou désactiver l'extension sur la page Twitter actuellement ouverte
    chrome.tabs.query({ url: 'https://twitter.com/*' }, function (tabs) {
      tabs.forEach(function (tab) {
        chrome.tabs.sendMessage(tab.id, { action: 'toggleExtension', enabled: enabled });
      });
    });
  });
});
