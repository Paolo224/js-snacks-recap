const { crateApp } = Vue

    .createApp({
        data() {
            return {
                nomeUtente : '',
                invitati : [],
            }
        },

        methods: {
            generateNumber() {
                for(let i = 0; i < 10; i++){
                    axios.get('https://flynn.boolean.careers/exercises/api/random/name')
                        .then((response) => {
                        console.log(response.data.response);
                        this.invitati.push(response.data.response);  
                    });
                }
                if(this.invitati.includes(this.nomeUtente)){
                    console.log('sei invitato')
                } else{
                    console.log('non sei invitato')
                }
                console.log(this.invitati)
            }
        },

        created(){
            this.generateNumber()
        }
    }).mount('#app');
