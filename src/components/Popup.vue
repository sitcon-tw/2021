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
// import { Getter } from 'vuex-class';
// import { DeviceType } from '@/store/types/app';

@Component({
  props: ['id']
})
export default class Popup extends Vue {
  @Prop() private id!: string;
  // @Getter('device', { namespace: 'app' }) private device!: DeviceType;
  // private eventClickable = false;

  // private isMobile(): boolean {
  //   return this.device === DeviceType.MOBILE;
  // }
  public mounted() {
    const { hash } = window.location;
    if (hash == '#apply') {
      this.fixedScroll();
    }
    // else if (hash == '#individual-agenda') {
    //   isMobile() ? this.fixedScroll() : null;
    // }
  }

  public fixedScroll() {
    document.body.style.overflowY = 'hidden';
  }
  public removeFixedScroll() {
    document.body.style.overflowY = 'scroll';
  }
}
</script>
<style lang="scss">
@import '@/assets/scss/Popup';
</style>
