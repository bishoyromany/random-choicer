<script setup>
import { ref, computed, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import AddUser from "./../Login/AddUser.vue";
import { PlayIcon } from "@heroicons/vue/outline";
import { CollectionIcon, XIcon } from "@heroicons/vue/solid";
import { useStore } from "vuex";
import { v4 as uuid } from "uuid";
import Alert from "./../../components/global/Alert.vue";

const store = useStore();

const router = useRouter();

const route = useRoute();

const operationID = route.params.id;

if (operationID) {
  store.dispatch("randomItems/setHistoryItems", operationID);
}

const user = ref(store.state.user.user.id);

const items = computed(() => {
  return store.state.randomItems.items;
});

const users = computed(() => store.state.user.users);

const lastItemID = computed(() => store.state.randomItems.lastItem.id);

watch(user, (user) => {
  store.commit("user/select", user);
});

watch(lastItemID, (item) => {
  router.push({
    name: "choice.selector.result",
    params: {
      user: user.value,
      item,
    },
  });
});

const addAnotherInput = (data, id) => {
  let localItems = items.value;
  if (localItems[id] && localItems[id].length > 0) {
    let keyIndex = Object.keys(localItems).indexOf(id);
    if (keyIndex + 1 === Object.keys(localItems).length) {
      localItems[uuid()] = "";
    }
  }

  store.commit("randomItems/setItems", localItems);
};

const cleanInput = (id) => {
  let localItems = items.value;
  if (Object.keys(localItems).length > 1) {
    delete localItems[id];
  } else {
    localItems[id] = "";
  }
  store.commit("randomItems/setItems", localItems);
};

const choose = () => {
  store.dispatch("randomItems/choose");
};
</script>

<template>
  <div class="flex-1 flex items-center">
    <div class="flex-1 flex items-center gap-4 flex-col justify-center">
      <Alert v-if="users.length < 1" class="bg-red-500 text-center">
        Add At Least One User, Before Processing To Random Items Choicer
      </Alert>

      <AddUser class="w-full" v-if="users.length < 1" />

      <template v-if="users.length > 0">
        <Alert v-if="!user" class="bg-red-500 text-center">
          Make Sure To Select A User
        </Alert>

        <h1>Add Random Items</h1>

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
            <CollectionIcon class="w-1/4 text-gray-600 dark:text-gray-100" />
          </div>

          <label
            for="user"
            class="text-gray-800 inline-block cursor-pointer dark:text-white"
            >Select User</label
          >
          <select
            v-model="user"
            id="user"
            class="
              pl-3
              py-2
              pr-2
              w-full
              max-w-lg
              border-gray-400 border-2
              hover:border-gray-500
              rounded-md
              dark:text-black
              mb-4
            "
          >
            <option v-for="user in users" v-bind:key="user.id" :value="user.id">
              {{ user.name }}
            </option>
          </select>

          <label
            for="name"
            class="text-gray-800 inline-block cursor-pointer dark:text-white"
            >Write your random items</label
          >
          <div class="flex flex-col gap-3">
            <div class="relative" v-for="(item, id) in items" :key="id">
              <input
                type="text"
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
                  border-gray-400 border-2
                  hover:border-gray-500
                  rounded-md
                  dark:text-black
                "
              />

              <XIcon
                @click="cleanInput(id)"
                class="
                  w-4
                  h-4
                  absolute
                  text-red-700
                  top-3.5
                  right-3
                  cursor-pointer
                "
              />
            </div>
          </div>

          <div>
            <button
              @click="choose()"
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
      </template>
    </div>
  </div>
</template>
