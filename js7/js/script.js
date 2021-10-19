/*var source= document.getElementsByClassName("source");
var source = document.querySelectorAll("#source")*/
var source = document.getElementById("source");

var innerHtmlOutput = document.getElementById("innerHtml");
var textContentOutput = document.getElementById("txtContentOutput");
var innerTextOutput = document.getElementById("innerTextOutput");

innerHtmlOutput.value = source.innerHTML;
textContentOutput.value = source.textContent;
innerTextOutput.value = source.innerText;

