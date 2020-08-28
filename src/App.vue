<template>
  <div id="app">
    <Nav></Nav>
    <router-view />
    <br />
    <br />
    <Footer></Footer>
  </div>
</template>
<script>
// @ is an alias to /src
import Nav from "@/components/Nav.componet.vue";
import Footer from "@/components/Fotter.componet.vue";

export default {
  name: "Home",
  components: {
    Nav,
    Footer,
  },
};
</script>
