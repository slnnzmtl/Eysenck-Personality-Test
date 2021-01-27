import ResultsDiagramItem from './ResultsDiagramItem/ResultsDiagramItem.vue'
export default {
    name: 'ResultsDiagram',
    components: {
        ResultsDiagramItem
    },
    props: {
        answers: Object,
        categories: Array,
    },
    methods: {
        getCategory(categories, name) {
            let result = {} 
            categories.forEach(item => {
                if (item.var == name) {
                        result = item
                }
            }) 
            return result 
        }
    }

}