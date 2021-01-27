<template>
    <div class="results-diagram">
        <h1 class="results-diagram__header">Ваш результат</h1>
        <ResultsDiagramItem 
            v-for="(answer, index) in answers" 
            :key="index" 
            :answer="answer" 
            :category="getCategory(categories, answer.var)" 
        />
    </div>
</template>

<script src="./ResultsDiagram.js" />

<style lang="scss">
    @import "./ResultsDiagram.scss";
</style>