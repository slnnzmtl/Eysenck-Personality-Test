<template>
  <div class="quiz">
      <!-- <h1 v-if="questionIndex === quiz.questions.length">Введите свои данные:</h1> -->
        <!-- <h1 v-if="questionIndex === quiz.questions.length">Результат:</h1> -->
        <div class="questions-counter">{{questionIndex+1}}/{{quiz.questions.length}}</div>
        <progress-bar class="quiz-progress" :value="questionIndex" :max="quiz.questions.length"></progress-bar>   
        <div class="quiz__question-block" v-for="(question, index) in quiz.questions" :key="index">
            <div class="quiz__question" v-show="index === questionIndex" >
                <h2 class="quiz__question-text">{{questionIndex+1}}. {{ question.text }}</h2>
                  <div class="quiz__answers">
                    <button class="quiz__question-button" v-for="(response, index) in question.responses" 
                    :key="index"
                    @click="next(response.value, quiz.questions[questionIndex].categories, quiz.questions.length)"
                    @mouseover="mouseOver"
                    @mouseleave="mouseLeave"
                    @touchstart="mouseOver"
                    @touchend="mouseLeave">
                        <div class="circle" >
                            <img src="@/assets/check-red.png" alt="" class="circle__check">
                        </div>
                        {{response.text}}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template> 

<script>
import progressBar from '@/components/progress-bar.vue'
let questions = require('@/assets/questions.js')
import {mapState} from 'vuex'
  
  var quiz = {
    title: 'Моя викторина',
    questions: questions
  };
  
export default {
    components: {
        progressBar
    },
      data() { 
          return { 
          title: 'Hello.',
          quiz: quiz,
          // questionIndex: 0,
          userResponses: Array(quiz.questions.length).fill(false),
        }
      },
      computed: mapState({
        questionIndex: state => state.questionIndex
      }),
      methods: {
        mouseOver(){
            let elem = event.target.querySelector('.circle__check')
            event.target.classList.add('button__active')
            elem.classList.add('check_active')
        },
        mouseLeave(){
            let elem = event.target.querySelector('.circle__check')
            event.target.classList.remove('button__active')
            elem.classList.remove('check_active')
        },
        next(value, categories, length) {
            Object.entries(categories).forEach(category => {
              let categoryName = category[0]
              let calcValue = Math.abs(value - category[1])
              this.$store.dispatch('iterateAnswer', { category: categoryName,  value: calcValue})
            })
            this.$store.dispatch('questionIndexIterate')
            if (this.questionIndex  === length) {
                this.$store.dispatch('quizFinish')
                this.$router.push('/results')
            }
        },
        prev() {
          this.questionIndex--;
        },
        score() {
          return this.userResponses.filter(function(val) { return val }).length;
        },
      },
}
</script>

<style lang="scss">
    .quiz {
      display: flex;
      flex-direction: column;
      width: 80%;
      margin: auto;
      align-items: center;

        .quiz__question {
            max-width: 1300px;
            text-align: center;

            .quiz__question-text {
                font-family: 'Open Sans', sans-serif;
                font-style: normal;
                font-weight: normal;
                font-size: 16px;
                line-height: 20px;    
                margin-bottom: 40px;
                text-align: left;

                @media(max-width: 400px) {
                  font-size: 14px;
                }
            }

            .quiz__answers {
                display: flex;
                flex-direction: column;

                .quiz__question-button {
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                    width: 250px;
                    height: 50px;
                    margin-bottom: 15px; 
                    border: solid 1px #fff;
                    color: #000;
                    border-radius: 9.21986px;
                    border-left: solid #FB7C81 9.57px;
                    cursor: pointer;
                    background-color:#fff;
                    filter: drop-shadow(0px 2.83688px 8.09px rgba(196, 196, 196, 0.31));
                    outline: 0;
                    font-size: 14px;
                    line-height: 34px;

                    &:hover {
                        background-color: #FB7C81;
                        color: #fff;
                    }


                    .circle {
                        width: 29.08px;
                        height: 29.08px;
                        background: #F8EDED;
                        border-radius: 30px;
                        margin-left: 15px;
                        margin-right: 15px;

                        .circle__check {
                            visibility: hidden;
                        }

                        .check_active {
                            visibility: visible;
                        }
                    }
                }
            }
        }

        .quiz-progress {
            background: #EEEEEE;
            height: 2px;
            width: 100%;
            margin-bottom: 50px;

            .progress-bar__fill {
                background-color: #FB7C81;
            }
        }

        .questions-counter {
            width: 100%;
            font-family: Open Sans;
            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            line-height: 80px;
        }

    .button__active {
            background-color: #FB7C81 !important;
            color: #fff;
        }
    }
</style>