document.querySelector("#content").addEventListener("click", vote);

let votes = [];
if (localStorage.getItem("votes")) {
    votes = JSON.parse(localStorage.getItem("votes"));
    renderVotes();
}

function vote(event) {
    console.log(event.target)
    if (event.target.tagName === "BUTTON") {
        const voteid = event.target.dataset.voteid;
        const optionid = event.target.dataset.optionid;
        votes[voteid].options[optionid].votes++;
        console.log(votes)
        saveVotes();
        renderVotes();
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
        voteid++;

        nayta.appendChild(div);
    })
}