<template>
  <div id="cfp" class="cfp cfp-background">
    <CfpHeader id="cfp-header"/>
    <Intro id="cfp-intro"></Intro>
    
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
// components
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

</style>

