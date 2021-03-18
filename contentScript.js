//setTimeout(() => {
chrome.storage.sync.get({
  sessionActive: 'Hiver 2021;Dossier',
  isActive: true,
  blacklist:''
}, function(items)
{
  if(items.isActive)
  {
    motsActifs = items.sessionActive.split(';')
    var motsMorts = []
    if(items.blacklist != ''){
      motsMorts = items.blacklist.split(';')
    }
    var dropdowns = document.getElementsByClassName("dropdown");
    for (i = 0; i < dropdowns.length; i++)
    {
      var a = dropdowns[i].getElementsByTagName("a");
      if(a[0].title == "Mes cours")
      {
        var lis = dropdowns[i].getElementsByTagName("li");
        for (j=0; j< lis.length; j++)
        {
          var estMotActif = false;
          for (k=0;k<motsActifs.length;k++)
          {
            if(lis[j].innerHTML.includes(motsActifs[k]))
            {
              estMotActif=true
            }
          }
          for (k=0;k<motsMorts.length;k++)
          {
            if(lis[j].innerHTML.includes(motsMorts[k]))
            {
              estMotActif=false
            }
          }
          lis[j].hidden = !estMotActif;
        }
      }
    }
  }
});
//}, 1000);
