<script setup>
import { ref, reactive } from "vue";
import Users from "./components/Users.vue";
import { LoginIcon } from "@heroicons/vue/outline";
import { UserCircleIcon } from "@heroicons/vue/solid";
import { useStore } from "vuex";

const name = ref(null);

const state = reactive({ name });

const store = useStore();

const addUser = () => {
  if (state.name && state.name.length < 1) {
    return false;
  }
  store.dispatch("user/add", { name: state.name });
  state.name = null;
};
</script>

<template>
  <div class="flex-1 flex items-center">
    <div class="flex-1 flex items-center gap-4 flex-col justify-center py-4">
      <h1>Manage Users</h1>

      <div
        class="
          flex flex-col flex-auto
          max-w-lg
          gap-2
          w-full
          bg-gray-50
          p-5
          rounded-md
          shadow-md
          dark:bg-gray-700
        "
      >
        <div class="flex justify-center mb-1">
          <UserCircleIcon class="w-1/4 text-gray-600 dark:text-gray-100" />
        </div>
        <label
          for="name"
          class="text-gray-800 inline-block cursor-pointer dark:text-white"
          >Your Name</label
        >
        <input
          type="text"
          v-model="name"
          id="name"
          placeholder="Your Name"
          class="
            pl-3
            py-2
            pr-2
            w-full
            max-w-lg
            md:max-w-md
            border-gray-400 border-2
            hover:border-gray-500
            rounded-md
            dark:text-black
          "
        />
        <div>
          <button
            @click="addUser"
            class="
              mt-2
              bg-green-400
              items-center
              flex
              mx-auto
              px-5
              py-2
              rounded-md
              text-white
              hover:bg-green-600
              transition-all
            "
          >
            <LoginIcon class="h-5 w-5 mr-2" />Add User
          </button>
        </div>
      </div>

      <Users />
    </div>
  </div>
</template>
