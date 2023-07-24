# Retirer les posts twitter qui contiennent un badge vérifié

Voici un plan étape par étape pour créer une extension Chrome qui retire les tweets contenant un badge vérifié sur Twitter :

## Étape 1 : Planification

Dans cette étape palpitante, nous allons plonger tête la première dans la création de notre incroyable extension Chrome ! L'objectif de cette petite merveille technologique est aussi simple que puissant : retirer tous ces tweets arrogants et vaniteux arborant fièrement un badge vérifié sur Twitter. Vous savez, ces petits symboles bleus qui nous narguent, comme s'ils avaient découvert la recette secrète du succès en ligne !

Mais ne vous inquiétez pas, nous sommes prêts à relever ce défi. Pour y parvenir, nous devrons faire appel à une équipe de technologies sensationnelles. D'abord, nous allons mêler le HTML à un soupçon de CSS pour créer une interface utilisateur époustouflante. Imaginez une extension qui se fond parfaitement dans votre navigateur, comme un caméléon numérique prêt à traquer ces tweets insolents !

Bien sûr, nous ne pouvons pas oublier notre allié le JavaScript, ce magicien du code qui apportera la logique nécessaire à notre extension. Grâce à lui, nous pourrons interagir avec le DOM de Twitter et éradiquer sans pitié ces tweets arrogants.

Mais, pour que notre extension soit une véritable star, nous aurons besoin de l'aide des API de Chrome, ces interfaces de programmation qui nous ouvriront les portes du navigateur. Nous ferons notamment appel à la puissante API chrome.tabs pour accéder aux onglets et identifier la page du fil d'actualités Twitter. Et bien sûr, l'API chrome.storage nous permettra de garder en mémoire l'état de notre extension, car il serait dommage qu'elle perde la mémoire et oublie son noble devoir !

Ah, les joies de la manipulation du DOM ! Cette sorte de carte au trésor qui révèle tous les secrets cachés d'une page web. Grâce à cette compétence secrète, nous pouvons explorer les profondeurs du code HTML d'un site comme de vrais aventuriers numériques. Imaginez que chaque élément sur la page web est un membre de cette grande famille du DOM. Les éléments ont des parents, des enfants et des cousins éloignés. Ils sont tous connectés les uns aux autres, formant ainsi une toile complexe de relations.

Mais voici le truc le plus cool : avec JavaScript, nous pouvons interagir avec cette famille du DOM. Nous pouvons les repérer, les attraper et même changer leur apparence ! 

En utilisant notre compétence secrète de la manipulation du DOM, notre extension Chrome deviendra une véritable héroïne, débarrassant le monde de Twitter de ces tweets trop sûrs d'eux. Et tout cela avec un soupçon d'humour et de passion pour explorer les mystères du web et de la technologie.

Mais attendez, avant de nous lancer tête baissée, souvenons-nous de notre côté rebelle et respectons les règles de Twitter. Il serait malheureux de provoquer une révolution numérique qui enfreindrait leurs politiques. Alors, assurons-nous que notre extension reste dans les limites acceptées pour ne pas se retrouver bannis du royaume de Twitter !

Avec une vision claire de notre objectif, les technologies à notre disposition et les API de Chrome que nous dompterons, nous sommes parés pour entrer dans la danse en créant notre extension ! La magie de l'art numérique des années 1980 n'a qu'à bien se tenir, car notre création pourrait bien faire tourner les têtes et déclencher une nouvelle révolution numérique ! En avant, vers cette aventure technologique passionnante !

## Étape 2 : Création du projet

Maintenant que nous avons une planification claire, nous allons créer le projet de notre extension Chrome. Suivez les étapes ci-dessous pour mettre en place les fichiers de base :

1. Ouvrir un éditeur de texte ou un IDE :
   Assurez-vous d'avoir un éditeur de texte ou un environnement de développement intégré (IDE) installé sur votre ordinateur. Vous pouvez utiliser des outils populaires tels que Visual Studio Code, Sublime Text, Atom, etc.

2. Créer un nouveau dossier pour l'extension :
   - Créez un nouveau dossier sur votre ordinateur, et nommez-le par exemple "RemoveVerifiedTweets". C'est le dossier principal de notre extension.

