import { mapState } from 'vuex';
import TheUserForm from '@/components/TheUserForm/TheUserForm.vue'
import CategoryDescription from '@/components/CategoryDescription/CategoryDescription.vue'
import ResultsDiagram from '@/components/ResultsDiagram/ResultsDiagram.vue'
import categories from '@/assets/categories'
import ResetButton from '@/components/ResetButton.vue';

export default {
    name: 'TheResultsPage',
    components: {
        TheUserForm,
        CategoryDescription,
        ResultsDiagram,
        ResetButton,
    },
    data() {
        return {
            categories
        }
    },
    computed: mapState({
            answersScores: state => state.answersScores,
            formSubmitted: state => state.formSubmitted,
            quizFinished: state => state.quizFinished
        }),
        
}