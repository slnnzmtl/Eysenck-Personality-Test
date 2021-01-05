import Vue from 'vue'
import Router from 'vue-router'
import Quiz from '@/components/quiz/Quiz.vue'
import Hello from '@/components/HelloPage.vue'
import Results from '@/components/quiz/Results.vue'
import gender from './middleware/gender'
import isQuizNoFinished from './middleware/isQuizNoFinished'
import isQuizFinished from './middleware/isQuizFinished'


Vue.use(Router)

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/quiz',
      name: 'quiz',
      component: Quiz,
      meta: {
        middleware: [
            gender,
            isQuizFinished
        ]
      }
    },
    {
      path: '/',
      name: 'hello',
      component: Hello
    },
    {
      path: '/results',
      name: 'results',
      component: Results,
      meta: {
        middleware: [
          isQuizNoFinished
        ]
      }
    }
  ]
})

