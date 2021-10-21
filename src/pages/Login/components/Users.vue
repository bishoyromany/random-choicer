<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import { XIcon } from "@heroicons/vue/solid";
import Alert from "./../../../components/global/Alert.vue";

const store = useStore();

const users = computed(() => store.state.user.users);

const removeUser = (id) => {
  store.dispatch("user/remove", id);
};
</script>

<template>
    <div
        class="w-full flex-auto flex flex-col max-w-lg md:max-w-md gap-2 dark:bg-gray-700 bg-gray-50 p-5 rounded-md shadow-md"
    >
        <h4 class="text-center">Users List</h4>
        <template v-if="users.length > 0">
            <div
                v-for="user in users"
                :key="user.id"
                class="cursor-pointer flex-1 dark:bg-gray-600 bg-gray-200 p-3 items-center rounded-md flex justify-between"
            >
                <span>{{ user.name }}</span> 
                <XIcon @click="removeUser(user.id)" class="w-4 h-4 text-red-600 cursor-pointer font-bold" />
            </div>
        </template>

        <template v-else>
            <Alert class="bg-red-400">
                You have no users
            </Alert>
        </template>

    </div>
</template>