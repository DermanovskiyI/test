<template lang="pug">
.skill
  .skill__title {{type.name}}
  ul.skill__list 
    li.skill__item
      aboutTech(
        v-for = "skill in skills"
        :key = "skill.id"
        v-if = "skill.category == type.id"
        :skill = "skill"
      )
      addNewSkill(:typeId="type.id")
      
</template>

<script>

import aboutTech from "./aboutTech";
import aboutAddNewSkill from './aboutAddNewSkill'
export default {
  components: {
    aboutTech,
    AddNewSkill: aboutAddNewSkill
  },

  props: {
    type: {
      type: Object,
      default:() => {}
    },
    skills: {
      type: Array,
      default: () => []
    }
    // skills: {
    //   type: Object,
    //   default: () => []
    // }
  },
  
  methods: {
    
  }

};
</script>
 
<style>
.skill {
  margin-right: 130px;
  margin-bottom: 40px;
  @media (max-width: 576px) {
    margin-right: 0;
  }
}
.skill__title {
  /* color: #455a64; */
  color: black;
  font-weight: bold;
  margin-bottom: 30px;
  font-size: 22px;
}
.skill__list {
  list-style-type: none;
  margin: 0;
  margin-bottom: 20px;
  @media (max-width: 576px) {
    padding: 0;
  }
}
.skill__list:last-child {
  margin-bottom: 0;
}
</style>