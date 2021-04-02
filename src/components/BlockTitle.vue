<template>
  <div class="block title">
    <span class="text">{{ text }}</span>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class BlockTitle extends Vue {
  @Prop({ default: '' }) private text!: string;
}
</script>
<style lang="scss">
@import '@/assets/scss/blocktitle';
</style>