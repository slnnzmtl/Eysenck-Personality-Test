import Vue from 'vue'
import Router from 'vue-router'
import TheQuizPage from '@/views/TheQuizPage/TheQuizPage.vue'
import TheWelcomePage from '@/views/TheWelcomePage/TheWelcomePage.vue'
import TheResultsPage from '@/views/TheResultsPage/TheResultsPage.vue'
import gender from './middleware/gender'
import isQuizNoFinished from './middleware/isQuizNoFinished'
import isQuizFinished from './middleware/isQuizFinished'


Vue.use(Router)

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/quiz',
      name: 'TheQuizPage',
      component: TheQuizPage,
      meta: {
        middleware: [
            gender,
            isQuizFinished
        ]
      }
    },
    {
      path: '/',
      name: 'TheWelcomePage',
      component: TheWelcomePage
    },
    {
      path: '/results',
      name: 'TheResultsPage',
      component: TheResultsPage,
      meta: {
        middleware: [
          isQuizNoFinished
        ]
      }
    }
  ]
})

