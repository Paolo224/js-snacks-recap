const { crateApp } = Vue

    .createApp({
        data() {
            return {
                userMessage : '',
                userMessage2 : null,
                frase: null,
            }
        },

        methods: {
            generateSentence() {
                axios.get('https://flynn.boolean.careers/exercises/api/random/sentence')
                    .then((response) => {
                    this.frase = response.data.response;  
                });
            },
            userMessPush(){
                this.userMessage2 = this.userMessage;
                this.frase = 'Sta scrivendo...';
                setTimeout(() => {
                    this.generateSentence();
                }, 2000)
                this.userMessage = '';
            },
        },

        created(){
            // this.generateSentence()
        }
    }).mount('#app');