3. Créer les fichiers principaux :
   - À l'intérieur du dossier "RemoveVerifiedTweets", créez les fichiers principaux suivants :

   a. `manifest.json` :
      - Le fichier `manifest.json` est le fichier de configuration principal de l'extension, et il doit être présent à la racine du dossier de l'extension.
      - Ouvrez un nouvel onglet dans votre éditeur de texte, collez le code ci-dessous, et enregistrez le fichier en tant que "manifest.json".

```json
{
  "manifest_version": 3,
  "name": "Remove Verified Tweets",
  "version": "1.0",
  "description": "Remove twitter pay to win ! An extension to remove tweets with a verified badge on Twitter.",
  "permissions": ["tabs"],
  "host_permissions": ["https://twitter.com/*"],
  "action": {
    "default_popup": "popup.html",
    "defaut_title": "Remove Verified Tweets",
    "default_icon": {
      "32": "/images/logo-32.png",
      "128": "/images/logo-128.png"
    }
  },
  "optional_host_permissions": ["*://*/*"],
  "content_scripts": [
    {
      "matches": ["https://twitter.com/*"],
      "js": ["content.js"]
    }
  ],
  "icons": {
    "32": "/images/logo-32.png",
    "128": "/images/logo-128.png"
  }
}
```

   b. `popup.html` :
      - Le fichier `popup.html` sera notre interface utilisateur pour activer ou désactiver l'extension.
      - Créez un nouveau fichier dans le dossier "RemoveVerifiedTweets", collez le code ci-dessous, et enregistrez-le en tant que "popup.html".

```html
<!DOCTYPE html>
<html>
<head>
  <title>Remove Verified Tweets</title>
  <link rel="stylesheet" href="popup.css">
</head>
<body>
  <h1>Remove Verified Tweets</h1>
  <label class="switch">
    <input type="checkbox" id="toggleExtension">
    <span class="slider round"></span>
  </label>
  <script src="popup.js"></script>
</body>
</html>
```

   c. `popup.css` (facultatif) :
      - Le fichier `popup.css` est un fichier CSS facultatif qui permet de styliser l'interface utilisateur de l'extension. Vous pouvez l'ajouter pour personnaliser l'apparence de la popup. Créez un nouveau fichier dans le dossier "RemoveVerifiedTweets", collez le code ci-dessous et enregistrez-le en tant que "popup.css" :

```css
body {
  font-family: Arial, sans-serif;
  text-align: center;
}

h1 {
  margin: 20px;
}

.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input {
  display: none;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #2196F3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
```

   d. `popup.js` :
      - Le fichier `popup.js` contiendra le code JavaScript pour gérer le comportement de l'interface utilisateur et enregistrer l'état de l'extension.
      - Créez un nouveau fichier dans le dossier "RemoveVerifiedTweets", collez le code ci-dessous et enregistrez-le en tant que "popup.js" :

```javascript
document.addEventListener('DOMContentLoaded', function () {
  var toggleExtension = document.getElementById('toggleExtension');

  chrome.storage.sync.get(['enabled'], function (result) {
    toggleExtension.checked = result.enabled === undefined ? true : result.enabled;
  });

  toggleExtension.addEventListener('change', function () {
    var enabled = toggleExtension.checked;
    chrome.storage.sync.set({ 'enabled': enabled });
    chrome.tabs.query({ url: 'https://twitter.com/*' }, function (tabs) {
      tabs.forEach(function (tab) {
        chrome.tabs.sendMessage(tab.id, { action: 'toggleExtension', enabled: enabled });
      });
    });
  });
});
```


## Étape 3 : Intégration de l'API Twitter (content.js)

Dans cette étape, nous allons implémenter la logique pour interagir avec le contenu de la page Twitter et retirer les tweets avec un badge vérifié. Pour cela, nous utiliserons le fichier `content.js` que nous avons créé précédemment.

1. Ouvrez le fichier `content.js` que nous avons créé précédemment (dans le dossier "RemoveVerifiedTweets").
    
2. Ajoutez le code JavaScript suivant pour interagir avec le contenu de la page Twitter et retirer les tweets avec un badge vérifié :

