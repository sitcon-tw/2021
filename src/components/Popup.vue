<template>
  <div class="popup" :id="id">
    <div
      class="popup-bg"
      @click="
        () => {
          $router.go(-1);
          removeFixedScroll();
        }
      "
    ></div>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop } from 'vue-property-decorator';

@Component({
  props: ['id']
})
export default class Popup extends Vue {
  @Prop() private id!: string;
  public mounted () {
    if (window.location.hash === `#${this.id}`) {
      this.fixedScroll();
    }
  }

  public fixedScroll () {
    document.body.style.overflowY = 'hidden';
  }
  public removeFixedScroll () {
    document.body.style.overflowY = 'scroll';
  }
}
</script>
<style lang="scss">
@import '@/assets/scss/Popup';
</style>
