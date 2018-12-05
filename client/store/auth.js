import { setToken, unsetToken, getToken } from '~/utils/local-storage.js';

export const state = () => {
  return {
    user: null
  };
};

export const getters = {
  isAuthenticated(state) {
    return !!state.user;
  },
  loggedUser(state) {
    return state.user;
  }
};

export const actions = {
  login({ commit }, payload) {
    return new Promise(async (resolve, reject) => {
      try {
        const user = await this.$axios.$post(`auth/login`, {
          username: payload.username,
          password: payload.password
        });
        commit('setUser', user);
        resolve(user);
      } catch (e) {
        reject(e);
      }
    });
  },
  checkUser({ commit }) {
    return new Promise(async (resolve, reject) => {
      try {
        this.$axios.setToken(getToken(), 'Bearer');
        const user = await this.$axios.$get(`auth/check`);
        commit('setUser', user);
        resolve(user);
      } catch (e) {
        reject(e);
      }
    });
  },
  logout({ commit }) {
    return new Promise((resolve, reject) => {
      commit('unsetUser');
      resolve(true);
    });
  }
};

export const mutations = {
  setUser(state, payload) {
    if (typeof Storage !== 'undefined') {
      setToken(payload.token);
    }
    state.user = payload;
  },
  unsetUser(state) {
    if (typeof Storage !== 'undefined') {
      unsetToken();
    }
    state.user = null;
  }
};
