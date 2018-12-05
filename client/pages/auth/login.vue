<template>
  <v-flex xs12 sm8 md4>
    <login-form @onLogin="onLogin" :isSubmitting="isSubmitting" :error="error"></login-form>
  </v-flex>
</template>
<script>
import LoginForm from "~/components/Auth/LoginForm";
export default {
  layout: "auth",
  middleware: "guest",
  components: {
    LoginForm
  },
  asyncData() {
    return {
      isSubmitting: false,
      error: ""
    };
  },
  methods: {
    async onLogin(data) {
      this.isSubmitting = true;
      try {
        await this.$store.dispatch("auth/login", data);
        this.$router.push({ name: "index" });
      } catch (e) {
        this.isSubmitting = false;
        this.error = e.response.data.error;
      }
    }
  }
};
</script>
