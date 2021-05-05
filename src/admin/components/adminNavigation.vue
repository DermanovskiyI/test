<template lang="pug">
    nav.navigation
        ul.navigation__list
            li.navigation__item
                router-link(
                    to="/about"
                ).navigation__link Обо мне
            li.navigation__item
                router-link(
                    to="/works"
                ).navigation__link Мои работы
            li.navigation__item
                router-link(
                    to="/blog"
                ).navigation__link Блог
</template>

<script>
export default {
    
}
</script>
<style>
.navigation {
     background-color: #f0efe9;
}
.navigation__list {
    display: flex;
    margin: 0;
    list-style-type: none;
    padding: 0;
     @media (max-width: 576px) {
            flex-direction: column;
            align-items: center;
        }
}
.navigation__item {
    display: flex;
    transition: background-color .3s;
    @media (max-width: 576px) {
            width: 100%;
            flex-direction: column;
            align-items: center;
        }
}
.navigation__item--active {
    background-color: #ffffff;
    
}
.router-link-active {
    background-color: #ffffff;
}
.navigation__item:hover {
    background-color: #ffffff;
    transition: background-color .3s;
}
.navigation__item::after {
    content: "";
    width: 3px;
    height: 100%;
    background-color: #ffffff;
    display: block;
    @media (max-width: 576px) {
            width: 100%;
            height: 3px;
        }
}
.navigation__link {
    padding: 25px 50px;
    display: block;
    color: rgba(69, 90, 100, 0.8);
    text-decoration: none;
    @media (max-width: 576px) {
            width: 100%;
            text-align: center;
        }
}

</style>