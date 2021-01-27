<template>
<div class="results-diagram-item">
        <p class="results-diagram-item__category-name">{{answer.name}}:</p>
        <div class="results-diagram-item__value">
            <ProgressBar 
                :value="answer.value" 
                :max="answer.max"
            />
            <div class="results-diagram-item__max">{{answer.value}} / {{categories ? answer.max   : 0}}</div>
        </div>
</div>
</template>

<script src="./ResultsDiagramItem.js" />

<style lang='scss'>
    @import './ResultsDiagramItem.scss';
</style>