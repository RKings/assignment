import Vue from 'vue'
import Vuex from 'vuex'

//Modules

import breakpoints from './breakpoints'
import instagram from './instagram'

Vue.use(Vuex)

const state = {

}

const mutations = {

}

const actions = {

}

const modules = {
    breakpoints,
    instagram
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  modules
})

export default store
