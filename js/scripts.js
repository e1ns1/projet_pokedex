let pokemonRepository = (function () {
    let pokemonList = [
        {
            id: 1,
            name: "Bulbasaur",
            type: ['grass', 'poison'],
            height: 0.7,
            weight: 6.9
        },
        {
            id: 2,
            name: "Ivysaur",
            type: ['grass', 'poison'],
            height: 1,
            weight: 13
        },
        {
            id: 3,
            name: "Venusaur",
            type: ['grass', 'poison'],
            height: 2,
            weight: 100
        }
    ];

    let addPokemonEventListener = function (element, pokemon) {
        element.addEventListener("click", () => showDetails(pokemon));
    };

    function add(pokemon) {
        if (
            typeof pokemon === "object" &&
            "id" in pokemon &&
            "name" in pokemon &&
            "type" in pokemon &&
            "height" in pokemon &&
            "weight" in pokemon
        ) {
            pokemonList.push(pokemon);
        } else {
            console.log("Pokemon is not valid! Check your inputs!")
        }
    }

    function getAll() {
        return pokemonList;
    }

    function addListItem(pokemon) {
        let pokemonList = document.querySelector(".pokemon-list");
        let listpokemon = document.createElement("li");
        let button = document.createElement("button");
        button.innerText = pokemon.name;
        button.classList.add("button-class")
        listpokemon.appendChild(button);
        pokemonList.appendChild(listpokemon);
        addPokemonEventListener(button, pokemon)
    }

    function showDetails(pokemon) {
        console.log(pokemon.name)
    }

    return  {
        add : add,
        getAll : getAll,
        addListItem : addListItem,
        showDetails : showDetails,
    };
})();

//printing pokemonList in Console
console.log(pokemonRepository.getAll())

//adding a new pokemon to pokemonList
pokemonRepository.add({
    id: 151,
    name: 'Mew',
    type: ['psychic'],
    height: 0.4,
    weight: 4

})

//iterating trough pokemonList
pokemonRepository.getAll().forEach(function(pokemon){
    pokemonRepository.addListItem(pokemon)
});