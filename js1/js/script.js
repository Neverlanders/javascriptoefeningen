/** es5 µ
 * var is functionScoped
 */
/** FUNCTIONS **/
function functionScoped(test){
    if(test){
        var naam = "Tom";
    }
    console.log(naam);
}
/** programma **/
functionScoped(true);

/** es6
 * let is blockscoped
 * **/
function blockScoped(test){
    if(test){
        let naam = "Tom";
        console.log(naam);
    }
}
blockScoped(true);

/** NOTATIE: NAMED FUNCTION
 * function naam(parameter, parameter, ...){ RETURN variabele, array }
 *
 * */

var eenNaam = function mijnSom(a,b){
    return a + b;
}
eenNaam(1,3);
//mijnSom(1,3); //reference error

/** NOTATIE: ANONYMOUS FUNCTIONS
 *  function (parameter, parameter, ...){ RETURN variabele, array }
 * **/
var geenNaam = function (a,b){
    return a + b;
}
geenNaam(1,3);

/**
 * VOORBEELD: ZELF GESCHREVEN FUNCTIE
 *
 * **/
function berekenLeeftijd(gJ){
    return huidigJaar - gJ;
}
/*var huidigJaar = new Date(); //OBJECT VARIABELE
console.log(huidigJaar.getFullYear());*/

var huidigJaar = new Date().getFullYear();

var geboorteJaar= prompt('Geef uw geboortejaar in:, YYYY:');

//isNan(geboorteJaar).length !==4 (METHOD CHAINING)

while(isNaN(geboorteJaar) || geboorteJaar.length !== 4){
    var geboorteJaar= prompt('Geboortejaar in cijfers aub en maximum 4 cijfers aub:, YYYY:');
}
while(geboorteJaar > huidigJaar || geboorteJaar < 1){
    var geboorteJaar= prompt('Geboortejaar is kleiner dan huidig jaar en mag niet negatief zijn:, YYYY:');
}

/*while(isNaN(geboorteJaar) || geboorteJaar > huidigJaar){
    var geboorteJaar= prompt("U heeft geen nummer gebruikt of geboortejaar is kleiner dan huidig jaar");
}*/
var resultaat = berekenLeeftijd(geboorteJaar);
console.log(resultaat);

/**verschillen es5 en es6**/
let naam = "Tom";
//es5
document.write("Mijn naam is: " + naam + '<br>');
//es6
document.write(`Mijn naam is: ${naam}`);

function som(a,b){
    return a+b;
}

let getal1= 5;
let getal2=6;
document.write(`De som van:${getal1} + ${getal2} is ${som(getal1,getal2)}` + "<br>");

/** ARRAYS **/
const arrayGetallen = [1000,2000,3000,4000,5000];
//es5
var verschil = arrayGetallen.map(function(el){
   return 5000 - el;
});
document.write(`${verschil}`);
//es6
let verschil2 = arrayGetallen.map(el => 5000 - el);
document.write(`${verschil2}`);


