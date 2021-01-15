<template>
  <div class="progress-bar">
      <div class="progress-bar__fill" :style="{width: getWidth(this.elem.offsetWidth)}">
      </div>
  </div>
</template>

<script src="./ProgressBar.js" />

<style lang='scss'>
  @import './ProgressBar.scss'
</style>

