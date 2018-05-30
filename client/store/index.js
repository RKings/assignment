import Vue from 'vue'
import Vuex from 'vuex'

//Modules

import Breakpoints from './breakpoints'

Vue.use(Vuex)

const state = {
  count: 0
}

const mutations = {
  INCREMENT (state) {
    state.count++
  },
  DECREMENT (state) {
    state.count--
  }
}

const actions = {
  incrementAsync ({ commit }) {
    setTimeout(() => {
      commit('INCREMENT')
    }, 200)
  }
}

const modules = {
    Breakpoints
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  modules
})

export default store
