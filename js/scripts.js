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

    function add(pokemon) {
        pokemonList.push(pokemon);
    }

    function getAll() {
        return pokemonList;
    }

    return  {
        add : add,
        getAll : getAll
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
    if(pokemon.height > 1.5) {
        console.log(pokemon.name + ' is ' + pokemon.height + ' meters tall and weighs ' + pokemon.weight + 'kg! Wow, that is big!' )
    }
    else {
        console.log(pokemon.name + ' is ' + pokemon.height + ' meters tall and weighs ' + pokemon.weight + 'kg!' )
    }
});