<script setup>
import { UsersIcon, CollectionIcon } from "@heroicons/vue/solid";

const icons = [
  { icon: CollectionIcon, route: { name: "choice.selector" } },
  { icon: UsersIcon, route: { name: "user.add" } },
];
</script>

<template>
  <div>
    <div class="w-16"></div>
    <div
      class="
        fixed
        top-0
        left-0
        h-screen
        w-16
        m-0
        flex flex-col
        bg-gray-200
        dark:bg-gray-900
      "
    >
      <router-link
        :to="icon.route"
        v-for="icon in icons"
        v-bind:key="icon.icon"
      >
        <component :is="icon.icon" class="sidebar-icon"></component>
      </router-link>
    </div>
  </div>
</template>
