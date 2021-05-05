<template lang="pug">
.currentArticles
    .currentArticles__headers
        .currentArticles__headers-text Название
        .currentArticles__headers-text Дата
        .currentArticles__headers-text Содержание
    ul.currentArticles__list
        li.currentArticles__item(v-for="article in articles" :key="article.id")
            .currentArticles__header {{article.header}}
            .currentArticles__date {{article.date}}
            .currentArticles__text {{article.text}}
</template>

<script>
export default {
    props: {
        articles: {
            type: Array,
            required: true
        }
        
    },
}
</script>
<style scoped>
ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
}
.currentArticles {
    background: white;
}
.currentArticles__headers {
    display: flex;
    /* justify-content: space-between; */
}
.currentArticles__item {
    display: flex;
}
.currentArticles__item:nth-child(even) {
    background: grey;
}
.currentArticles__headers-text {
    flex: 1;
}
.currentArticles__header, .currentArticles__date, .currentArticles__text {
    flex: 1;
}
</style>