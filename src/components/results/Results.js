import { mapState } from 'vuex';
import Form from './__form/Form.vue'
import Description from './__description/Description.vue'
import Diagram from './__diagram/Diagram.vue'
import categories from '@/assets/categories'
import ResetButton from '@/components/resetButton/ResetButton.vue';


export default {
    components: {
        Form,
        Description,
        Diagram,
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