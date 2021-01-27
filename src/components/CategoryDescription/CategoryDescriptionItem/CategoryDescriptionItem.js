import {mapState} from 'vuex'
export default {
    name: 'CategoryDescriptionItem',
    props: {
        category: Object,
        answer: Object,
    },
    computed: mapState({
        gender: state => state.gender,
    }),
    methods: {  
        level(answer, category) {
            return answer >= category.high[this.gender] ? 'Высокий уровень' : answer >= category.avg[this.gender] ? 'Средний уровень' : 'Низкий уровень'
        }
    }
}   