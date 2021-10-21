import {v4 as uuid} from "uuid";

let users = window.localStorage.getItem("users");
if(users){
    users = JSON.parse(users);
}else{
    users = [];
}

let user = window.localStorage.getItem("user");
if(user){
    user = JSON.parse(user);
}else{
    user = [];
}

const state = () => ({
    users, user
});

const mutations = {
    setUsers(state, payload){
        state.users = payload;
        window.localStorage.setItem("users", JSON.stringify(payload));
    },
    select(state, payload){
        let user = state.users.filter(user => user.id === payload)[0];
        if(user){
            window.localStorage.setItem("user", JSON.stringify(user));
            state.user = user;
        }else{
            alert("User Not Found");
        }

    },
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

const getters = {
    user: (state) => payload => {
        let user = state.users.filter(user => user.id == payload)[0];
        return user ? user : null;   
    }
}

export default {
    namespaced: true,
    state, mutations, actions, getters
}