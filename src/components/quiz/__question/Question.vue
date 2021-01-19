<template>
    <div class="question" v-if="index === questionIndex" >
            <h2 class="question__text">{{questionIndex+1}}. {{ getText(question.text) }}</h2>
            <div class="question__answers">
                <button class="question__button" v-for="(response, index) in question.responses" 
                    :key="index"
                    @click="next(response.value, question.categories, max)"
                    @mouseover="mouseOver"
                    @mouseleave="mouseLeave"
                    @touchstart="mouseOver"
                    @touchend="mouseLeave">
                    <div class="question__button-circle" >
                        <img src="@/assets/check-red.png" alt="" class="question__button-img">
                    </div>
                    {{response.text}}
            </button>
        </div>
    </div>
</template>

<script src="./Question.js" />

<style lang="scss">
    @import "./Question.scss"
</style>