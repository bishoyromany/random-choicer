import {v4 as uuid} from "uuid";

let items = window.localStorage.getItem("items");
if(items){
    items = JSON.parse(items);
}else{
    items = {[uuid()]: ""};
}

let history = window.localStorage.getItem("history");
if(history){
    history = JSON.parse(history);
}else{
    history = {};
}

const state = () => ({
    items,
    history,
    lastItem: {}
});

const mutations = {
    setItems(state, payload){
        state.items = payload;
        window.localStorage.setItem("items", JSON.stringify(payload));
    },
    updateHistroy(state, item){
        let id = uuid();
        let history = {
            items: state.items,
            item,
            id
        }

        state.history[id] = history;
        state.lastItem = history;

        window.localStorage.setItem("history", JSON.stringify(state.history));

        state.items = {[uuid()]: ""};
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
    },
    choose({state, commit}){
        const keys = Object.keys(state.items);
        let item = keys[Math.floor(Math.random() * keys.length)];
        if(!item){
            alert("Failed To Select An Item");
        }

        commit("updateHistroy", {[item]: state.items[item]});

    }
}

export default {
    namespaced: true,
    state, mutations, actions
}