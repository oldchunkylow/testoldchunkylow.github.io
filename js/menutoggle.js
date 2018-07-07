    //tab switch
    function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
    
    //revert to visible when tab switched
    var kcol = document.getElementsByClassName("kanjiColumn");
    var hcol = document.getElementsByClassName("hiraganaColumn");
    for (i = 0; i < kcol.length; i++){
        if (kcol[i].style.visibility === "hidden"){
            kcol[i].style.visibility = "visible";
        }
    }
    for (i = 0; i < hcol.length; i++){
        if (hcol[i].style.visibility === "hidden"){
            hcol[i].style.visibility = "visible";
        }
    }
    
    //unhighlight when switched
    var hbutton = document.getElementsByClassName("hideButton");
    for (i = 0; i < hbutton.length; i++){
    if(hbutton[i].style.color === "#ddd"){
           hbutton[i].style.color = "";
       } else {
          hbutton[i].style.color = ""; 
       }
   }
}

    
//visibility switch
function toggleKH(){
    var i;
    var kcol = document.getElementsByClassName("kanjiColumn");
    var hcol = document.getElementsByClassName("hiraganaColumn");

    //turn off kanji
    for (i = 0; i < kcol.length; i++){
        if (kcol[i].style.visibility === "hidden"){
            kcol[i].style.visibility = "visible";
        } else {
            kcol[i].style.visibility = "hidden";
        }
    }
    //turn off hiragana
    for (i = 0; i < hcol.length; i++){
        if (hcol[i].style.visibility === "hidden"){
            hcol[i].style.visibility = "visible";
        } else {
            hcol[i].style.visibility = "hidden";
        }
    }
    var hbutton = document.getElementsByClassName("hideButton");
    for (i = 0; i < hbutton.length; i++){
    if(hbutton[i].style.color === ""){
           hbutton[i].style.color = "#ddd";
       } else {
          hbutton[i].style.color = ""; 
       }
   }
}
 
