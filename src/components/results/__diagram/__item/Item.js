import ProgressBar from '@/components/progress-bar/ProgressBar.vue'
import {mapState} from 'vuex'

export default {
    components: {
        ProgressBar
    },
    props: [
        'category',
        'answer'
    ],
    methods: { 
        getScore(value, max) {
            return value <= max ? value : max
        }
    },
    computed: mapState({
        gender: state => state.gender,
        categories: state => state.answersScores
    })
}