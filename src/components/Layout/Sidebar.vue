<script setup>
import { UsersIcon, CollectionIcon, ClockIcon } from "@heroicons/vue/solid";

const icons = [
  { icon: CollectionIcon, route: { name: "choice.selector" } },
  { icon: UsersIcon, route: { name: "user.add" } },
  { icon: ClockIcon, route: { name: "choice.selector.history" } },
];
</script>

<template>
  <div>
    <div class="w-10 md:w-16"></div>
    <div
      class="
        fixed
        top-0
        left-0
        h-screen
        w-10
        md:w-16
        m-0
        flex flex-col
        bg-gray-200
        dark:bg-gray-900
        sm:w-10
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
