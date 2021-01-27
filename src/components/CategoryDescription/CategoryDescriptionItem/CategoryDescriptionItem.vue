<template>
  <div class="category-description-item">
        <h2 class="category-description-item__name">{{ category.name  }}</h2>
        <p class="category-description-item__level">{{ level(answer.value, category) }} ({{ answer.value }} / {{ answer.max }}) </p>
        <p class="category-description-item__description">{{ category.description }}</p>
  </div>
</template>

<script src="./CategoryDescriptionItem.js" />

<style lang="scss">
    @import "./CategoryDescriptionItem.scss";
</style>