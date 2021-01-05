export default function isQuizNoFinished ({ next, store }){
    if(!store.getters.quizFinished){
        return next({
           name: 'quiz'
        })
    }
   
    return next()
   }