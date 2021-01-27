<template>
  <div class="quiz-page">
        <div class="quiz-page__questions-counter">{{questionIndex+1}}/{{quiz.questions.length}}</div>
        <ProgressBar 
          class="quiz-page__progress" 
          :value="questionIndex" 
          :max="quiz.questions.length" 
        />
        <QuizQuestion 
          v-for="(question, index) in quiz.questions"  
          :key="index" 
          :index="index" 
          :max="quiz.questions.length" 
          :question="question" 
        />
        <reset-button />
    </div>
</template> 

<script src="./TheQuizPage.js" /> 

<style lang="scss">
  @import './TheQuizPage.scss';
</style>