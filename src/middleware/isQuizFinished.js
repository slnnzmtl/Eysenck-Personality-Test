export default function isQuizFinished ({ next, store }){
    console.log('isFinished')
    if(store.getters.quizFinished){
        return next({
           name: 'results'
        })
    }
   
    return next()
   }