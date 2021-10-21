import {v4 as uuid} from "uuid";

let items = window.localStorage.getItem("items");
if(items){
    items = JSON.parse(items);
}else{
    items = {[uuid()]: ""};
}

const state = () => ({
    items
});

const mutations = {
    setItems(state, payload){
        state.items = payload;
        window.localStorage.setItem("items", JSON.stringify(payload));
    }
}

const actions = {
    update({commit}, payload){
        let items = payload;
        commit("setItems", items);

    },
    remove({commit, state}, payload){
        let items = state.items;
        delete items[payload];
        commit("setItems", items);
    }
}

export default {
    namespaced: true,
    state, mutations, actions
}