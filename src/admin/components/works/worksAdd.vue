<template lang="pug">
.works__add
  input.works__add-input.works__add-input-name(type="text" placeholder="Название проекта", v-model="newWork.title")
  input.works__add-input.works__add-input-tech(type="text" placeholder="Технологии", v-model="newWork.techs")
  input.works__add-input.works__add-input-link(type="text" placeholder="Ссылка", v-model="newWork.link")
  textarea.works__add-input.works__add-input-desk(type="text" placeholder="Описание", v-model="newWork.description")
  label
    input.works__add-input.works__add-input-photo(type="file" @change="renderPic")
    div.works__add-input-photo-visible Выбрать файл
  .new__photo
    img.new__photo-img(:src="editMode ? newWork.photo : previewPic" alt="")
  
  button.works__add-btn(type="button" @click="editMode ? handleEditWork() : handleSetWork()") {{editMode ? 'Изменить' : 'Добавить'}}
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  props: {
    editMode: {
      type: Boolean,
      default: () => false
    },
    newWork: {
      type: Object,
      default: () => {}
    },
    editedWorkId: {
      type: Number,
      default: () => 0
    },
  },
  data() {
    return {
      previewPic: "",
    };
  },
  computed: {
      ...mapState({
            works: state => state.works.works
    })
  },
  methods: {
    ...mapActions(["setWork", "editWork"]),
    handleSetWork() {
      this.setWork({
        title: this.newWork.title,
        techs: this.newWork.techs,
        photo: this.newWork.photo,
        link: this.newWork.link,
        description: this.newWork.description,
      });
      this.newWork.title = ""
      this.newWork.techs = "";
      this.newWork.photo = "";
      this.newWork.link = "";
      this.newWork.description = "";
      this.previewPic = "";
    },
    renderPic(e) {
      const file = e.target.files[0];
      const renderer = new FileReader();
      renderer.readAsDataURL(file);
      renderer.onloadend = () => {
        this.previewPic = renderer.result;
      };
      this.newWork.photo = file
    },
    handleEditWork() {
      this.editWork({
          title: this.newWork.title,
          techs: this.newWork.techs,
          photo: this.newWork.photo,
          link: this.newWork.link,
          description: this.newWork.description,
          id: this.editedWorkId
        })
        console.log(this.newWork.photo);
    }
  },
};
</script>

<style scoped>
input, textarea {
  padding: 15px 20px;
  border-radius: 5px;
  border: 1px solid transparent;
  outline: none;
}

.works__add {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.works__add-input {
  width: 200px;
  margin-bottom: 20px;
}
.works__add-input-photo {
  display: none;
}
.works__add-input-photo-visible {
  padding: 15px 20px;
  border-radius: 5px;
  border: 1px solid transparent;
  outline: none;
  cursor: pointer;
}
.works__add-input-photo-visible:hover {
  font-weight: 900;
}
.works__add-input-desk {
  resize: none;
}
.works__add-btn {
  background-color: #6c9c5a;
  border: none;
  padding: 15px 20px;
  border-radius: 5px;
  color: white;
  cursor: pointer;
}
.new__photo {
  width: 208px;
}
.new__photo-img {
    max-width: 100%;
}
</style>