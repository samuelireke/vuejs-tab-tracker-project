<template>
  <v-app>
    <PageHeader />
    <v-main>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { RouterView } from "vue-router";
import PageHeader from "./components/Header.vue";
</script>
