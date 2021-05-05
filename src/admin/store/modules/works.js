const works = {
    state: {
        works: []
    },
    mutations: {
        setWork(state, work) {
            state.works.push(work)
        },
        upLoadWorks(state, works) {
            state.works = works
        },
        deleteWork(state, workIdToBeDeleted) {
            state.works = state.works.filter(work => {
                if(work.id != workIdToBeDeleted) {
                    return true;
                }
            })
        },
        editWork(state, editedWork) {
           state.works = state.works.map(work => {
                return work.id == editedWork.id ? editedWork : work;
            })
        }

    },
    actions: {
        setWork({commit}, work) {
            const formData = new FormData();
            Object.keys(work).forEach(key => {
                const value = work[key]
                formData.append(key, value)
            })
            this.$axios.post('/works', formData).then(response => {

                commit('setWork', {
                    ...work,
                    photo: response.data.photo,
                })
            }).catch(error => {})
        },

        upLoadWorks({commit}) {
            this.$axios.get('/works/439').then(response => {
                commit('upLoadWorks', response.data)
            }).catch(error => {
            })
        },

        deleteWork({commit}, workIdToBeDeleted) {
            console.log(workIdToBeDeleted)
            this.$axios.delete(`/works/${workIdToBeDeleted}`);
            commit('deleteWork', workIdToBeDeleted)
        },

        editWork({commit}, editedWork) {

            const formData = new FormData();
            Object.keys(editedWork).forEach(key => {
                const value = editedWork[key]
                formData.append(key, value)
            })
            this.$axios.post(`/works/${editedWork.id}`, formData).then(response => {
                console.log(editedWork)
                console.log(response.data.work)
                // commit('editWork', editedWork)
                commit('editWork', response.data.work)
            }).catch(error => {
                console.log(response.error)
            })
        }
    }
}

export default works