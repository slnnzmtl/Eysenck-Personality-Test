<template>
  <div class="quiz-form">
      <p class="quiz-form__header">
          Чтобы получить результаты теста, заполните форму ниже
      </p>
      <form @submit.prevent="submit(user)" class="quiz-form__form">
          <input class="quiz-form__input quiz-form__name" placeholder="Ваше имя" type="text" name="first_name" v-model="user.first_name" :class="{'input_error' : errors.name }">
          <input class="quiz-form__input quiz-form__phone" placeholder="+38 (096) 123 - 45 - 67" type="text" name="phone" v-model="user.phone" :class="{'input_error' : errors.phone }">
          <input class="quiz-form__input quiz-form__email" placeholder="Email" type="text" name="email" v-model="user.email" :class="{'input_error' : errors.email }">
          <p class="quiz-form__privacy-label"  :class="{'privacy_error' : errors.privacy }">
            <input type="checkbox" class="quiz-form__privacy" name="privacy" v-model="privacy">
            Я согласен (-на) на обработку персональных данных
          </p>
          <input @submit.prevent="submit(user)" type="submit" value="ПОЛУЧИТЬ РЕЗУЛЬТАТ" class="quiz-form__input quiz-form__submit">
        </form>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import axios from 'axios'
export default {
    data() {
        return {
            answer: '',
            user: {
                first_name: '',
                email: '',
                phone: '',
            },
            privacy: false,
          formSubmit: false,
          errors: {
              name: false,
              email: false,
              phone: false,
              privacy: false
          }
        }
    },
    methods: {
        submit(user) {
            if (!this.validEmail(user.email)) {
                this.errors.email = true
            } else {
                this.errors.email = false
            }
            if (!this.validName(user.first_name)) {
                this.errors.name = true
            } else {
                this.errors.name = false
            }
            if (!this.validPhone(user.phone)) {
                this.errors.phone = true
            } else {
                this.errors.phone = false
            } 
            if (!this.privacy) {
                this.errors.privacy = true
            } else {
                this.errors.privacy = false
            }

             if (!this.errors.email && !this.errors.name && !this.errors.phone && !this.errors.privacy) {
                this.sendUser(user)
                this.$store.dispatch('formSubmit')
             } else {
                 setTimeout(()=>{
                     this.errors.email = false,
                     this.errors.name = false,
                     this.errors.phone = false,
                     this.errors.privacy = false
                 },3000)
             }
        },
        validEmail(email) {
            // var reg = 
            return /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/.test(email)
        },
        validName(name) {
            var reg = /[a-zA-ZА-я]{2,5}/
            return reg.test(name)
        },
        validPhone(phone) {
            var reg = /^\+?\d{10,13}$/
            return reg.test(phone)
        },
        sendUser(user) {
            var data = this.formatData(user, this.answersScores)
            this.postData(data)
        },
        formatData(user, answers) {
            user.test = this.answerValues(answers)
            return user
        },
        answerValues(e) {
            let values = new Map()
            Object.values(e).forEach(e => {
                values.set(e.name, e.value)
            })
          return JSON.stringify(Object.fromEntries(values))
        },
        encode(str) {
            return encodeURIComponent(str)
        },
        postData(body) {
            let url = '/quiz/backend/test.php?email=' + body.email + "&first_name=" + body.first_name + "&phone=" + body.phone + '&result=' + this.encode(body.test)
            fetch (url)
        }

    },
    computed: mapState({
            answersScores: state => state.answersScores,
        })
    
}
</script>

<style lang="scss">

.quiz-form {
    max-width: 670px;
    max-height: 615px;
    box-shadow: 0px 2.83688px 23.09px rgba(235, 192, 192, 0.22);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    font-family: Open Sans;

    &__header {
        max-width: 500px;
        width: 80%;
        font-style: normal;
        font-weight: normal;
        font-size: 23px;
        text-align: center;
        margin: 30px 0px 30px 0px;
        @media (max-width: 1000px) {
            font-size: 16px;
        
        }

    }

    &__form {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 80%;

    }

    &__input {
            // max-width: 527px;
            width: 100%;
            height: 70px;
            @media (max-width: 500px) {
                height: 55px;
                font-size: 13px;
            }
            border: 1px solid #EBEBEB;
            box-sizing: border-box;
            border-radius: 6px;
            padding: 15px;
            // padding-left: 30px;
            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            line-height: 34px;
            margin-bottom: 20px;
            color: #838383;
            outline: none;

            &:focus {
                border: 1px solid #F4CCCC;
            }
        }

        &__privacy-label {
            display: flex;
            align-items: center;
            margin-top: 0px;
            
            font-style: normal;
            font-weight: normal;
            font-size: 14px;
            color: #838383;
        }

        &__privacy {
                width: 25px;
                height: 25px;
                border: 1px solid #CBCBCB;
                box-sizing: border-box;
                border-radius: 4px;
                margin-right: 10px;
                color: #FB6369;         
                &:checked {
                    color: #FB6369;
                }
            }

    &__submit {
            margin-top: 20px;
            height: 70px;
            @media(max-width: 500px) {
                height: 55px;
                font-size: 15px;
            }
            background: #FB6369;
            font-weight: bold;
            font-size: 18px;
            line-height: 25px;
            color: #fff;
            cursor: pointer;
        }

    .input_error {
        border: 1px solid #F22830;
    }

    .privacy_error {
        border-bottom: 1px solid #F22830;
        color: #F22830;

    }
}
    
</style>