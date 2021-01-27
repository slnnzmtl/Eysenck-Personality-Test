<template>
    <button @click="quizReset" class="reset-button">ПРОЙТИ ТЕСТ ЗАНОВО</button>
</template>

<script>
export default {
    name: 'ResetButton',
    methods: {
        quizReset() {
            this.$store.dispatch('quizReset')
            this.$router.push('/')
        }
    }
}
</script>

<style lang="scss">
.reset-button {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    margin: 5px;
    outline: none;
    border: none;
    box-shadow: 0px 2.83688px 8.09px rgba(196, 196, 196, 0.31);
    border-radius: 9.21986px;
    cursor: pointer;
    font-family: Open Sans;
    font-style: normal;
    width: 100% !important;
    height: 60px;
    color: white;
    background-color: #FB7C81;
    justify-content: center;
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;
    &:hover {
        color: white;
        background-color: #ff9094;
    }
}
</style>