<template>
  <!-- <nav class="header">
    <span class="material-icons">menu</span>
    <div>
        <h1>TabTracker</h1>
    </div>
    <div class="signup-btn">
        <button>SIGN UP</button>
    </div>
  </nav> -->

  <v-toolbar fixed color="cyan">
    <v-toolbar-title class="mr-4">Tab Tracker</v-toolbar-title>
  </v-toolbar>
</template>

<script>
export default {};
</script>

<style scoped>
nav {
  background-color: cyan;
  display: flex;
  flex-direction: row;
  height: 10vh;
  gap: 1rem;
  align-items: baseline;
}

#signup-btn {
  align-items: right;
}
</style>
