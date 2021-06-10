function openTab(eve,option) {

    var tabcontent = document.getElementsByClassName("tab-content");
    for (var i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    var tablinks = document.getElementsByClassName("tab-link");
    for (var i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active ", "");
    }
  
    document.getElementById(option).style.display = "block";
    eve.currentTarget.className += " active ";
}

function ChangeBackground(){
  var valor = document.body.classList;
  if(valor.contains('themeB')){
    document.body.classList.replace("themeB","themeA");
  }
  else if(valor.contains('themeA')){
    document.body.classList.replace("themeA","themeB");
  }
}