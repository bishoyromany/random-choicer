<script setup>
import Sidebar from "./components/Layout/Sidebar.vue";
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
</script>

<template>
  <div
    class="w-screen min-h-screen m-auto flex dark:bg-gray-800 dark:text-white"
  >
    <Sidebar />
    <router-view></router-view>
  </div>
</template>

<style></style>
