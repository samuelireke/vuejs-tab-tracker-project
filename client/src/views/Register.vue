<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="12" sm="8" md="6" lg="4" xl="4">
        <v-card
          xs6
          offset-xs3
          class="white elevation-2 flex justify-center"
          justify-center
        >
          <v-toolbar title="Register" flat dense color="cyan" dark></v-toolbar>
          <v-card-text>
            <v-form @submit.prevent name="tab-tracker-form" autocomplete="off">
              <v-text-field
                label="email"
                name="email"
                v-model="email"
                type="email"
                variant="outlined"
                color="cyan"
                prepend-inner-icon="mdi-email"
              ></v-text-field>
              <v-text-field
                label="password"
                name="password"
                v-model="password"
                type="password"
                color="cyan"
                variant="outlined"
                prepend-inner-icon="mdi-lock"
              ></v-text-field>
              <div class="error mb-3" v-html="error" />
              <v-btn
                color="cyan"
                type="submit"
                x-large
                block
                @click="register"
                dark
                >Register</v-btn
              >
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import auth from "@/services/auth";
export default {
  data() {
    return {
      email: "",
      password: "",
      error: null,
    };
  },
  methods: {
    async register() {
      try {
        await auth.register({
          email: this.email,
          password: this.password,
        });
      } catch (error) {
        this.error = error.response.data.error;
        console.log(error);
      }
    },
  },
};
</script>
<style scoped>
.error {
  color: red;
}
</style>
