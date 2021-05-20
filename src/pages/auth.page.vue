<template>
  <q-page class="q-pa-md ">
    <q-card class="auth-card">
      <q-tabs
        v-model="tab"
        dense
        class="text-grey"
        active-color="primary"
        indicator-color="primary"
        align="justify"
        narrow-indicator
      >
        <q-tab name="login" label="login" />
        <q-tab name="register" label="register" />
      </q-tabs>

      <q-separator />

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="login">
          <Login-Register :tab="tab" />
        </q-tab-panel>

        <q-tab-panel name="register">
          <Login-Register :tab="tab" />
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      tab: "login"
    };
  },
  components: {
    "Login-Register": require("../components/forms-login-register").default
  }
};
</script>

<style>
.auth-card {
  margin-top: 20%;
  width: 62%;
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
}

@media screen and (max-width: 767px) {
  .auth-card {
    margin-top: 50%;
    width: 90%;
  }
}
</style>
