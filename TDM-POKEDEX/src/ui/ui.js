export function showPokemon(pokemon) {
    if (!pokemon) return;

    // Datos del Pokémon
    document.getElementById("pokemon-img").src = pokemon.sprite;
    document.getElementById("pokemon-name").textContent = capitalize(pokemon.name);
    document.getElementById("pokemon-id").textContent = "#" + pokemon.id.toString().padStart(3, "0");

    // Tipos
    const typesDiv = document.querySelector(".types");
    typesDiv.innerHTML = "";
    pokemon.types.forEach(t => {
        const span = document.createElement("span");
        span.classList.add("type", t);
        span.textContent = capitalize(t);
        typesDiv.appendChild(span);
    });
    document.getElementById("pokemon-img").onclick = () => showModal(pokemon);
}


function showModal (pokemon) {
    const modal = document.getElementById("pokemon-modal");

    modal.classList.remove("hidden");

    document.getElementById("modal-pokemon-name").textContent = capitalize(pokemon.name);
    document.getElementById("modal-pokemon-img").src = pokemon.sprite;
    document.getElementById("modal-pokemon-id").textContent = "#" + pokemon.id.toString().padStart(3, "0");
    document.getElementById("modal-pokemon-height").textContent = pokemon.height;
    document.getElementById("modal-pokemon-weight").textContent = pokemon.weight;
    document.getElementById("modal-pokemon-abilities").textContent = pokemon.abilities.join(", ");

    const statsDiv = document.getElementById("modal-stats");
    statsDiv.innerHTML = "<h3>estadísticas</h3>";

    pokemon.stats.forEach(s => {
        const p = document.createElement("p");
        p.textContent = `${capitalize(s.stat)}: ${s.base}`;
        statsDiv.appendChild(p);
    });
}
document.getElementById("close-modal").addEventListener("click", () => {
    document.getElementById("pokemon-modal").classList.add("hidden");
});

function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}