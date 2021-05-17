import Vue from 'vue';
import Vuex from 'vuex';
import defaultPopupTemplateStyles from '../app/defaultPopup';
import { ISavedTemplate } from '../interfaces/index';

Vue.use(Vuex);

interface RootState {
  popupTemplateStyles: ISavedTemplate;
}

export default new Vuex.Store<RootState>({
  state: {
    popupTemplateStyles: localStorage.getItem('popup-template') ? JSON.parse(localStorage.getItem('popup-template') || '') : defaultPopupTemplateStyles,
  },
  getters: {
    popupTemplate(state) {
      return state.popupTemplateStyles;
    },
  },
  mutations: {
    UPDATE_POPUP(state: RootState, { id, newStyle }) {
      const affectedElement = state.popupTemplateStyles[id as string];
      if (affectedElement) {
        const { left, top } = newStyle.value;
        console.log(affectedElement, left, top);
        affectedElement.styles.left = left;
        affectedElement.styles.top = top;
      }
    },
  },
  actions: {
    UpdatePopUpTemplate({ commit }, payload) {
      commit('UPDATE_POPUP', payload);
    },
  },
  modules: {
  },
});
