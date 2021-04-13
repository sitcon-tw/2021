<template>
  <div id="sponsor">
    <section class="section-articleParagraph">
      <ArticleParagraph/>
    </section>
  </div>
</template>

<style lang="scss">
@import '@/assets/scss/sponsor';
</style>

<script>
import { Component, Prop, Vue } from 'vue-property-decorator';
import ArticleParagraph from '../components/ArticleParagraph';

@Component({
  components: {
    ArticleParagraph
  }
})
export default class Sponsor extends Vue {}
</script>
