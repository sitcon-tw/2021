<template>
  <div id="cfp" class="cfp cfp-background">
    <!-- CfpHeader id="cfp-header"/ -->
    <IntrodContainer id="cfp-intro"></IntrodContainer>
    
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
// components
import CfpHeader from '@/components/CFP/Header.vue';
import IntrodContainer from '@/components/CFP/IntrodContainer.vue';

@Component({
  components: {
    CfpHeader,
    IntrodContainer
  }
})
export default class CFP extends Vue {
  @Prop() private msg!: string;
}
</script>

<style lang="scss">

</style>

