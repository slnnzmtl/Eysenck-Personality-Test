<template>
    <div class="quiz-results__item" v-if="answer.var != 'empty'">
        <Label class="quiz-results__category">
            <p class="quiz-results__category-name">{{answer.name}}:</p>
            <div class="quiz-results__values">
                <!-- <div class="quiz-results__min"></div> -->
                    <progressBar :value="answer.value" :max="answer.max"></progressBar>
                    <div class="quiz-results__max">{{getScore(answer.value, category[gender])}} / {{categories ? categories[category.var].max   : 0}}</div>
            </div>
        </Label>
    </div>
</template>

<script>
import progressBar from '@/components/progress-bar.vue'
import {mapState} from 'vuex'

export default {
    components: {
        progressBar
    },
    props: [
        'category',
        'answer'
    ],
    methods:{ 
        getScore(value, max) {
            return value <= max ? value : max
        }
    },
    computed: mapState({
        gender: state => state.gender,
        categories: state => state.answersScores
    })
}
</script>

<style lang='scss'>
.quiz-results {
&__item {
                display: flex;
                flex-direction: column;
                width: 100%;
            }

            &__category {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                // width: 90%;
    
                @media (max-width: 1000px) {
                    flex-direction: column;
                }

                &-name {
                    font-size: 13px;
                    width: 25%;
                    margin-right: 40px;
                    
                    @media (max-width: 1000px) {
                        width: 100%;
                        margin-right: 0px;
                    }
                }
            }

            
            &__values {
                display: flex;
                justify-content: space-between;
                align-items: center;
                width: 70%;
                @media (max-width: 1000px) {
                    width: 100%;
                }
    
                .progress-bar {
                    // margin-left: 20px;
                    // margin-right: 20px;
                }

                @media (max-width: 1000px) {
                    width: 100%;
                }
            }

            &__min, &__max {
                width: 4em;
                white-space: pre;
                text-align: left;
                margin-left: 10px;
                @media (max-width: 1000px) {
                    text-align: right;
                    font-size: 13px;
                }
            }
}
</style>