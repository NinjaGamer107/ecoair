import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    windowWidth: window.innerWidth,
    pressedForMobileNav: false
  },
  mutations: {
    updateWindowWidth(state, size) {
      state.windowWidth = size;
    },
    switchMobileNav(state) {
      state.pressedForMobileNav = !state.pressedForMobileNav;
    },
    turnOffMobileNav(state) {
      state.pressedForMobileNav = false;
    }
  },
  actions: {},
  modules: {},
  getters: {
    isMobile: state => {
      return state.windowWidth <= 745;
    }
  }
});
