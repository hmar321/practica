import { createStore } from 'vuex';

export default createStore({
    state: {
        token: 'Tu string token aquí'
    },
    mutations: {
        settoken(state, token) {
            state.token = token
        }
    },
    getters: {
        token: state=> state.token
    }
})