```javascript

function removeVerifiedTweets() {
  const tweetsContainer = document.getElementById("react-root"); 
  const observer = new MutationObserver((mutationsList, observer) => {
    mutationsList.forEach((mutation) => {
      if (mutation.type === "childList" && mutation.addedNodes.length > 0) {
        mutation.addedNodes.forEach((addedNode) => {
          const verifiedBadges = addedNode.querySelectorAll("svg");

          verifiedBadges.forEach(function (badge) {
            const ariaLabel = badge.getAttribute("aria-label");
            if (ariaLabel && ariaLabel == "Verified account") {
              var maxIterations = 13;
              var currentElement = badge;

              while (maxIterations != 0) {
                currentElement = currentElement.parentElement;
                maxIterations--;
              }

              console.log("Tweet retiré");
              currentElement.style.display = "none";
            }
          });
        });
      }
    });
  });

  var config = {
    attributes: true,
    childList: true,
    characterData: true,
    subtree: true,
  };
  
  observer.observe(tweetsContainer, config);
}

removeVerifiedTweets();

```

4. Ajouter les icônes (facultatif) :
   - Vous pouvez également ajouter des icônes pour votre extension en créant des fichiers "icon16.png", "icon48.png" et "icon128.png" (tailles respectives de 16x16, 48x48 et 128x128 pixels). Placez ces fichiers dans le même dossier que le fichier "manifest.json".

Après avoir suivi ces étapes, vous avez maintenant créé les fichiers de base pour votre extension Chrome. Dans l'étape suivante, nous ajouterons la logique pour activer et désactiver l'extension via l'interface utilisateur.

## Étape 5: Test et débogage

Après avoir implémenté les fonctionnalités de l'extension, il est important de la tester sur différentes situations et effectuer le débogage si nécessaire. Voici quelques étapes pour tester l'extension :

1. Chargez l'extension dans Chrome :
    - Ouvrez le navigateur Chrome et accédez à la page des extensions (chrome://extensions/).
    - Activez le "mode développeur" en cliquant sur le bouton en haut à droite de la page.
    - Cliquez sur "Chargez l'extension non empaquetée" et sélectionnez le dossier "RemoveVerifiedTweets" qui contient les fichiers de l'extension.

1. Testez l'extension sur Twitter 
    - Allez sur la page Twitter ([https://twitter.com/](https://twitter.com/)) et assurez-vous que l'extension est chargée correctement (vous devriez voir l'icône de l'extension dans la barre d'outils du navigateur).
    - Activez et désactivez l'extension en cliquant sur le bouton "Activer/Désactiver" dans la popup. Vérifiez que les tweets avec un badge vérifié sont masqués lorsque l'extension est activée, et qu'ils sont restaurés lorsque l'extension est désactivée.

1. Vérifiez les erreurs dans la console :
    - Ouvrez la console de développement de Chrome en cliquant avec le bouton droit de la souris sur la page Twitter, puis en sélectionnant "Inspecter" ou en appuyant sur les touches "Ctrl + Shift + J" (Windows/Linux) ou "Cmd + Option + J" (Mac).
    - Recherchez d'éventuelles erreurs ou avertissements liés à l'extension dans la console. Corrigez les problèmes rencontrés si nécessaire.

1. Testez sur différentes pages Twitter :
    - Testez l'extension sur différentes pages Twitter, y compris les pages de profil, les pages de recherche et les pages de listes, pour vous assurer qu'elle fonctionne correctement dans toutes les situations.

1. Testez sur différentes tailles d'écran :
    - Testez l'extension sur différentes tailles d'écran pour vous assurer qu'elle est réactive et fonctionne bien sur tous les appareils.

1. Vérifiez les politiques de Twitter :
    - Assurez-vous que l'extension respecte les politiques de Twitter concernant les modifications apportées au contenu. Évitez de violer les conditions d'utilisation de la plateforme.


## Étape 6: Emballage et distribution

Si vous souhaitez distribuer publiquement votre extension, vous devez l'emballer dans un fichier .crx. Voici comment procéder :

1. Assurez-vous que votre extension fonctionne correctement après avoir passé les tests.
    
2. Allez sur la page des extensions Chrome (chrome://extensions/).
    
3. Cliquez sur "Emballer l'extension" et suivez les instructions pour créer le fichier .crx.
    
4. Vous pouvez ensuite soumettre l'extension au Chrome Web Store pour qu'elle soit disponible publiquement, ou distribuer manuellement le fichier .crx à vos utilisateurs.
    

N'oubliez pas que si vous prévoyez de distribuer l'extension publiquement, vous devez respecter les règles et les politiques du Chrome Web Store, y compris les directives pour les extensions de Chrome.

Cela conclut le processus de création d'une extension Chrome qui retire les tweets contenant un badge vérifié sur Twitter. N'hésitez pas à affiner et améliorer l'extension en fonction de vos besoins spécifiques. Bon développement !
