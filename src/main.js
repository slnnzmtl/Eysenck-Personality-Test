import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import middlewarePipeline from './middlewarePipeline'


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App,),
}).$mount('#app')

router.beforeEach((to, from, next) => {
  if (!to.meta.middleware) {
      return next()
  }
  const middleware = to.meta.middleware
  const context = {
      to,
      from,
      next,
      store
  }
  return middleware[0]({
      ...context,
      next: middlewarePipeline(context, middleware, 1)

  })
})