import {mapState} from 'vuex'

export default {
    props: [
        'question',
        'index',
        'max'
    ],
    computed: mapState({
        questionIndex: state => state.questionIndex
      }),
    methods: {
        mouseOver(){ 
            if (!event.target.className.includes('question__button-img')) {
                event.target.classList.add('active')
                event.target.querySelector('.question__button-img').classList.add('active')
            }    
        },
        mouseLeave(){
            if (!event.target.className.includes('question__button-img')) {
                event.target.classList.remove('active')
                event.target.querySelector('.question__button-img').classList.remove('active')
            }        
        },
        next(value, categories, length) {
            Object.entries(categories).forEach(item => {
              if (!item[0].includes('empty')) {
                let calcValue = Math.abs(value - item[1])
                this.$store.dispatch('iterateAnswer', { category: item[0],  value: calcValue})
              }
            })
            this.$store.dispatch('questionIndexIterate')

            if (this.questionIndex === length) {
                this.$store.dispatch('quizFinish')
                this.$router.push('/results')
            }
        },
    }
}