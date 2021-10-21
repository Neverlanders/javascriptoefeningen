/** Regular expression, Regex **/
const answer = prompt("Enter the date:","dd-mm-yyyy or dd.mm.yyyy");
const re = new RegExp("^[0-9]");
let result = re.test(answer);

if(result){
    true
  }else{
    console.log("invalid date");
}