export default function gender ({ next, store }){
    console.log(store.getters.gender)
    if(!store.getters.gender){
        return next({
           name: 'hello'
        })
    }
   
    return next()
   }