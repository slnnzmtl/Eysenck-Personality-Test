import DescriptionItem from './__description-item/Description-item.vue'

export default {
    props: [
        'answers',
        'categories'
    ],
    components: {
        DescriptionItem
    },
    methods: {
        categoriesSlice(array, num1, num2) {
            return array.slice(num1, num2)
        }
    }
}