<template lang="pug">
li.works__current__item
    .works__current__header {{work.title}}
    .works__current__techs {{work.techs}}
    a(:href="work.link").works__current__link {{work.link}}
    .works__current__photo
        img(:src="`https://webdev-api.loftschool.com/${work.photo}`").current__photo-img
    .works__current-btns
        a(href="#" @click.prevent="edit").edit
            img(src="../../../assets/images/pencil.png").edit__pic
        a(href="#" @click.prevent="handleDelete").delete
            img(src="../../../assets/images/cancel.png").delete__pic
</template>

<script>
import {mapActions} from 'vuex'
export default {
    props: {
        work: {
            type: Object,
            default: ()=>{}
        },
        newWork: {
            type: Object,
            default: () => {}
        },
        editMode: {
            type: Boolean,
            default: ()=>false
        },
        
    },
    methods: {
        ...mapActions(['deleteWork']),

        handleDelete() {
            this.deleteWork(this.work.id)
        },
        edit() {
            this.$emit('handleEditMode', this.work.id);
            if(this.editMode == false) {
                this.newWork.title = this.work.title;
                this.newWork.techs = this.work.techs;
                // this.newWork.photo = this.work.photo;
                this.newWork.photo = `https://webdev-api.loftschool.com/${this.work.photo}`;
                this.newWork.link = this.work.link;
                this.newWork.description = this.work.description;
            } else {
                this.newWork.techs = "";
                this.newWork.title = "";
                this.newWork.photo = "";
                this.newWork.link = "";
                this.newWork.description = "";
            }
        }
    },
    
}
</script>

<style scoped>
.works__current__item {
    display: flex;
    margin-bottom: 20px;
    position: relative;
    margin-bottom: 20px;
    align-items: center;
}
.works__current__item::after {
    content: "";
    width: 100%;
    height: 1px;
    background-color: #455a64;
    position: absolute;
    bottom: 0;
}
.works__current__header, .works__current__techs, .works__current__link, .works__current__photo {
    flex: 1;
    text-align: center;
}
.current__photo {
    width: 220px;
}
.current__photo-img {
    max-width: 100%;
}
.works__current-btns {
    display: flex;
    flex-direction: column;
}

.edit {
    margin-bottom: 10px;
}
</style>