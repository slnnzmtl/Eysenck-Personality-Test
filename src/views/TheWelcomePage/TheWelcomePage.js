let questions = require('@/assets/questions.js')

import {mapState} from 'vuex'
import ResetButton from '@/components/ResetButton.vue'
export default {
    components: { ResetButton },
    name: 'TheWelcomePage',
    data() {
        return {
            gender: '',
            errorToggle: false,
            questions 
            }
        },
    computed: mapState({
        quizFinished: state => state.quizFinished
    }),
    methods: {
        chooseGender(value) {
            this.gender = value
        },
        submit() {
            if (this.gender) {
                this.$store.dispatch('setGender', this.gender)
                this.$router.push('/quiz')
            } else {
                this.errorToggle = true
            }
        },
        quizReset() {
            this.$store.dispatch('quizReset')
        }
    }
}