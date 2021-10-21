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
    setUsers(state, payload){
        state.users = payload;
        window.localStorage.setItem("users", JSON.stringify(payload));
    }
}

const actions = {
    add({commit, state}, payload){
        payload.id = uuid();
        let users = state.users;
        users.push(payload);
        commit("setUsers", users);

    },
    remove({commit, state}, payload){
        let users = state.users.filter(user => user.id !== payload);
        commit("setUsers", users);
    }
}

export default {
    namespaced: true,
    state, mutations, actions
}