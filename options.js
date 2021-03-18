// Saves options to chrome.storage
function save_options() {
  var session_active = document.getElementById('session_active').value;
  var is_active = document.getElementById('is_active').checked;
  var blacklist = document.getElementById('blacklist').value
  chrome.storage.sync.set({
    sessionActive: session_active,
    isActive: is_active,
    blacklist: blacklist
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.sync.get({
    sessionActive: 'Hiver 2021;Dossier',
    isActive: true,
    blacklist: ''
  }, function(items) {
    document.getElementById('session_active').value = items.sessionActive;
    document.getElementById('is_active').checked = items.isActive;
    document.getElementById('blacklist').value = items.blacklist;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);
