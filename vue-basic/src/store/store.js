import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
let store = new Vuex.Store({
    state: {
        totalPrice: 0
    },
    mutations: {
        increment(state, price){
            state.totalPrice += price;
        },
        decrement(state, price){
            state.totalPrice -= price;
        }

    },
    getters:{
        getTotal (state) {
            return state.totalPrice;
        }
    },
    actions:{
        increase (context,price) {
            context.commit('increment',price);
        }
    }
});
export default store;