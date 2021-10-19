var alleBMW = document.querySelectorAll('.mercedes');

var result = "document.querySelectorAll('.bmw')";

for(var i=0 ;i < alleBMW.length;i++){
    result += "\n " + alleBMW[i].textContent;
    console.log(result);
}
document.getElementById('resultArea').value = result;

