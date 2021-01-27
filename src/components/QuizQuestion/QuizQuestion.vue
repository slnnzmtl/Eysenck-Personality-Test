<template>
    <div class="quiz-question" v-if="index === questionIndex" >
            <h2 class="quiz-question__text">{{questionIndex+1}}. {{ getText(question.text) }}</h2>
            <div class="quiz-question__answers">
                <button 
                    class="quiz-question__button" 
                    v-for="(response, index) in question.responses" 
                    :key="index"
                    @click="next(response.value, question.categories, max)"
                    @mouseover="mouseOver"
                    @mouseleave="mouseLeave"
                    @touchstart="mouseOver"
                    @touchend="mouseLeave">
                    <div class="quiz-question__button-circle" >
                        <img src="@/assets/check-red.png" class="quiz-question__button-img">
                    </div>
                    {{response.text}}
            </button>
        </div>
    </div>
</template>

<script src="./QuizQuestion.js" />

<style lang="scss">
    @import "./QuizQuestion.scss";
</style>