<template>
  <q-form @submit="submitHandler">
    <q-input
      filled
      v-model="formData.email"
      label="email"
      lazy-rules
      :rules="[this.required, this.isEmail]"
    >
      <template v-slot:prepend>
        <q-icon name="email" />
      </template>
    </q-input>
    <q-input
      filled
      v-model="formData.password"
      label="password"
      lazy-rules
      :rules="[this.required, this.short]"
    >
      <template v-slot:prepend>
        <q-icon name="lock" />
      </template>
    </q-input>
    <q-btn
      type="submit"
      color="primary"
      :label="tab"
      class=" float-right q-mb-md q-pl-md q-pr-md"
      icon="lock_open"
    />
  </q-form>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      text: "",
      formData: {
        email: "",
        password: ""
      }
    };
  },
  props: ["tab"],
  methods: {
    ///map actions
    ...mapActions("store", ["registerUser", "loginUser"]),

    required(val) {
      return (val && val.length > 0) || "This feild cannot be empty ";
    },
    short(val) {
      return (val && val.length > 6) || "Too short at least 6 characters";
    },
    isEmail(val) {
      const emailPattern = /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
      return emailPattern.test(val) || "Please enter a valid email";
    },
    submitHandler() {
      if (this.tab == "login") {
        this.loginUser(this.formData);
      } else {
        this.registerUser(this.formData);
      }
    }
  }
};
</script>

<style></style>
