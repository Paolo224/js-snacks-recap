const { crateApp } = Vue

    .createApp({
        data() {
            return {
                risultato : '',
                nomeUtente : '',
                invitati : [],
            }
        },

        methods: {
            generateNumber() {
                if(this.invitati.includes(this.nomeUtente)){
                    this.risultato = 'Benvenuto!';
                } else{
                    this.risultato = 'Non sei stato invitato';
                }
                console.log(this.invitati)
            }
        },

        created(){
            for(let i = 0; i < 10; i++){
                axios.get('https://flynn.boolean.careers/exercises/api/random/name')
                    .then((response) => {
                    console.log(response.data.response);
                    this.invitati.push(response.data.response);  
                });
            }
        }
    }).mount('#app');
