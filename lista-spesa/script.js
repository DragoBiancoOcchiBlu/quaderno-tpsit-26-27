const inputItem = document.getElementById("item");
const btnAggiungi = document.getElementById("btn-aggiungi");
const lista = document.getElementById("lista");
const pErrore = document.getElementById("errore");


function aggiungiElemento() {
    const testo = inputItem.value;


    if (testo === "") {
        pErrore.textContent = "Inserisci un elemento, coglione";
        return;
    }
    pErrore.textContent = "";
    const li = document.createElement("li");
    const spanTesto = document.createElement("span");
    spanTesto.textContent = testo;

    spanTesto.addEventListener("click", () => {
        spanTesto.classList.toggle("done");
    });

    const btnRimuovi = document.createElement("button");
    btnRimuovi.textContent = "Rimuovi";
    btnRimuovi.addEventListener("click", () => {
        li.remove();
    });

    
    li.appendChild(spanTesto);
    li.appendChild(btnRimuovi);
    lista.appendChild(li);

    
    inputItem.value = "";
}

btnAggiungi.addEventListener("click", aggiungiElemento);

inputItem.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        aggiungiElemento();
    }
});