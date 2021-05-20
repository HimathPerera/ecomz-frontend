<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar>
        <q-toolbar-title>
          Sneakers
        </q-toolbar-title>
        <template>
          <q-btn
            icon="add"
            flat
            round
            dropdown
            v-if="userDetails.isAdmin"
            @click="open = true"
          >
            <q-tooltip> add an item </q-tooltip>
            <q-modal v-model="open" ref="basicModal"> </q-modal>
          </q-btn>
          <q-btn icon="notifications" flat round dropdown class="q-mr-sm">
            <q-badge
              color="red"
              floating
              class="q-mt-sm"
              v-if="userDetails.email"
              >4</q-badge
            >
            <q-tooltip> notifications </q-tooltip></q-btn
          >
          <q-btn
            icon="power_settings_new"
            flat
            round
            dropdown
            @click="handleLogout"
            v-if="userDetails.email"
            ><q-tooltip> sign-off </q-tooltip></q-btn
          >
          <q-btn
            icon="account_circle"
            flat
            round
            dropdown
            exact
            to="/auth"
            class="q-mr-lg"
            ><q-tooltip v-if="userDetails.email">
              logged in as
              <b>{{ userDetails.email.split("@")[0] }}</b> </q-tooltip
            ><q-tooltip v-else>
              login
            </q-tooltip></q-btn
          >
        </template>
      </q-toolbar>
    </q-header>

    <q-footer>
      <q-tabs>
        <FooterLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-tabs>
    </q-footer>

    <q-drawer
      class="draw"
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      :width="250"
      :breakpoint="767"
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label header class="text-grey-8">
          Navigation
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from "components/EssentialLink.vue";
import FooterLink from "../components/FooterLink";
import { mapActions, mapState } from "vuex";

const linksData = [
  {
    title: "Home",
    icon: "home",
    to: "/"
  },
  {
    title: "Shop",
    icon: "shop",
    to: "/shop"
  },
  {
    title: "settings",
    icon: "settings",
    to: "/settings"
  }
];

export default {
  name: "MainLayout",
  components: { EssentialLink, FooterLink },
  data() {
    return {
      open: false,
      leftDrawerOpen: false,
      essentialLinks: linksData,
      text: ""
    };
  },
  methods: {
    //map actions
    ...mapActions("store", ["logout"]),

    handleLogout() {
      this.logout();
    }
  },
  computed: {
    ...mapState("store", ["userDetails"])
  }
};
</script>

<style lang="scss">
.q-header,
.q-footer {
  background-color: $light-grey;
  color: $dark;
  // left: 250px !important;
}

// .q-drawer {
//   width: 250px !important;
// }
// .q-page-container {
//   padding-left: 250px !important;
// }

@media screen and (min-width: 768px) {
  .q-footer {
    display: none;
  }
}
</style>
