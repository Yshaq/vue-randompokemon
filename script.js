const app = Vue.createApp({
    data() {
        return {
            name: 'Bulbasaur',
            id: '1',
            sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
        }
    },

    methods: {
        getPokemon() {
            randomNo = Math.floor((Math.random() * 151) + 1);

            fetch(`https://pokeapi.co/api/v2/pokemon?limit=1&offset=${randomNo}`)
            .then( res => res.json())
            .then( res => {
                this.name = res.results[0].name;
                this.id = randomNo + 1;
                detail = res.results[0].url;
                fetch(detail)
                .then(res => res.json())
                .then( res => {
                    this.sprite = res.sprites.front_default;
                });
            });
        }
    }
})

app.mount('#app')