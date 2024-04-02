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


} /***/



/**function vote() {
    
}

function poista() {         
//later - etsi nimellä ja poista 

} */

