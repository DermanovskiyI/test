<template lang="pug">
form.skill__new
  input.skill__new-input(
    type="text",
    placeholder="Название",
    v-model="newSkill.title"
  )
  .skill__new-error 
  button.skill__new-btn(type="submit", @click.prevent="handleSetSkills") Добавить
  pre {{newSkill.title}}
</template>

<script>
import { mapActions } from "vuex";

let uniqId = 0;
export default {
  props: {
    typeId: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      newSkill: {
        id: "",
        title: "",
        percent: 0,
        category: this.typeId,
      },
     
    };
  },
  methods: {
    ...mapActions(['setSkills']),
 
    handleSetSkills() {
      if(this.newSkill.title === "") {
        return;
      } else {
        this.newSkill.id = uniqId++;
        this.setSkills({...this.newSkill})
        this.newSkill.title = "";
      }
      
      // this.setSkills({
      //     id: uniqId,
      //     title: this.newSkill.title,
      //     percent: this.newSkill.percent,
      //     category: 0,
      // })
      // console.log(this.newSkill.title)
    },
    
    
  },
};

</script>

<style scoped>
.skill__new {
  display: flex;
  position: relative;
}

.skill__new-input {
  margin-right: 10px;
  padding: 15px 20px;
  border-radius: 5px;
  border: 1px solid transparent;
  outline: none;
  @media (max-width: 576px) {
    padding: 15px 0px;
  }
}
.skill__new-input-errored {
  border-color: firebrick;
}
.skill__new-error {
  position: absolute;
  bottom: 100%;
  left: 0%;
  color: firebrick;
  font-weight: 600;
  font-size: 20px;
}

.skill__new-btn {
  background-color: #6c9c5a;
  border: none;
  padding: 15px 20px;
  border-radius: 5px;
  color: white;
  cursor: pointer;
}
.skill__new-btn:focus {
  outline: none;
}
</style>