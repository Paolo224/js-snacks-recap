const { crateApp } = Vue

    .createApp({
        data() {
            return {
                counter : 0,
                numeriPari: [],
                numeriDispari: [],
            }
        },

        methods: {
            generateNumber() {
                this.counter++;
                axios.get('https://flynn.boolean.careers/exercises/api/random/int')
                    .then((response) => {
                        console.log(response.data.response);
                        if(response.data.response % 2 == 0){
                            this.numeriPari.push(response.data.response)
                        } else {
                            this.numeriDispari.push(response.data.response)
                        }
                        console.log(this.numeriPari);
                        console.log(this.numeriDispari);
                    });
            }
        },
    }).mount('#app');

    