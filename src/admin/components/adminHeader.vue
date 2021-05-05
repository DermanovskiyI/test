<template lang="pug">
    .header
        .header__left
            h1.title Панель администрирования
        .header__right
            a(href="#").header__btn Вернуться на сайт
</template>
<style>
.header {
    background-color: #6c9c5a;
    display: flex;
    padding: 30px;
    @media (max-width: 576px) {
            flex-direction: column-reverse;
            align-items: center;
        }
}
.header__left, .header__right {
    flex: 1;
    display: flex;
}

.header__left {
    justify-content: flex-start;

}
.title {
    margin: 0;
    font-size: 28px;
    font-weight: 500;
    color: white;
    @media (max-width: 576px) {
            font-size: 21px;
        }
}
.header__right {
    justify-content: flex-end;
    align-items: center;
        @media (max-width: 576px) {
            margin-bottom: 15px;
        }
}
.header__btn {
    color: rgba(255, 255, 255, 0.7);
}
</style>

