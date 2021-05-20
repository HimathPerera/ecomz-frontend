<template>
  <q-route-tab :name="title" :icon="icon" :label="title" :to="to" />
</template>

<script>
export default {
  name: "EssentialLink",
  props: {
    title: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      default: ""
    },
    to: {
      type: String,
      default: "/"
    }
  }
};
</script>

<style></style>
