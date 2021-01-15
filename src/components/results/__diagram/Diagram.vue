<template>
    <div class="diagram">
        <h1 class="diagram__header">Ваш результат</h1>
        <Item v-for="(answer, index) in answers" :key="index" :answer="answer" :category="getCategory(categories, answer.var)" />
    </div>
</template>

<script src="./Diagram.js" />

<style lang="scss">
    @import "./Diagram.scss";
</style>