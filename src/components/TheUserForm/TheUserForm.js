
import { mapState } from 'vuex'
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