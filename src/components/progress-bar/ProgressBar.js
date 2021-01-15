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