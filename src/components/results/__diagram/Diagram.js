import Item from './__item/Item.vue'
export default {
    components: {
        Item
    },
    props: [
        'answers',
        'categories'
    ],
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