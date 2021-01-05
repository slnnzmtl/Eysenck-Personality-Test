<template>
  <div class="quiz-results">
        <img src="@/assets/logo.png" alt="" class="quiz-results__logo">
        <h1 class="quiz-results__header" v-if="!formSubmitted">
            Поздравляем! 
            <br /> 
            Вы успешно прошли тест Айзенка
        </h1>
        <h1 class="quiz-results__header" v-if="formSubmitted">Ваш результат</h1>
        <Form v-show="!formSubmitted" />
        <div class="quiz-results    __result-item-wrapper" v-if="formSubmitted">
            <result-item  v-for="(category, index) in answersScores" :key="index" :category="category" />
        </div>
        <h1 v-show="formSubmitted" class="quiz-results__description-header" >Описание факторов</h1>
        <categoryDescription v-show="formSubmitted" :answers="answersScores" :categories="categories"></categoryDescription>  
        <reset-button  v-show="formSubmitted"/>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Form from '@/components/quiz/Form.vue'
import categories from '@/assets/categories'
import categoryDescription from '@/components/categoryDescription.vue'
import ResultItem from '../resultItem.vue';
import ResetButton from '../resetButton.vue';

export default {
    components: {
        Form,
        categoryDescription,
        ResultItem,
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
        })

}
</script>

<style lang="scss">
.quiz-results {
    
    display: flex;
    flex-direction: column;
    align-items: center;
    // justify-content: space-between;
    width: 100%;
    padding: 10px;
    margin: 10px;

    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    
            &__header, &__description-header {
                max-width: 572px;
                margin-top: 40px;
                margin-bottom: 40px;
                font-family: Cormorant;
                font-style: normal;
                font-weight: bold;
                font-size: 30px;
                // line-height: 50px;
                text-align: center;
                color: #FC7076;
            }

    &__result-item-wrapper {
        width: 100%;
    }
            // &__item {
            //     display: flex;
            //     flex-direction: column;
            //     // width: 90%;
            // }

            // &__category {
            //     display: flex;
            //     flex-direction: row;
            //     justify-content: space-between;
            //     width: 90%;
    
            //     @media (max-width: 1000px) {
            //         flex-direction: column;
            //     }

            //     &-name {
            //         font-size: 13px;
            //         width: 220px;
            //         margin-right: 40px;
            //     }
            // }

            
            // &__values {
            //     display: flex;
            //     justify-content: space-between;
            //     align-items: center;
            //     width: 600px;
    
            //     .progress-bar {
            //         margin-left: 20px;
            //         margin-right: 20px;
            //     }

            //     @media (max-width: 1000px) {
            //         width: 400px;
            //     }
            // }

            // &__min, &__max {
            //     width: 2em;
            // }
        }
</style>