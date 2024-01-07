var list = [];
var aanet = [];//laita samaan listaan?

function avaa() {
    var modal = document.getElementById("myModal");

    modal.style.display = "block";
}

function sulje() {
    var modal = document.getElementById("myModal");

    modal.style.display = "none";
}

function lisaa() {
    var uusi = document.getElementById("aanestys").value;
    if(uusi == "") {
        
    } else {
    list.push(aanestys);

    sulje();
    
    var nayta = document.getElementById("content");

    nayta.style.display = "block";
    
    document.getElementById("teksti1").innerHTML = (uusi);
    }
    
}


function vote() {
    //äänet + 1
}

function poista() {         //later
    
}

