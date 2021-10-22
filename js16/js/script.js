function zoekNamen(){
    var input, filter, table, tr, td, i, txtValue;

    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = document.getElementsByTagName("TR");
    /*alle rijen gaan doorlopen*/
    for(i=0;i < tr.length;i++){
        td = tr[i].getElementsByTagName("TD")[1];
        if(td){
            txtValue = td.textContent || td.innerText;
            if(txtValue.toUpperCase().indexOf(filter) > -1){
                tr[i].style.display= "";
            }else{
                tr[i].style.display="none";
            }
        }
    }
}