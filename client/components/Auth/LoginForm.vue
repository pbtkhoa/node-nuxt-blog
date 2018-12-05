<template>
  <v-card class="elevation-12">
    <v-form @submit.prevent="onLogin">
      <v-toolbar dark color="primary">
        <v-toolbar-title>Login form</v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        <v-text-field
          prepend-icon="person"
          name="username"
          label="Username"
          v-model="username"
          :error-messages="usernameErrors"
          @input="$v.username.$touch()"
          @blur="$v.username.$touch()"
          type="text"
          required
        ></v-text-field>
        <v-text-field
          id="password"
          prepend-icon="lock"
          name="password"
          label="Password"
          type="password"
          v-model="password"
          :error-messages="passwordErrors"
          @input="$v.password.$touch()"
          @blur="$v.password.$touch()"
        ></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <span class="error--text">{{error}}</span>
        <v-btn
          color="primary"
          type="submit"
          :disabled="$v.$invalid || isSubmitting"
          class="ml-4"
        >Login</v-btn>
      </v-card-actions>
    </v-form>
  </v-card>
</template>
<script>
import { validationMixin } from 'vuelidate';
import {
  required,
  maxLength,
  email,
  minLength
} from 'vuelidate/lib/validators';

export default {
  mixins: [validationMixin],
  validations: {
    username: { required, minLength: minLength(4), maxLength: maxLength(20) },
    password: { required, minLength: minLength(4), maxLength: maxLength(20) }
  },
  props: {
    error: {
      required: true
    },
    isSubmitting: {
      required: true
    }
  },
  data() {
    return {
      username: '',
      password: ''
    };
  },
  computed: {
    usernameErrors() {
      const errors = [];
      if (!this.$v.username.$dirty) return errors;
      !this.$v.username.minLength &&
        errors.push('Username must be at least 4 characters min');
      !this.$v.username.maxLength &&
        errors.push('Username must be at most 20 characters long');
      !this.$v.username.required && errors.push('Username is required.');

      return errors;
    },
    passwordErrors() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.minLength &&
        errors.push('Password must be at least 4 characters min');
      !this.$v.password.maxLength &&
        errors.push('Password must be at most 20 characters long');
      !this.$v.password.required && errors.push('Password is required.');

      return errors;
    }
  },
  methods: {
    onLogin() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        let data = { username: this.username, password: this.password };
        this.$emit('onLogin', data);
      }
    }
  }
};
</script>
