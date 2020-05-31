<template>
  <div id="app">
    <component :is="lauout">
      <router-view />
    </component>
  </div>
</template>

<script>
import EmptyLayout from "./layouts/EmptyLayout";
import MainLayout from "./layouts/MainLayout";
export default {
  computed: {
    lauout() {     
      return (this.$route.meta.layout || 'empty') + '-layout';
    }
  },
  components: {
    EmptyLayout,
    MainLayout
  }
};
</script>

<style lang="scss">
@import "~materialize-css/dist/css/materialize.min.css";
@import "assets/index.css";
</style>
