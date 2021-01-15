<template>
  <div class="description">
        <h1 class="description__header" >Описание факторов</h1>
        <Description-item v-for="(category, index) in categories" :key="index" :answer="answers[category.var]" :category="category" />
  </div>
</template>

<script src="./Description.js" />

<style lang="scss">
    @import './Description.scss';
</style>