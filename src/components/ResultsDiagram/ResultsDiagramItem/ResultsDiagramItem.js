import ProgressBar from '@/components/ProgressBar.vue'
import {mapState} from 'vuex'

export default {
    name: 'ResultsDiagramItem',
    components: {
        ProgressBar
    },
    props: {
        category: Object,
        answer: Object,
    },
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