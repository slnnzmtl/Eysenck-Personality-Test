import ProgressBar from '@/components/progress-bar/ProgressBar.vue'
import ResetButton from '@/components/resetButton/ResetButton.vue'
let questions = require('@/assets/questions.js')
import Question from "./__question/Question.vue"
import {mapState} from 'vuex'

  var quiz = {
    title: 'Моя викторина',
    questions: questions
  };
  
export default {
    components: {
        ProgressBar,
        Question,
        ResetButton
    },
    computed: mapState({
        questionIndex: state => state.questionIndex
    }),
    data() { 
          return { 
          title: 'Hello.',
          quiz: quiz,
          // questionIndex: 0,
          userResponses: Array(quiz.questions.length).fill(false),
        }
      },

      methods: {
        score() {
          return this.userResponses.filter(function(val) { return val }).length;
        },
      },
}