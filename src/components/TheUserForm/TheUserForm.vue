<template>
  <div class="user-form">
      <p class="user-form__header">
          Чтобы получить результаты теста, заполните форму ниже
      </p>
      <form @submit.prevent="submit(user)" class="user-form__form">
          <input 
            class="user-form__input user-form__name" placeholder="Ваше имя" type="text" name="first_name" 
            v-model="user.first_name" 
            :class="{'input_error' : errors.name }"
          >
          <input 
            class="user-form__input user-form__phone" placeholder="380951111111" type="text" name="phone" 
            v-model="user.phone" 
            :class="{'input_error' : errors.phone }">
          <input 
            class="user-form__input user-form__email" placeholder="Email" type="text" name="email" 
            v-model="user.email" 
            :class="{'input_error' : errors.email }"
          >
          <p 
            class="user-form__privacy-label"  
            :class="{'privacy_error' : errors.privacy }"
          >
            <input 
              type="checkbox" class="user-form__privacy" name="privacy" 
              v-model="privacy"
            >
              Я согласен (-на) на обработку персональных данных
          </p>
          <input 
            type="submit" value="ПОЛУЧИТЬ РЕЗУЛЬТАТ" class="user-form__input user-form__submit"
            @submit.prevent="submit(user)" 
          >
        </form>
  </div>
</template>

<script src="./TheUserForm.js" />

<style lang="scss">
    @import './TheUserForm.scss';
</style>