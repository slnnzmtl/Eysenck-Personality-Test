<template>
  <div class="category-description">
        <h1 class="category-description__header" >Описание факторов</h1>
        <CategoryDescriptionItem 
          v-for="(category, index) in categoriesSlice(categories, 0, 11)" 
          :key="index" 
          :answer="answers[category.var]" 
          :category="category" 
        />
        <p class="category-description__separator">
          Дополнительно к одиннадцати основным шкалам даны еще две составные шкалы, с помощью которых вы сможете определить свой уровень либидо и уровень своей сексуальной удовлетворенности. И в заключение последняя шкала маскулинности – фемининности, охватывающая все те вопросы, на которые ответы мужчин и женщин существенно различаются.
        </p>
        <CategoryDescriptionItem 
          v-for="(category, index) in categoriesSlice(categories, 11, 14)" 
          :key="index+11" 
          :answer="answers[category.var]" 
          :category="category" 
        />
  </div>
</template>

<script src="./CategoryDescription.js" />

<style lang="scss">
    @import './CategoryDescription.scss';
</style>