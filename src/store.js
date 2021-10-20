import { createStore } from "vuex" 
import state from "./store/state";
import mutations from "./store/mutations";
import actions from "./store/actions";

import user from "./store/modules/User";

export default createStore({
    modules: {
        user
    },
    state, mutations, actions
});