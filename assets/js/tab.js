openTab(event, "second_year", 1);
function openTab(evt, sectionName, level) {
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
  evt.currentTarget.className += " active";
}
