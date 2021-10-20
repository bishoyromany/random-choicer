import {v4 as uuid} from "uuid";

let users = window.localStorage.getItem("users");
if(users){
    users = JSON.parse(users);
}else{
    users = [];
}

const state = () => ({
    users
});

const mutations = {
    addUser(state, payload){
        state.users.push(payload);
    }
}

const actions = {
    addUser({commit, state}, payload){
        payload.id = uuid();
        commit("addUser", payload);

        window.localStorage.setItem("users", JSON.stringify(state.users));
    }
}

export default {
    namespaced: true,
    state, mutations, actions
}