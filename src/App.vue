<template>
  <div id="app">
    <router-view/>
    <Footer/>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Action, Getter } from 'vuex-class';

import { DeviceType } from '@/store/types/app';

// components
import Footer from '@/components/Footer.vue';

@Component({
  components: {
    Footer
  },
})
export default class App extends Vue {
  @Action('toggleDevice', { namespace: 'app' }) private toggleDevice!: (device: DeviceType) => void;
  @Getter('device', { namespace: 'app' }) private device!: DeviceType;
  private deviceTypeMediaQuery: MediaQueryList = window.matchMedia('(min-width: 900px)');

  public mounted() {
    this.detectDeviceType(this.deviceTypeMediaQuery);

    // add change listener instead of resize listener
    if (this.deviceTypeMediaQuery.addEventListener) {
      this.deviceTypeMediaQuery.addEventListener('change', this.detectDeviceType);
    } else {
      // sad safari
      this.deviceTypeMediaQuery.addListener(this.detectDeviceType);
    }
  }

  private detectDeviceType (mq: (MediaQueryList | MediaQueryListEvent)): void {
    const isDesktop: boolean = mq.matches;

    if (isDesktop) {
      this.toggleDevice(DeviceType.DESKTOP);
    } else {
      this.toggleDevice(DeviceType.MOBILE);
    }
  }
}
</script>
<style lang="scss">
@import "@/assets/scss/main.scss";
</style>