import {mapState} from 'vuex'

export default {
    name: 'QuizQuestion',
    props: {
        question: Object,
        index: Number,
        max: Number,
    },
    computed: mapState({
        questionIndex: state => state.questionIndex,
        gender: state => state.gender
      }),
    methods: {
        getText(text) {
            if (typeof text === 'object' && typeof text !== null) {
                return text[this.gender]
            } else {
                return text
            }
        },
        mouseOver(){ 
            if (!event.target.className.includes('quiz-question__button-img')) {
                event.target.classList.add('active')
                event.target.querySelector('.quiz-question__button-img').classList.add('active')
            }    
        },
        mouseLeave(){
            if (!event.target.className.includes('quiz-question__button-img')) {
                event.target.classList.remove('active')
                event.target.querySelector('.quiz-question__button-img').classList.remove('active')
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