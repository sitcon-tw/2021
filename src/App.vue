<template>
  <div id="app">
    <Header v-if="isRoot()" v-bind:route="$route" />
    <router-view />
    <FooterPrimary v-if="isRoot()" v-bind:route="$route" />
    <FooterSecondary v-if="!isRoot()" v-bind:route="$route" />
  </div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';

// components
import Header from '@/components/Header.vue';
import FooterSecondary from '@/components/FooterSecondary.vue';
import FooterPrimary from '@/components/FooterPrimary.vue';

@Component({
  components: {
    Header,
    FooterPrimary,
    FooterSecondary
  }
})
export default class App extends Vue {
  public isRoot (): boolean {
    if (
      this.$route.name === 'CFP' ||
      this.$route.name === 'news' ||
      this.$route.name === 'ocfp-news'
    ) {
      return false;
    } else {
      return true;
    }
  }
}
</script>
<style lang="scss">
@import '@/assets/scss/main.scss';
</style>
