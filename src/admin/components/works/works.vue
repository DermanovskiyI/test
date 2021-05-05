<template lang="pug">
.maincontent
  .title Страница «Мои Работы»
  .page
    .page__changes
      .subtitle Добавить работу
      worksAdd(
        :editMode ="editMode"
        :newWork = "newWork"
        :editedWorkId = "editedWorkId"
      )
    .page__current
      .subtitle Все работы
      .works__current 
        .works__current-headers
            .works__current-text Название
            .works__current-text Технологии
            .works__current-text Ссылка
            .works__current-text Превью
            .works__current-text Изменить
        HR
        ul.works__current__list
            works-item(
                    v-for="work in works"
                    :key="work.id"
                    :work="work"
                    :newWork = "newWork"
                    :editMode = "editMode"
                    @handleEditMode = "changeEditMode"
                )
</template>

<script>
import worksAdd from "./worksAdd"
import worksCurrent from "./worksCurrent"
import worksItem from "./worksItem"

import { mapState, mapActions } from "vuex"

export default {
  components: {
    worksAdd,
    worksCurrent,
    worksItem
  },
  data() {
      return {
        editMode: false,
        editedWorkId: 0,
          newWork: {
            title: "",
            techs: "",
            photo: "",
            link: "",
            description: "",
          },
      }
    },
    computed: {
      ...mapState({
        works: state => state.works.works
      })
    },
    created(){
      this.upLoadWorks();
    },
    methods: {
      ...mapActions(['upLoadWorks']),

      changeEditMode(work) {
        this.editMode = !this.editMode;
        this.editedWorkId = work
      }
    }
 
  
}
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
    font-size: 21px;
    color: #455a64;
    padding: 50px 50px 0 50px;

}
.page {

    display: flex;
}
.title {
    font-size: 21px;
    color: #455a64;
    margin-bottom: 30px;
}
.subtitle {
  margin-bottom: 40px;
}
.page__changes, .page__current {
  flex: 1;

}
ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
}

.works__current-headers {
    display: flex;
    justify-content: space-between;
}

</style>