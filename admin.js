document.querySelector("#content").addEventListener("click", vote);

let votes = [];
if (localStorage.getItem("votes")) {
    votes = JSON.parse(localStorage.getItem("votes"));
    renderVotes();
}
function vote(event) {
    console.log(event.target)

    if (event.target.tagName === "BUTTON") {
        const btn = event.target;
        if (btn.getAttribute('data-poista-id')){
            console.log("Poistetaan");
            const poistaId = btn.getAttribute('data-poista-id');
            votes.splice(poistaId, 1);
            saveVotes();
            renderVotes();
            return;
        } else {
            console.log("Äänestetään");

            const voteid = event.target.dataset.voteid;
            const optionid = event.target.dataset.optionid;
            votes[voteid].options[optionid].votes++;
            console.log(votes)
            saveVotes();
            renderVotes();
        } 
    }
}
function saveVotes() {
    localStorage.setItem("votes", JSON.stringify(votes));
}
function renderVotes() {
    var nayta = document.getElementById("content");
    nayta.innerHTML = "";
    let voteid = 0;
    
    votes.forEach(vote => {
        const div = document.createElement("div");
        
        // Äänestyksen nimi
        const aanestysNimiH2 = document.createElement("h2");
        const aanestysNimiText = document.createTextNode(vote.name);
        aanestysNimiH2.appendChild(aanestysNimiText);
        aanestysNimiH2.classList.add("aanestysNimi");
        div.appendChild(aanestysNimiH2);
        
        // Äänestysvaihtoehdot
        let optionId = 0;
        vote.options.forEach(option => {
            const span = document.createElement("span");
            const text = document.createTextNode(option.valinta + ": Äänet: " + option.votes);
            span.appendChild(text);
            div.appendChild(span);

            const button = document.createElement("button");
            button.dataset.voteid = voteid;
            button.dataset.optionid = optionId;
            optionId++;
            button.innerText = "Äänestä";
            div.appendChild(button);

            const br = document.createElement("br");
            div.appendChild(br);
        })
            //poistaminen
            const button = document.createElement("button");
            button.dataset.poistaId = voteid;
            button.innerText = "Poista";
            div.appendChild(button);

        voteid++;
        nayta.appendChild(div);
    })
}
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
                valinta: vaihto1,
                votes: 0
            },
            {
                valinta: vaihto2,
                votes: 0
            }
        ]
    }
    votes.push(vote);
    
    localStorage.setItem("votes", JSON.stringify(votes));

    renderVotes();
    sulje();
}