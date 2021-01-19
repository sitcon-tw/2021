<template>
  <div id="cfp" class="cfp cfp-background">
    <div id="cfp-bg">
      <div class="korea-fish">
        <img class="radial" src="~@/assets/images/CFP/radial.svg" />
        <img class="ellipse" src="~@/assets/images/CFP/ellipse.svg" />
        <img class="sitcon-apple" src="~@/assets/images/CFP/sitcon-apple.svg" />
      </div>
    </div>
    <!-- WTF = = -->
    <CfpHeader id="cfp-header" />
    <Intro id="cfp-intro"></Intro>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import CfpHeader from '@/components/CFP/Header.vue';
import Intro from '@/components/CFP/Intro.vue';

@Component({
  components: {
    CfpHeader,
    Intro
  }
})
export default class CFP extends Vue {
  @Prop() private msg!: string;
}
</script>

<style lang="scss">
@import "@/assets/scss/CFP/bg";
</style>

