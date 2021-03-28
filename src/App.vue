<template>
  <div id="app">
    <Header v-if="headerVisible()" v-bind:route="$route" />
    <router-view />
    <Footer />
  </div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";

// components
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

@Component({
  components: {
    Header,
    Footer,
  },
})
export default class App extends Vue {
  public headerVisible(): boolean {
    if (
      this.$route.name == "CFP" ||
      this.$route.name === "news" ||
      this.$route.name === "ocfp-news"
    )
      return false;
    else return true;
  }
}
</script>
<style lang="scss">
@import "@/assets/scss/main.scss";
</style>
