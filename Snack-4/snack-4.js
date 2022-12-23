const { crateApp } = Vue

    .createApp({
        data() {
            return {
                userNumber : null,
            }
        },

        methods: {
            generateSentence(userNumber) {
                axios.get('https://flynn.boolean.careers/exercises/api/array/integers?min=1&max=100&items=' + userNumber)
                    .then((response) => {
                    console.log(response.data.response); 
                });
                const array1 = this.response.data.response;
                let sum = 0;

                array1.forEach(element => {
                    sum += element;
                });

                console.log(sum);

            },
        },

        created(){
            // this.generateSentence(this.userNumber)
        }
    }).mount('#app');
