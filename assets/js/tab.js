openTab(null, "second_year", 1);
openTab(null, "ml_tool", 2);
openTab(null, "2page", 1);
function openTab(evt, sectionName, level) {
  if (document.getElementById(sectionName)){
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      if(tabcontent[i].className.split(" ")[1] >= level){
        tabcontent[i].style.display = "none";
      }
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      if(tablinks[i].className.split(" ")[1] >= level){
        tablinks[i].className = tablinks[i].className.replace(" active", "");
      }
    }
    document.getElementById(sectionName).style.display = "block";
    if (evt){
      evt.currentTarget.className += " active";
    } else {
      document.getElementsByName("default tab").forEach(function (item, index){
        item.className += " active";
      });
    }
  }
}
