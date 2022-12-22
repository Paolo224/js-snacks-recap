const { crateApp } = Vue

    .createApp({
        data() {
            return {
                userMessage : '',
            }
        },

        methods: {
            generateSentence() {
                axios.get('https://flynn.boolean.careers/exercises/api/random/sentence')
                    .then((response) => {
                    console.log(response.data.response);
                    this.invitati.push(response.data.response);  
                });
            }
        },

        created(){
            // this.generateSentence()
        }
    }).mount('#app');
