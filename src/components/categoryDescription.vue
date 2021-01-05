<template>
  <div class="category-description">
      <div class="category-description__item" v-for="(category, index) in categories" :key="index">
        <h2 class="category-description__name">{{ category.name }}</h2>
        <p class="category-description__level">{{ answers[category.var].value >= category[gender] ? 'Высокий уровень' : 'Низкий уровень' }} ({{ answers[category.var].value }} / {{ answers[category.var].max }}) </p>
        <p class="category-description__description">{{ category.description }}</p>
      </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    props: [
        'categories',
        'answers',
    ],
    computed: mapState({
        gender: state => state.gender,
    })
}
</script>

<style lang="scss">
    .category-description {
        display: flex;
        flex-direction: column;
        // align-items: flex-start;

        &__item {
            box-shadow: 0px 2.83688px 8.09px rgba(196, 196, 196, 0.31);
            border-radius: 9.21986px;
            margin-bottom: 20px;
            padding: 20px;
        }

        &__name {
            width: 100%;
            font-weight: bold;
            font-size: 16px;
            margin-bottom: 5px;
        }

        &__level {
            font-size: 14px;
            color: rgb(70, 70, 70);
            margin-top: 0px;
        }

        &__description {
            word-wrap: wrap;
            // width: 90%;
            font-size: 13px;
            white-space: pre-wrap;
        }
    }
</style>