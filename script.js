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

            fetch(`https://pokeapi.co/api/v2/pokemon/${randomNo}`)
            .then( res => res.json())
            .then( res => {
                this.name = res.name;
                this.id = randomNo + 1;
                this.sprite = res.sprites.front_default;
            });
        }
    }
})

app.mount('#app')