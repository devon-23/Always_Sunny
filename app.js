const app = Vue.createApp({
    data() {
        return {
            quote: '',
            who: '',
            episode: '',
            picture: 'https://randomuser.me/api/portraits/women/10.jpg'
        }
    },
    methods: {
        async getQuote() {
            const res = await fetch('http://sunnyquotes.net/q.php?random')
            const results = await res.json()

            this.quote = "\"" + results.sqQuote + "\"",
            this.who = "- " + results.sqWho,
            this.episode = results.sqEp
            console.log(this.quote)
            
        }
    }
})

app.mount('#app')