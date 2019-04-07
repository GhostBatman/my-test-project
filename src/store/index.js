import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = () => new Vuex.Store({

  state: {
    products: [],
  },
  getters: {},
  mutations: {
    loadProducts (state, payload) {
      state.products = payload
    },
    // setCurrent (state, payload) {
    //   state.currentTask = payload.currentTask
    //   state.currentList = payload.currentList
    // },
    // updateCurrentName (state, payload) {
    //   state.currentTask.name = payload
    // },
    // updateCurrentDate (state, payload) {
    //   state.currentTask.due_date = payload
    // },
    // updateCurrentDescription (state, payload) {
    //   state.currentTask.description = payload
    // }
  },
  actions: {},
})

