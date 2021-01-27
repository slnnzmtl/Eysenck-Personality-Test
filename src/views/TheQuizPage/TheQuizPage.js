import ProgressBar from '@/components/ProgressBar.vue'
import ResetButton from '@/components/ResetButton.vue'
let questions = require('@/assets/questions.js')
import QuizQuestion from "@/components/QuizQuestion/QuizQuestion.vue"
import {mapState} from 'vuex'

  var quiz = {
    title: 'Моя викторина',
    questions: questions
  };
  
export default {
  name: 'TheQuizPage',
  components: {
      ProgressBar,
      QuizQuestion,
      ResetButton
  },
  computed: mapState({
      questionIndex: state => state.questionIndex
  }),
  data() { 
    return { 
      title: 'Hello.',
      quiz: quiz,
      userResponses: Array(quiz.questions.length).fill(false),
    }   
  },

  methods: {
    score() {
      return this.userResponses.filter(function(val) { return val }).length;
    },
  },
}