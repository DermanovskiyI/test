// <template lang="pug">
// .works__current 
//     .works__current-headers
//         .works__current-text Название
//         .works__current-text Технологии
//         .works__current-text Ссылка
//         .works__current-text Превью
//         .works__current-text Изменить
//     HR
//     ul.works__current__list
//         works-item(
//                 v-for="work in works"
//                 :key="work.id"
//                 :work="work"
//                 :editMode = "editMode"
//                 @handleEditMode = "handleEditMode"
//             )
// </template>

// <script>
// import worksItem from './worksItem'
// import {mapState, mapActions} from 'vuex'
// export default {
//      components: {
//         worksItem
//     },
//     props: {
//         editMode: {
//             type: Boolean,
//             default: () => false
//         }
//   },
   
//     computed: {
//          ...mapState({
//             works: state => state.works.works
//     }),
//     },
//     created() {
//         this.upLoadWorks();
//     },
//     methods: {
//         ...mapActions(['upLoadWorks']),
//         handleEditMode() {
//             this.$emit('handleEditMode')
//         }
//     },
    
// }
// </script>


// <style scoped>
// ul {
//     list-style-type: none;
//     margin: 0;
//     padding: 0;
// }

// .works__current-headers {
//     display: flex;
//     justify-content: space-between;
// }

// </style>