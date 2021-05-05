// const skills = {
//     state: { }, // состояние приложения, данные, которые используются внутри приложения
//     actions: { }, // методы, которые описывают, то что с данными происходит
//     getters: { }, // можем вынимать какие то конкретные данные из общих файлов приложения (state) (можем сосдать метод который будет вытаскивать данные)
//     mutations: { } // описываем методы, которые будут изменять данные

// }

const skills = {
    // namespaced: true,
    state: {
        skills: []
    },
    mutations: {
        setSkills(state, payload) {
            state.skills.push(payload)
        }
    },
    actions: {
        // setSkills(store, payload) {
        //     this.$axios.post('/skills', payload)
        //     .then(response => {
        //         console.log(response)
        //     }), error => {
        //         console.log(error.response)
        //     }
        // }


        // setSkills({commit}, payload) {
            
        //     commit('setSkills', payload)
        // }
        setSkills(store, payload) {

            // return
            this.$axios.post("/skills", payload)
            .then(response => {
                console.log(response);
            }), error => {
                console.log(error.response); 
            }
        }
    }
}

export default skills


///// 