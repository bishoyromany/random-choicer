<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const users = computed(() => store.state.user.users);

</script>

<template>
    <div
        class="w-full flex-auto flex flex-col max-w-lg md:max-w-md gap-2 bg-gray-50 p-5 rounded-md shadow-md"
    >
        <h4 class="text-center">Users List</h4>
        <div
            v-for="user in users"
            :key="user.id"
            class="cursor-pointer flex-1 bg-gray-200 p-3 rounded-md"
        >
            <span>{{ user.name }}</span>
        </div>
    </div>
</template>