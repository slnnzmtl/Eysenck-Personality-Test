<template>
  <div class="hello-page">
    <img src="@/assets/logo.png" alt="" class="hello-page__logo">
  <h1 class="hello-page__header">Тест Айзенка</h1>
  <p class="hello-page__text">
    Вам предстоит дать ответы на 154 вопросов, выбрав вариант «да» или «нет».
    Если в силу каких-либо причин вы посчитаете невозможным дать определенный ответ, нажмите «не уверен».
    Постарайтесь не задерживаться подолгу над вопросами, пытаясь вникнуть в каждое слово; лучше отвечать сразу, быстро.
    <br />
    <br />
    Не удивляйтесь, если обнаружите, что некоторые вопросы повторяются: есть очень серьезные причины к тому, чтобы спросить об одном и том же чуть по-иному.
    <br />
    Некоторые вопросы могут показаться слишком личными, – помните, что ответы на каждый отдельный вопрос нигде не сохраняются, и никто (даже вы сами) не сможет их увидеть по окончании теста.
    <br />
    Мужская и женская версии опросника различаются как формулировкой вопросов, так и обработкой результатов.
  </p>
  <div class="hello-page__instructions">
    <h2 class="hello-page__header instructions_header">Инструкция</h2>
    <p class="hello-page__text instructions_text">
      Вам предстоит дать ответы на 154 вопросов, выбрав вариант «да» или «нет».
      <br />
      Если в силу каких-либо причин вы посчитаете невозможным дать определенный ответ, нажмите «не уверен».
      Постарайтесь не задерживаться подолгу над вопросами, пытаясь вникнуть в каждое слово; лучше отвечать сразу, быстро.
    </p>
  </div>

  <div class="choose-gender">
    <p v-if="!quizFinished" class="choose-gender__header">
      Выберите ваш пол
    </p>
    <div v-if="!quizFinished" class="choose-gender__buttons-wrapper">
        <button @click="setButtonActive('man')" class="choose-gender__button button_man " :class="{ 'button_active_man' : gender == 'man'}">
          <div class="circle" >
            <img src="@/assets/check-blue.png" alt="" class="circle__check" v-if="gender == 'man'">
          </div>
          Мужчина
        </button>
        <button @click="setButtonActive('woman')" class="choose-gender__button button_woman" :class="{ 'button_active_woman' : gender == 'woman'}">
          <div class="circle" >
            <img src="@/assets/check-red.png" alt="" class="circle__check" v-if="gender == 'woman'">
          </div>
          Женщина
        </button>
    </div>
    <p :style="{visibility: errorToggle ? 'visible' : 'hidden'}" class="choose-gender__error-message">Вам нужно выбрать пол, чтобы начать тестирование</p>
    <button v-if="!quizFinished" @click="submit" class="choose-gender__button submit_button" :class="{ 'submit_button_active' : gender }">НАЧАТЬ ТЕСТИРОВАНИЕ</button>
    <reset-button v-if="quizFinished" />
  </div>
</div>
</template>

<script>
import {mapState} from 'vuex'
import resetButton from './resetButton.vue'
export default {
	components: { resetButton },
  name: 'HelloPage',
  data() {
    return {
      gender: '',
      errorToggle: false
    }
  },
  computed: mapState({
    quizFinished: state => state.quizFinished
  }),
  methods: {
    setButtonActive(value) {
      this.gender = value
    },
    submit() {
      if (this.gender) {
        this.$store.dispatch('setGender', this.gender)
        this.$router.push('/quiz')
      } else {
        this.errorToggle = true
      }
    },
    quizReset() {
      this.$store.dispatch('quizReset')
    }
  }
 
}
</script>

<style lang="scss">
.hello-page {
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;

  // @media(max-width: 1300px) {
  //       width: 700px;
  // }

    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 25px;

    
      @media(max-width: 700px) {
        font-size: 14px;
        line-height: 22px;
      }

  &__logo {
    width: 126.02px;
    height: 38.29px;  
  }

  &__header {
    font-family: Cormorant;
    font-style: normal;
    font-weight: bold;
    font-size: 35px;
    // line-height: 60px;
    color: #FC7076;
  }

  .instructions_header {
    font-size: 30px;
    
    @media(max-width: 1300px) {
      font-size: 24px; 
    }

  }

  &__text {
   
  }

  .choose-gender {
    // width: 380px;
    width: 100%;
    max-width: 380px;
    display: flex;
    flex-direction: column;
    align-items: center;

    &__header {
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 30px;
    }
    
    &__buttons-wrapper {
      width: 100%;
      display: flex;
      justify-content: space-between;
      @media(max-width: 400px) {
        flex-direction: column;
        min-height: 120px;
        align-items: center;
      }
    }

    &__button, &__button-reset {
      
      box-sizing: border-box;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      // max-width: 180px;
      width: 100%;
      margin: 5px;
      height: 50px;
      outline: none;
      background-color: #fff;
      border: none;
      box-shadow: 0px 2.83688px 8.09px rgba(196, 196, 196, 0.31);
      border-radius: 9.21986px;
      cursor: pointer;
      font-family: Open Sans;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 34px;
      &:hover {
        color: white;
      }

        .circle {
          width: 29.08px;
          height: 29.08px;
          background: #EDF5F8;
          border-radius: 30px;
          margin-left: 15px;
          margin-right: 15px;
        }
      
    }

    .button_man {
      border-left: 9.57px solid #7C98FB;
      // margin-right: 10px;

      &:hover {
        background-color: #7C98FB;
      }
    }

    .button_active_man {
      color: #fff;
      background-color: #7C98FB;
    }

    .button_woman {
      &:hover {
        background: #FB7C81;
      }
      border-left: 9.57px solid #FB7C81;
    }

    .button_active_woman {
      background-color: #FB7C81;
      color: #fff;
    }

     .submit_button {
        width: 100% !important;
        height: 60px;
        color: white;
        background-color: #CBBCBC;
        justify-content: center;
        font-weight: bold;
        font-size: 18px;
        line-height: 25px;
        cursor: not-allowed;
      }

      .submit_button_active {
        background-color: #FB7C81;
        cursor: pointer;

        &:hover {
          background-color: #F34F56;
        }
      }
    
    &__error-message {
      font-family: Open Sans;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      // line-height: 30px;
      @media(max-width: 400px) {
        text-align: center;
      }
      color: #FF474E;
    }
  }

 

}
</style>
