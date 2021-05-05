<template lang="pug">
.maincontent
    .title
        span.page__title-text Страница «БЛОГ»
    .page    
        .page__changes
            .subtitle Добавить запись
            newArticle(:articles="articles")
        .page__current
            .subtitle Последние записи
            currentArticles(:articles="articles")
     
</template>

<script>

    import blogAddArticle from "./blogAddArticle";
    import blogCurrentArticles from "./blogCurrentArticles";
export default {
    components: {
        newArticle: blogAddArticle,
        currentArticles: blogCurrentArticles,
    },
    data() {
        return {
            articles: []
        }
    },
    
}
</script>

<style scoped>
body,
html {
  height: 100%;
}
body {
  margin: 0;
}
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
    padding-top: 50px;
    padding-left: 30px;

}

.title {
    font-size: 21px;
    color: #455a64;
    margin-bottom: 30px;
}
.page {
    display: flex;
}
.page__changes, .page__current {
    flex: 1;
}
.subtitle {
    margin-bottom: 20px;
    font-size: 1.3125rem;
    color: #455a64;
}
</style>