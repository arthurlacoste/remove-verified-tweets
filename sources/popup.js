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
