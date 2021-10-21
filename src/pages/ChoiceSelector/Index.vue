<script setup>
import { ref, reactive } from "vue";
import AddUser from "./../Login/AddUser.vue";
import { PlayIcon } from "@heroicons/vue/outline";
import { CollectionIcon } from "@heroicons/vue/solid";
import { useStore } from "vuex";
import { v4 as uuid } from "uuid";

const items = ref({ [uuid()]: "" });

const state = reactive({ items });

const store = useStore();

const addAnotherInput = (data, id) => {
  if (state.items[id] && state.items[id].length > 0) {
    let keyIndex = Object.keys(state.items).indexOf(id);
    if (keyIndex + 1 === Object.keys(state.items).length) {
      state.items[uuid()] = "";
    }
  }
};
</script>

<template>
  <div class="flex-1 flex items-center">
    <div class="flex-1 flex items-center gap-4 flex-col justify-center p-4">
      <h1>Add Random Items</h1>

      <div
        class="
          flex flex-col flex-auto
          max-w-lg
          md:max-w-md
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
          <CollectionIcon class="w-1/4 text-gray-600 dark:text-gray-100" />
        </div>

        <input
          v-for="(item, id) in items"
          type="text"
          :key="id"
          v-model="items[id]"
          :id="id"
          @input="(data) => addAnotherInput(data, id)"
          placeholder="Item Name"
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
            <PlayIcon class="h-5 w-5 mr-2" /> Random Choice
          </button>
        </div>
      </div>

      <AddUser class="w-full" />
    </div>
  </div>
</template>
