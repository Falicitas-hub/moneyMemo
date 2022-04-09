<template>
  <div id="app">
    <div id="nav">
      <Nav></Nav>
    </div>
    <router-view />
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
export default {
  components: {
    Nav,
  },
};
</script>

<style>
* {
  margin: 0px;
  padding: 0px;
}
</style>
