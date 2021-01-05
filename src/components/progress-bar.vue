<template>
  <div class="progress-bar">
      <div class="progress-bar__fill" :style="{width: getWidth(this.elem.offsetWidth)}">
      </div>
  </div>
</template>

<script>
// const { fill } = require("../questions")
// import fill from '@/assets/questions.js'

export default {
  data: function () {
        return {
          data: 0,
          elem: '',
        }
      },
      props: [
          "value",
          "max"
      ],
      mounted() {
        this.elem = this.$el
      },
      methods: {
        getWidth(offsetWidth) {
          let step =  offsetWidth / this.max
          if (step) {
            return step * this.value / offsetWidth * 100 + '%'
          } else {
            return '0px '
          }
        }
      }
}
</script>

<style lang='scss'>
  .progress-bar {
      // max-width: 484px;
      width: 100%;
      height: 20px;
      border: 1px solid #FCDFDF;
      border-radius: 6px;
      overflow: hidden;
      display: flex;
     
      .progress-bar__fill {
        background: #FB7C81 !important;          
        text-align: center;
        border: 1px solid #FB7C81;
      }
  }
</style>

