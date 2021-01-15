export default {
    methods: {
        quizReset() {
            this.$store.dispatch('quizReset')
            this.$router.push('/')
        }
    }
}