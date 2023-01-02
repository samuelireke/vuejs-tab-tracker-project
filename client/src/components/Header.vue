<template>
  <v-toolbar prominent fixed color="cyan">
    <v-toolbar-title class="mr-4">
      <span class="page-title" @click="navigateTo({ name: 'home' })"
        >Tab Tracker</span
      >
    </v-toolbar-title>

    <!-- TODO -->
    <v-toolbar-items>
      <v-btn flat dark class="mr-3" @click="navigateTo({ name: 'songs' })">
        Browse
      </v-btn>
    </v-toolbar-items>

    <v-spacer></v-spacer>
    <!-- Log in & sign up -->
    <v-toolbar-items>
      <v-btn
        v-if="!$store.state.isUserLoggedIn"
        flat
        dark
        class="mr-3"
        @click="navigateTo({ name: 'login' })"
      >
        Log In
      </v-btn>
      <v-btn
        v-if="!$store.state.isUserLoggedIn"
        flat
        dark
        class="mr-3"
        @click="navigateTo({ name: 'register' })"
      >
        Sign Up
      </v-btn>

      <v-btn
        v-if="$store.state.isUserLoggedIn"
        flat
        dark
        class="mr-3"
        @click="logout"
      >
        Log Out
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script setup>
import { useRouter } from "vue-router";
import { useStore } from "vuex";
const router = useRouter();
const navigateTo = (link) => router.push(link);
const store = useStore();
const logout = () => {
  store.dispatch("setToken", null);
  store.dispatch("setUser", null);
  router.push({
    name: "home",
  });
};
</script>

<style scoped>
.page-title {
  cursor: pointer;
}
.page-title:hover {
  color: rgb(5, 122, 122);
}
</style>
