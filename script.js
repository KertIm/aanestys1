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
    if (uusi == "") {

    } else {
        list.push(aanestys);

        sulje();

        var nayta = document.getElementById("content");

        

        for (var i = 0; i < list.length; i++) {
            //document.getElementById("teksti1").innerHTML = (uusi);
            
            nayta.style.display = "block";
            var one = list[i];
            document.getElementById("teksti1").innerHTML += one;
            //näytä äänet
        }
    }

}


function vote() {
    //äänet + 1
}

function poista() {         //later

}

