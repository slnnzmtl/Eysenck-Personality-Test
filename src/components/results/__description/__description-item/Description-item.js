import {mapState} from 'vuex'
export default {
    props: [
        'category',
        'answer',
    ],
    computed: mapState({
        gender: state => state.gender,
    })
}   