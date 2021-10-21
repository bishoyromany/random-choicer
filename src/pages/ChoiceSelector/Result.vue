<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import { BadgeCheckIcon, CollectionIcon } from "@heroicons/vue/solid";
import Alert from "./../../components/global/Alert.vue";

const store = useStore();
const route = useRoute();
const userID = route.params.user;
const operationID = route.params.item;

const user = computed(() => store.getters["user/user"](userID));
const item = computed(() =>
  store.getters["randomItems/operationItem"](operationID)
);
</script>

<template>
  <div class="flex-1 flex items-center">
    <div class="flex-1 flex items-center gap-4 flex-col justify-center">
      <Alert v-if="!user" class="bg-red-500 text-center">
        Item User Not Found
      </Alert>

      <Alert v-if="!item" class="bg-red-500 text-center">
        Selected Item Not Found
      </Alert>

      <template v-if="item">
        <h1>Random Selected Item</h1>

        <div
          class="
            flex flex-col flex-auto
            w-full
            max-w-lg
            gap-2
            bg-gray-50
            p-5
            rounded-md
            shadow-md
            dark:bg-gray-700
          "
        >
          <div class="flex justify-center mb-1">
            <BadgeCheckIcon class="w-1/4 text-gray-600 dark:text-gray-100" />
          </div>

          <span
            class="text-gray-800 inline-block cursor-pointer dark:text-white"
            >Selected Item:
          </span>

          <div
            v-for="(i, key) in item"
            v-bind:key="key"
            class="bg-gray-200 dark:bg-gray-800 py-2 px-3 rounded-md"
          >
            {{ i }}
          </div>

          <span
            class="text-gray-800 inline-block cursor-pointer dark:text-white"
            >Item Owner:
          </span>

          <div class="bg-gray-200 dark:bg-gray-800 py-2 px-3 rounded-md">
            {{ user.name }}
          </div>

          <div>
            <button
              class="
                mt-2
                bg-green-400
                mx-auto
                flex
                justify-center
                px-5
                py-2
                rounded-md
                text-white
                hover:bg-green-600
                transition-all
              "
            >
              <router-link
                class="items-center justify-center flex"
                :to="{
                  name: 'choice.selector.retry',
                  params: { id: operationID },
                }"
              >
                <CollectionIcon class="h-5 w-5 mr-2" /> Retry ?
              </router-link>
            </button>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>
