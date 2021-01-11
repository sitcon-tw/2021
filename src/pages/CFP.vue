<template>
  <div class="cfp">
    <h1>cfp</h1>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

// components
import Footer from '@/components/Footer.vue';

@Component({
  components: {Footer}
})
export default class CFP extends Vue {
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/scss/CFP/CFP.scss";
@import "@/assets/scss/variable.scss";
</style>
