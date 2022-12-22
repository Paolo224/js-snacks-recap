const { crateApp } = Vue

    .createApp({
        data() {
            return {
                userNumber : null,
            }
        },

        methods: {
            generateSentence() {
                axios.get(`https://flynn.boolean.careers/exercises/api/array/integers?min=1&max=100&items=${this.userNumber}`)
                    .then((response) => {
                    console.log(response.data.response);  
                });
            },
        },

        created(){
            this.generateSentence()
        }
    }).mount('#app');
