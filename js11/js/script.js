//close button en toevoegen aan ieder li item
var myNodeList = document.getElementsByTagName("LI");
var i;
for(i=0;i< myNodeList.length;i++){
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close btn btn-danger btn-sm rounded-circle";
    span.appendChild(txt);
    myNodeList[i].appendChild(span);
}
//click close button en verberg item
var close = document.getElementsByClassName("close");
var i;
for(i=0;i< close.length;i++) {
    close[i].onclick = function(){
        var div = this.parentElement;
        div.style.display = "none";
    }
}


//een nieuw item gaan toevoegen wanneer we klikken op toevoegen
var teller=0;

function newElement(){
    var li = document.createElement("LI");
    var inputValue= document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    li.className = "list-group-item";
    if(inputValue === ""){
        alert("vul ne keer iets jongen, mutten!");
    }else{
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value= "";
    /**kruisje toevoegen en verbergen wanneer we klikken*/
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close btn btn-danger btn-sm rounded-circle";
    span.appendChild(txt);
    li.appendChild(span);
    li.onclick = function(){
        li.style.display = "none";
        teller--;
        var elAantal = document.getElementById("aantal");
        elAantal.innerHTML = teller;
    }
    /**aantal toevoegen*/
    teller++;
    var elAantal = document.getElementById("aantal");
    elAantal.innerHTML = teller;
}
function wissen(){
    var ulList = document.getElementById("myUL");
    ulList.innerHTML="";
    var elAantal = document.getElementById("aantal");
    elAantal.innerHTML = 0;
    teller=0;
}

