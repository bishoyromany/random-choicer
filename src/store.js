import { createStore } from "vuex" 
import state from "./store/state";
import mutations from "./store/mutations";
import actions from "./store/actions";

import user from "./store/modules/User";
import randomItems from "./store/modules/RandomItems";

export default createStore({
    modules: {
        user,
        randomItems
    },
    state, mutations, actions
});