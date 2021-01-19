<template>
  <div class="quiz-form">
      <p class="quiz-form__header">
          Чтобы получить результаты теста, заполните форму ниже
      </p>
      <form @submit.prevent="submit(user)" class="quiz-form__form">
          <input class="quiz-form__input quiz-form__name" placeholder="Ваше имя" type="text" name="first_name" v-model="user.first_name" :class="{'input_error' : errors.name }">
          <input class="quiz-form__input quiz-form__phone" placeholder="Телефон" type="text" name="phone" v-model="user.phone" :class="{'input_error' : errors.phone }">
          <input class="quiz-form__input quiz-form__email" placeholder="Email" type="text" name="email" v-model="user.email" :class="{'input_error' : errors.email }">
          <p class="quiz-form__privacy-label"  :class="{'privacy_error' : errors.privacy }">
            <input type="checkbox" class="quiz-form__privacy" name="privacy" v-model="privacy">
            Я согласен (-на) на обработку персональных данных
          </p>
          <input @submit.prevent="submit(user)" type="submit" value="ПОЛУЧИТЬ РЕЗУЛЬТАТ" class="quiz-form__input quiz-form__submit">
        </form>
  </div>
</template>

<script src="./Form.js" />

<style lang="scss">
    @import './Form.scss';
</style>