<template lang="pug">
form.newArticle__form
    .newArticle__row
        .newArticle__error
        input(type="text" placeholder="Название" v-model="headerArticle").newArticle__input
    .newArticle__row
        .newArticle__error
        input(type="date" placeholder="Дата" v-model="dateArticle").newArticle__input-data
    .newArticle__row.newArticle__row--area
        .newArticle__error
        textarea.newArticle__area(placeholder="zdarova", rows="15" v-model="textArticle") 
    button.newArticle__btn(type="submit" @click.prevent="addNewArticle") Добавить
    pre {{articles}}
        
</template>
<script>

export default {

    props: {
        articles: {
            type: Array,
            required: true
        }
        
    },
    data() {
        return { 
            id: 0,
            headerArticle: '',
            dateArticle: '',
            textArticle: '',
        }
    },
    methods: {
        addNewArticle() {
            this.articles.push({
                id: this.id,
                header: this.headerArticle,
                date: this.date,
                text: this.textArticle
            })
            this.headerArticle = '';
            this.dateArticle = '';
            this.textArticle = '';
            this.id ++;

        }
    },
}
</script>

<style scoped>
.newArticle__form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
.newArticle__row {
    margin-bottom: 20px;
}
.newArticle__row--area {
    width: 100%;
}
.newArticle__area {
  resize: none;
  width: 90%;
  border: none;
  border-radius: 5px;
}
.newArticle__input {
    padding: 15px 40px;
    border-radius: 5px;
    border: none;
    outline: none;
}
.newArticle__input-data {
    padding: 15px 55px;
    border-radius: 5px;
    border: none;
    outline: none;
}
.newArticle__btn {
  background-color: #6c9c5a;
  border: none;
  padding: 15px 20px;
  border-radius: 5px;
  color: white;
  cursor: pointer;
}
.newArticle__btn:focus {
  outline: none;
}
</style>