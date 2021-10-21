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
    choose({state, commit, dispatch}){
        let keysList = Object.keys(state.items);
        let keys = [];
        for(let key of keysList){
            if(state.items[key] && state.items[key].length > 0){
                keys.push(key);
            }
        }

        let item = keys[Math.floor(Math.random() * keys.length)];
        if(!item){
            alert("Failed To Select An Item");
        }

        dispatch("updateHistroy", {[item]: state.items[item]});

    },
    updateHistroy({state, commit}, item){
        let id = uuid();
        let history = {
            items: state.items,
            item,
            id
        }

        state.history[id] = history;
        state.lastItem = history;

        window.localStorage.setItem("history", JSON.stringify(state.history));

        commit('setItems', {[uuid()]: ""});
    }
}

const getters = {
    operationItem: (state) => id => {
        let item = state.history[id];
        if(item){
            item = item.item;
        }
        return item ? item : null;
    }
}

export default {
    namespaced: true,
    state, mutations, actions, getters
}