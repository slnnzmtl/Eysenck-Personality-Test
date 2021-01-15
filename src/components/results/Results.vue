<template>
  <div class="quiz-results">
        <img src="@/assets/logo.png" alt="" class="quiz-results__logo">
        <h1 class="quiz-results__header" v-if="!formSubmitted">
            Поздравляем! 
            <br /> 
            Вы успешно прошли тест Айзенка
        </h1>
        <Form v-if="!formSubmitted" />
        <Diagram v-if="formSubmitted" :answers="answersScores" :categories="categories" />
        <Description v-if="formSubmitted" :answers="answersScores" :categories="categories" />
        <ResetButton v-show="formSubmitted"/>
  </div>
</template>

<script src="./Results.js"/>

<style lang="scss">
@import './Results.scss'
</style>