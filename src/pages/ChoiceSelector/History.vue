<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import { ClockIcon, CollectionIcon } from "@heroicons/vue/solid";
import Alert from "./../../components/global/Alert.vue";

const store = useStore();

const history = computed(() => {
  let history = store.state.randomItems.history;
  if (history) {
    var newObject = {};
    var keys = [];

    for (var key in history) {
      keys.push(key);
    }

    for (var i = keys.length - 1; i >= 0; i--) {
      var value = history[keys[i]];
      newObject[keys[i]] = value;
    }

    return newObject;
  }

  return history;
});
</script>

<template>
  <div class="flex-1 flex items-center">
    <div class="flex-1 flex items-center gap-4 flex-col justify-center">
      <Alert
        v-if="!history || Object.keys(history).length < 1"
        class="bg-red-500 text-center"
      >
        There's No history records
      </Alert>

      <template v-else>
        <h1>Random Choices History</h1>

        <div class="flex justify-center mb-1">
          <ClockIcon class="w-1/4 text-gray-600 dark:text-gray-100" />
        </div>

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
          v-for="(i, key) in history"
          v-bind:key="key"
        >
          <span>Item: </span>
          <span
            class="bg-gray-200 dark:bg-gray-800 py-2 px-3 rounded-md"
            v-for="(item, id) in i.item"
            v-bind:key="id"
          >
            {{ item }}
          </span>

          <span>User: </span>
          <span class="bg-gray-200 dark:bg-gray-800 py-2 px-3 rounded-md">
            {{ i.user.name }}
          </span>

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
                  params: { id: key },
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
