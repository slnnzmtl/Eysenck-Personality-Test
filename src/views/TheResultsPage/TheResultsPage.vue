<template>
  <div class="results-page">
        <img src="@/assets/logo.png" class="results-page__logo">
        <h1 class="results-page__header" v-if="!formSubmitted">
            Поздравляем! 
            <br /> 
            Вы успешно прошли тест Айзенка
        </h1>
        <TheUserForm v-if="!formSubmitted" />
        <ResultsDiagram 
          v-if="formSubmitted" 
          :answers="answersScores" 
          :categories="categories" 
        />
        <CategoryDescription 
          v-if="formSubmitted" 
          :answers="answersScores" 
          :categories="categories" 
        />
        <ResetButton v-show="formSubmitted"/>
  </div>
</template>

<script src="./TheResultsPage.js"/>

<style lang="scss">
@import './TheResultsPage.scss';
</style>