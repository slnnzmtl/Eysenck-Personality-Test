<template>
  <div class="description-item">
        <h2 class="description-item__name">{{ category.name  }}</h2>
        <p class="description-item__level">{{ answer.value >= category[gender] ? 'Высокий уровень' : 'Низкий уровень' }} ({{ answer.value }} / {{ answer.max }}) </p>
        <p class="description-item__description">{{ category.description }}</p>
  </div>
</template>

<script src="./Description-item.js" />

<style lang="scss">
    @import "./Description-item.scss";
</style>