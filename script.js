const votes = []

function avaa() {
    var modal = document.getElementById("myModal");

    modal.style.display = "block";
}
function sulje() {
    var modal = document.getElementById("myModal");

    modal.style.display = "none";
}

function lisaa() {
    var nimi = document.getElementById("aanestys").value;
    var vaihto1 = document.getElementById("vaihto1").value;
    var vaihto2 = document.getElementById("vaihto2").value;

    const vote = {
        name: nimi,
        options: [
            {
                valinta1: vaihto1,
                votes: 0
            },
            {
                valinta2: vaihto2,
                votes: 0
            }
        ]
    }
    votes.push(vote)  

    
    var nayta = document.getElementById("content");
    nayta.style.display = "block";
            

    document.getElementById("teksti1").innerHTML = vote.name;
    document.getElementById("teksti2").innerHTML = vote.valinta1 + ": Äänet: " + vote.votes;
    document.getElementById("teksti3").innerHTML = vote.valinta2 + ": Äänet: " + vote.votes;
      

    document.getElementById("demo").innerHTML = " 1. " + vote.name + " 2. " + vote.options 
    + " 3. " + vote.valinta1;

    sulje();
    //nayta();
} /***/

/*function nayta() {
    
            
    document.getElementById("teksti1").innerHTML = vote.name;
    document.getElementById("teksti2").innerHTML = vote.valinta1 + ": Äänet: " + vote.votes;
    document.getElementById("teksti3").innerHTML = vote.valinta2 + ": Äänet: " + vote.votes;
      

    document.getElementById("demo").innerHTML = " 1. " + vote.name + " 2. " + vote.options 
    + " 3. " + vote.valinta1;* 
}*/


/**function vote() {
    //aanet = aanet + 1;
    //document.getElementById("teksti2").innerText= aanet; 
}

function poista() {         
//later - etsi nimellä ja poista 

} */

