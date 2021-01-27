import CategoryDescriptionItem from './CategoryDescriptionItem/CategoryDescriptionItem.vue'

export default {
    name: 'CategoryDescription',
    props: {
        answers: Object,
        categories: Array
    },
    components: {
        CategoryDescriptionItem
    },
    methods: {
        categoriesSlice(array, num1, num2) {
            return array.slice(num1, num2)
        }
    }
}