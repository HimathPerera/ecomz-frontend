<template>
  <div class="q-ma-md">
    <div class="row  q-col-gutter-sm">
      <div
        class="col-6 col-md-3"
        v-for="items in storeDetails.data"
        :key="items._id"
      >
        <q-card class="my-card">
          <img src="https://cdn.quasar.dev/img/mountains.jpg" />

          <q-card-section>
            <div class="text-h6">{{ items.name }}</div>
            <div class="text-subtitle2">{{ items.description }}</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            . {{ items.price }}
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  methods: {
    ///map actions
    ...mapActions("store", ["getAllItems"]),
    showLoading() {
      this.$q.loading.show();

      // hiding in 2s
      this.timer = setTimeout(() => {
        this.$q.loading.hide();
        this.timer = void 0;
      }, 1000);
    }
  },
  mounted() {
    this.getAllItems();
    this.showLoading();
  },
  beforeDestroy() {
    if (this.timer !== void 0) {
      clearTimeout(this.timer);
      this.$q.loading.hide();
    }
  },
  computed: {
    ...mapState("store", ["storeDetails"])
  }
};
</script>

<style></style>
