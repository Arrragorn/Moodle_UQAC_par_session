
chrome.storage.sync.get({
  sessionActive: 'Hiver 2021',
  isActive: true
}, function(items) {
  if(items.isActive)
  {
    var dropdowns = document.getElementsByClassName("dropdown");
    for (i = 0; i < dropdowns.length; i++) {
      var a = dropdowns[i].getElementsByTagName("a");
      if(a[0].title == "Mes cours") {
        var lis = dropdowns[i].getElementsByTagName("li");
        for (j=0; j< lis.length; j++){
          if(!lis[j].innerText.includes(items.sessionActive))
            lis[j].hidden = true;
        }
      }
    }
  }
});
