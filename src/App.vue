<template>
  <div id="app">
    <router-view/>
    <Footer/>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

// components
import Footer from '@/components/Footer.vue';

@Component({
  components: {
    Footer
  }
})
export default class App extends Vue {}
</script>
<style lang="scss">
@import "@/assets/scss/main.scss";
</style>