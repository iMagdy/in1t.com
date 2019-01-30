import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      locales: ['en', 'ar'],
      locale: 'en',
      viewProperties: {}
    },
    mutations: {
      SET_LANG(state, locale) {
        if (state.locales.indexOf(locale) !== -1) {
          state.locale = locale
        }
      },
      SET_VIEW_PROPERTIES(state, viewProperties) {
        state.viewProperties = viewProperties
      }
    },
    actions: {
      nuxtServerInit({ commit }, { req }) {
        if (req.viewProperties) {
          commit('SET_VIEW_PROPERTIES', req.viewProperties)
        }
      }
    }
  })
}

export default createStore