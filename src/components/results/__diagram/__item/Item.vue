<template>
<div class="item">
        <p class="item__category-name">{{answer.name}}:</p>
        <div class="item__value">
            <ProgressBar :value="answer.value" :max="answer.max"></ProgressBar>
            <div class="item__max">{{answer.value}} / {{categories ? answer.max   : 0}}</div>
        </div>
</div>
</template>

<script src="./Item.js" />

<style lang='scss'>
    @import './Item.scss';
</style>