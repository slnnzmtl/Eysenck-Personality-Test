import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import cookies from "vue-cookies"


Vue.use(Vuex)

const defaultState = () => {
  return {
    gender: '',
    formSubmitted: false,
    quizFinished: false,
    questionIndex: 0,
    answersScores: {
        permissiveness: {
          name: "Дозволенность",
          var: "",
          var: 'permissiveness',
          value: 0,
          max: 14,
        },
        realization: {
          name: "Реализованность",
          var: "realization",
          value: 0,
          max: 12,
        },
        neuroticism: {
          name: "Сексуальная невротичность",
          var: "neuroticism",
          value: 0,
          max: 9,
        },
        impersonalSex: {
          name: "Обезличенный секс",
          var: "impersonalSex",
          value: 0,
          max: 12,
        },
        pornography: {
          name: "Порнография",
          var: "pornography",
          value: 0,
          max: 8,
        },
        shyness: {
          name: "Сексуальная застенчивость",
          var: "shyness",
          value: 0,
          max: 6,
        },
        chastity: {
          name: "Целомудрие",
          var: "chastity",
          value: 0,
          max: 8,
        },
        aversion: {
          name: "Сексуальное отвращение",
          var: "aversion",
          value: 0,
          max: 6,
        },
        excitability: {
          name: "Сексуальная возбудимость",
          var: "excitability",
          value: 0,
          max: 9,
        },
        physicalSex: {
          name: "Физический секс",
          var: "physicalSex",
          value: 0,
          max: 9,
        },
        aggressiveSex: {
          name: "Агрессивный секс",
          var: "aggressiveSex",
          value: 0,
          max: 6,
        },
        libido: {
          name: "Сексуальное либидо",
          var: "libido",
          value: 0,
          max: 34,
        },
        satisfaction: {
          name: "Сексуальная удовлетворенность",
          var: "satisfaction",
          value: 0,
          max: 16,
        },
        MasculinityFemininity: {
          name: "Маскулинность – Фемининность",
          var: "MasculinityFemininity",
          value: 0,
          max: 48,
      },
      empty: {
        name: 'empty',
        var: "empty",
        value: 0,
        max: 0,
      }
    }
  }
}

export default new Vuex.Store({
  plugins: [createPersistedState({
    paths: [
      'gender',
      'answersScores',
      'formSubmitted',
      'questionIndex',
      'quizFinished'
    ],
    getState: (key) => cookies.get(key),
    setState: (key, state) =>  cookies.set(key, state, { expires: 3, secure: true })
  })],
  // state: {
  //   gender: '',
  //   formSubmitted: false,
  //   quizFinished: false,
  //   questionIndex: 0,
  //   answersScores: {
  //       permissiveness: {
  //         name: "Дозволенность",
  //         value: 0,
  //         max: 14,
  //       },
  //       realization: {
  //         name: "Реализованность",
  //         value: 0,
  //         max: 12,
  //       },
  //       neuroticism: {
  //         name: "Сексуальная невротичность",
  //         value: 0,
  //         max: 9,
  //       },
  //       impersonalSex: {
  //         name: "Обезличенный секс",
  //         value: 0,
  //         max: 9,
  //       },
  //       pornography: {
  //         name: "Порнография",
  //         value: 0,
  //         max: 8,
  //       },
  //       shyness: {
  //         name: "Сексуальная застенчивость",
  //         value: 0,
  //         max: 6,
  //       },
  //       chastity: {
  //         name: "Целомудрие",
  //         value: 0,
  //         max: 8,
  //       },
  //       aversion: {
  //         name: "Отвращение к сексу",
  //         value: 0,
  //         max: 6,
  //       },
  //       excitability: {
  //         name: "Сексуальная возбудимость",
  //         value: 0,
  //         max: 9,
  //       },
  //       physicalSex: {
  //         name: "Физический секс",
  //         value: 0,
  //         max: 9,
  //       },
  //       aggressiveSex: {
  //         name: "Агрессивный секс",
  //         value: 0,
  //         max: 6,
  //       },
  //       libido: {
  //         name: "Сексуальное либидо",
  //         value: 0,
  //         max: 9,
  //       },
  //       satisfaction: {
  //         name: "Сексуальная удовлетворенность",
  //         value: 0,
  //         max: 16,
  //       },
  //       MasculinityFemininity: {
  //         name: "Маскулинность – Фемининность",
  //         value: 0,
  //         max: 42,
  //       },
  //     },
  // },
  state: defaultState,
  
  mutations: {
    setGender(state, gender) {
        state.gender = gender
        console.log(state.gender)
    },
    setAnswer(state, { category, value }) {
        state.answersScores[category].value += value
    },
    formSubmit(state) {
        state.formSubmitted = true
    },
    quizFinish(state) {
      state.quizFinished = true
    },
    questionIndexIterate(state) {
      state.questionIndex++
    },
    quizReset(state) {
      Object.assign(state, defaultState())
      console.log(state)
    }
  },
  actions: {
    iterateAnswer({commit}, { category, value }) {
        commit('setAnswer', { category, value })
        // console.log(category + ': ' +)
    },

    setGender({commit}, gender) {
        commit('setGender', gender)
    },

    formSubmit({commit}) {
        commit('formSubmit')
    },
    quizFinish({commit}) {
      commit('quizFinish')
    },
    questionIndexIterate({commit}) {
      commit('questionIndexIterate')
    },
    quizReset({commit}) {
      commit('quizReset')
    }
  },
  getters: {
    gender: state => state.gender,
    quizFinished: state => state.quizFinished
  }
})
