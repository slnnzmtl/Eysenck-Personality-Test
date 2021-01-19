<template>
  <div class="description">
        <h1 class="description__header" >Описание факторов</h1>
        <Description-item v-for="(category, index) in categoriesSlice(categories, 0, 11)" :key="index" :answer="answers[category.var]" :category="category" />
        <p class="description__separator">Дополнительно к одиннадцати основным шкалам даны еще две составные шкалы, с помощью которых вы сможете определить свой уровень либидо и уровень своей сексуальной удовлетворенности. И в заключение последняя шкала маскулинности – фемининности, охватывающая все те вопросы, на которые ответы мужчин и женщин существенно различаются.</p>
        <Description-item v-for="(category, index) in categoriesSlice(categories, 11, 13)" :key="index" :answer="answers[category.var]" :category="category" />
  </div>
</template>

<script src="./Description.js" />

<style lang="scss">
    @import './Description.scss';
</style>