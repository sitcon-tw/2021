<template>
  <a href="#" class="event block" :class="{ unclickable: !clickable }" @click.prevent="clickHandler">
    <img class="background" src="../assets/images/event-block-bg.svg">
    <div class="inner">
      <i v-if="icon" :class="icon" class="icon" />
      <span :class="{ special }">{{ newlineText }}</span>
    </div>
  </a>
</template>

<script lang="ts">
import { Action } from 'vuex-class';
import { Component, Prop, Vue } from 'vue-property-decorator';
import { ConfEvent } from '@/store/types/app';

@Component({
})
export default class EventBlock extends Vue {
  @Action('toggleEvent', { namespace: 'app' }) private toggleEvent!: (event: ConfEvent) => void;

  @Prop({ default: '' }) private text!: string;
  @Prop({ default: '' }) private icon!: string;
  @Prop({ default: false }) private special!: boolean;
  @Prop({ default: true }) private clickable!: boolean;

  get newlineText () {
    return this.text.replace('\\n', '\n');
  }

  private clickHandler (ev: Event) {
    if (this.clickable) {
      // route...?
    }

    return this.clickable;
  }
}
</script>
<style lang="scss">
@import '@/assets/scss/eventblock';
</style>