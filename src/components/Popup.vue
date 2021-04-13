<template>
  <div class="popup" :id="id">
    <div
      class="popup-bg"
      @click="
        () => {
          $router.push(backto);
        }
      "
    ></div>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop } from 'vue-property-decorator';

@Component({
  props: ['id', 'backto']
})
export default class Popup extends Vue {
  @Prop() private id!: string;
  @Prop() private backto!: string;

  public mounted () {
    document.body.style.overflowY = 'hidden';
    const { hash } = window.location;
    window.onpopstate = (event: any) => {
      if (window.location.hash === '') {
        document.body.style.overflowY = 'scroll';
      }
    };
  }
  public unmounted () {
    document.body.style.overflowY = 'scroll';
  }
}
</script>
<style lang="scss">
@import '@/assets/scss/Popup';
</style>
