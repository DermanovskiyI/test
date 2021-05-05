<template lang="pug">
.skill__desk
  .skill__name 
    .skill__name-text {{skill.title}}
  .skill__percent
    .skill__percent-error 
    input.skill__percent-input(
      type="text",
      :placeholder="skill.percent"
      @keydown="filterKeys"
    ) 
    .skill__percent-pic 
      img.skill__percent-pic-img(src="../../../assets/images/percent.png", alt="percent") 
  .skill__edit 
    a.skill__edit-pic(href="#" @click.prevent="editSkill")
      img.skill__edit-pic-img(src="../../../assets/images/pencil.png", alt="pen" title="изменить")
  .skill__del
    a.skill__del-pic(href="#")
      img.skill__del-pic-img(src="../../../assets/images/cancel.png", alt="del" title="удалить")
  .skill__save
    button(type="button").skill__save-btn сохранить
</template>

<script>

export default {
  props: {
    skill: {
      type: Object,
      default: () => {}
    },

  },
  data() {
    return {

    };
  },
  methods: {
    
    filterKeys(e) {
      let isDigit = false;
      let isControll = false;

      if (e.key >= 0 || e.key <= 9) {
        isDigit = true;
      }
      if (e.key == "Backspace" || e.key == "Delete" || e.key == "ArrowLeft" || e.key == "ArrowRight") {
        isControll = true;
      }
      if (!isDigit && !isControll) {
        e.preventDefault();
      }
    },

  },
};
</script>
<style>
.skill__desk {
  display: flex;
  margin-bottom: 40px;
  align-items: center;
  justify-content: flex-start;
  @media (max-width: 576px) {
    padding-left: 10px;
  }
}
.skill__name {
  margin-right: 30px;
  flex: 1;
  font-size: 21px;
  color: darkslategrey;
}
.skill__name-text {
  max-width: 150px;
}
.skill__percent {
  display: flex;
  margin-right: 20px;
  align-items: center;
  position: relative;
}
.skill__percent-error {
  color: firebrick;
  position: absolute;
  bottom: 110%;
}
.skill__percent-input {
  margin-right: 5px;
  outline: none;
  width: 46px;
  height: 32px;
  border-radius: 5px;
  border: 2px solid transparent;
  text-indent: 13px;
}
.skill__percent-input--error {
  border: 2px solid firebrick;
}
.skill__percent-input--active {
  border-color: #121b94;
}
.skill__edit {
  margin-right: 20px;
}
.skill__del {
  margin-right: 20px;
}
.skill__save-link {
  color: darkslategrey;
  cursor: pointer;
}
</style>