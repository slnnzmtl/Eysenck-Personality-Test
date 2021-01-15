<template>
  <div class="quiz">
        <div class="quiz__questions-counter">{{questionIndex+1}}/{{quiz.questions.length}}</div>
        <ProgressBar class="quiz__progress" :value="questionIndex" :max="quiz.questions.length" />
        <Question v-for="(question, index) in quiz.questions"  :key="index" :index="index" :max="quiz.questions.length" :question="question" />
      
    </div>
</template> 

<script src="./Quiz.js" /> 

<style lang="scss">
  @import './Quiz.scss';
</style>