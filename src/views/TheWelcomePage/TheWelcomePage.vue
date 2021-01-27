<template>
  <div class="welcome-page">
    <img src="@/assets/logo.png" class="welcome-page__logo">
  <h1 class="welcome-page__header">Тест Айзенка</h1>
  <p class="welcome-page__text description_text">
    Личный опросник установок к сексу создан Г. Айзенком.
    Опросник не просто исследует отношение к сексу конкретного человека — он ориентирован на определение будущего удовлетворения брачными отношениями, а также на выявление потенциальных и действительных отклонений в сексуальной жизни.
    <br />
    <br />
    C помощью данной методики может быть проведена диагностика сексуального личностного поведения, что, в свою очередь, поможет исправить или предотвратить ошибки и сделать сексуальную жизнь и брак партнеров счастливее.
  </p>
  <div class="welcome-page__instructions">  
    <h2 class="welcome-page__header instructions_header">Инструкция</h2>
    <p class="welcome-page__text instructions_text">
      Вам предстоит дать ответы на {{questions.length}} вопросов, выбрав вариант «да» или «нет».
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
  </div>

  <div class="choose-gender">
    <p v-if="!quizFinished" class="choose-gender__header">
      Выберите ваш пол
    </p>
    <div v-if="!quizFinished" class="choose-gender__buttons-wrapper">
        <button 
          class="choose-gender__button button_man" 
          @click="chooseGender('man')" 
          :class="{ 'active' 
          :gender == 'man'}"
        >
          <div class="circle">
            <img 
              src="@/assets/check-blue.png" 
              class="circle__check" 
              v-if="gender == 'man'"
            >
          </div>
          Мужчина
        </button>
        <button 
          class="choose-gender__button button_woman"
          @click="chooseGender('woman')" 
          :class="{ 'active' : gender == 'woman'}"
        >
          <div class="circle">
            <img 
              src="@/assets/check-red.png" 
              class="circle__check" 
              v-if="gender == 'woman'"
            >
          </div>
          Женщина
        </button>
    </div>
    <p v-if="errorToggle" class="choose-gender__error-message">Вам нужно выбрать пол, чтобы начать тестирование</p>
    <button 
      v-if="!quizFinished" 
      @click="submit" 
      class="choose-gender__button submit_button" 
      :class="{ 'active' : gender }"
    >
      НАЧАТЬ ТЕСТИРОВАНИЕ
    </button>
    <ResetButton v-if="quizFinished" />
  </div>
</div>
</template>

<script src="./TheWelcomePage.js" />

<style lang="scss">
  @import './TheWelcomePage.scss';
</style>
