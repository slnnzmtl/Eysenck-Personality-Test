<template>
  <div class="progress-bar">
      <div class="progress-bar__fill" :style="{width: getWidth(this.elem.offsetWidth)}">
      </div>
  </div>
</template>

<script>
export default {
  name: 'ProgressBar',
    data: function () {
          return {
            data: 0,
            elem: '',
          }
        },
        props: {
            value: Number,
            max: Number,
        },
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
    width: 100%;
    height: 20px;
    border: 1px solid #FCDFDF;
    border-radius: 6px;
    overflow: hidden;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
   
    &__fill {
      background: #FB7C81 !important;          
      text-align: center;
      border: 1px solid #FB7C81;
    }
}
</style>

