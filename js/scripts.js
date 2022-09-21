let pokemonList = [
    {
        id: 1,
        name: "Bulbasaur",
        type: ['grass', 'poison'],
        height: 0.7,
        weight: 6.9
    },
    {
        id_: 2,
        name: "Ivysaur",
        type: ['grass', 'poison'],
        height: 1,
        weight: 13
    },
    {
        id: 3,
        name: 'Venusaur',
        type: ['grass', 'poison'],
        height: 2,
        weight: 100
    }
];

//Iterating through pokemonList and print the result
for (let i = 0;
    i < pokemonList.length; i++) {
    if(pokemonList[i].height > 1.5) {
        document.write(pokemonList[i].name + " is " + pokemonList[i].height + " meters tall and weighs " + pokemonList[i].weight + "kg! That is big!<br>")
    }
    else{
        document.write(pokemonList[i].name + " is " + pokemonList[i].height + " meters tall and weighs " + pokemonList[i].weight + "kg!<br>")}
}

