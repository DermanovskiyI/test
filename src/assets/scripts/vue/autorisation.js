import Vue from 'vue';
const axios = require('axios');

const authBtns = {

    template: '#authBtns',
    props: {
        name: String,
        password: String,
        errorMsg: String,
        overlay: Boolean
    },
    methods: {

        sendData() {
            if (this.name == '' || this.password == '') {
                this.$emit('getErrMsg', 'Поля должны быть заполнены')
            } else {

                axios.post('https://webdev-api.loftschool.com/login', {
                    name: this.name,
                    password: this.password
                })
                    .then((response) => {
                        localStorage.setItem('token', response.data.token);
                        // setTimeout(() => {
                        //     // localStorage.clear();
                        //     axios.post('https://webdev-api.loftschool.com/refreshToken');
                        //     localStorage.setItem('tokenNew', response.data.token);
                        // },10000)
                        window.location.href = './admin/index.html';

                    })
                    .catch((error) => {
                        this.$emit('getErrMsg', error.response.data.error)

                    });

            }

        },

    },

}

new Vue({
    el: '#vue-auth',
    components: {
        authBtns
    },
    data() {
        return {
            name: '',
            password: '',
            overlay: false,
            errorMsg: '',
        }
    },

    methods: {
        showOverlay(newErrMsg) {

            this.errorMsg = newErrMsg;
            this.overlay = true;

        },
        closeOverlay() {

            this.overlay = false;

        },

    },

    template: '#auth',

})

