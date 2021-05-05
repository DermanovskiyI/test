<template lang="pug">
.maincontent
  .page
      .page__title
          span.page__title-text Страница «Обо мне»
      .page__changes
        .newCatergory Добавить новую категорию
          .newCatergory__row
            input(type="text" placeholder="новая категория" v-model="newCategory").newCatergory__input
            button(type="button" @click="addNewCategory").newCatergory__btn Добавить
        .skills
          aboutSkill(
              v-for="type in types"
              :key="type.id"
              :type="type"
              :skills="skills"
            )

</template>
<script>
import axios from 'axios'
import aboutSkill from './aboutSkill.vue'
import { mapState } from 'vuex'

// const data = [
//   {id: 1, title: 'Html', percent: 20, category: 0},
//   {id: 2, title: 'Php', percent: 20, category: 1},
//   {id: 3, title: 'Css', percent: 20, category: 0},
//   {id: 4, title: 'Node.js', percent: 20, category: 1},
//   {id: 5, title: 'Mongo', percent: 20, category: 1},
//   {id: 6, title: 'Git', percent: 20, category: 2},
//   {id: 7, title: 'Gulp', percent: 20, category: 2}
// ];
const userId = 439;
export default {
  components: {
    aboutSkill,
  },
  data() {
    return {
      // skills: data,
      newCategory: "",
      types: [
        {id: 0, name: 'Frontend'},
        {id: 1, name: 'Backend'},
        {id: 2, name: 'WorkFlow'},
      ]

    };
  },
  computed: {
    ...mapState({
      skills: state => state.skills.skills
    }),
  },
  //  created() {
  //   return (this.skills = require("../../data/skills.json"));
  // },
  methods: {
    addNewCategory() {
      axios.post('/categories', {
        title: this.newCategory
      }).then((response) => {
        console.log(response)
      }).catch((error) =>
        console.log(error.response)
      )
      axios.get('/categories').then((response) => {
        console.log(response)
      }).catch((error) =>
        console.log(error.response)
      )
      axios.get(`/categories/${userId}`).then((response) => {
        console.log(response)
      }).catch((error) =>
        console.log(error.response)
      )

    }
  },
 


};
</script>

<style scoped>
.wrapper {
  background: url("../../../assets/images/water.jpg"),
    linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.7707457983193278) 0%,
      rgba(255, 255, 255, 1) 50%,
      rgba(0, 0, 0, 1) 100%
    );
  overflow: hidden;
  min-height: 100%;
  position: relative;
  font-family: Roboto;
  height: 100%;
  overflow-y: scroll;
}
.maincontent {
    background-color: rgba(#ffffff, .7);
    min-height: 100%;

}
.page {
    padding-top: 50px;
    padding-left: 30px;
}
.page__title {
    font-size: 21px;
    color: #455a64;
    margin-bottom: 30px;
}
/* .page__changes {
    display: flex;
    flex-wrap: wrap;
} */
.skills {
  display: flex;
  flex-wrap: wrap;
}
.newCatergory {
  display: flex;
  margin-bottom: 50px;
  padding-left: 40px;
  flex-direction: column;
}
.newCatergory__row {
  display: flex;
  margin-top: 10px;
}
.newCatergory__input {
  padding: 15px 20px;
  border-radius: 5px;
  border: 1px solid transparent;
  outline: none;
}
.newCatergory__btn {
  background-color: #6c9c5a;
  border: none;
  padding: 15px 20px;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  margin-left: 10px;
}
.newCatergory__btn:focus {
  outline: none;
}
</style>