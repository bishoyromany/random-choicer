<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import { XIcon } from "@heroicons/vue/solid";

const store = useStore();

const users = computed(() => store.state.user.users);

const removeUser = (id) => {
  store.dispatch("user/remove", id);
};
</script>

<template>
    <div
        class="w-full flex-auto flex flex-col max-w-lg md:max-w-md gap-2 bg-gray-50 p-5 rounded-md shadow-md"
    >
        <h4 class="text-center">Users List</h4>
        <template v-if="users.length > 0">
            <div
                v-for="user in users"
                :key="user.id"
                class="cursor-pointer flex-1 bg-gray-200 p-3 items-center rounded-md flex justify-between"
            >
                <span>{{ user.name }}</span> 
                <XIcon @click="removeUser(user.id)" class="w-3 h-3 text-red-600 cursor-pointer" />
            </div>
        </template>

        <template v-else>
            <div class="w-full bg-red-400 py-2 px-3 rounded-md ">You have no users</div>
        </template>

    </div>
</template>