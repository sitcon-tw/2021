<template>
  <div
    id="app"
    :class="
      $route.name === 'CFP' ||
      $route.name === 'ocfp-news' ||
      $route.name === 'news'
        ? ''
        : 'main-bg'
    "
  >
    <Header v-if="isRoot() && !isInApp()" v-bind:route="$route" />
    <router-view />
    <SponsorFooter/>
    <FooterPrimary v-if="isRoot()" v-bind:route="$route" />
    <FooterSecondary v-if="!isRoot()" v-bind:route="$route" />
  </div>
</template>
<script lang="ts">
import { Route } from 'vue-router';
import { Component, Vue, Watch } from 'vue-property-decorator';
import { Action, Getter } from 'vuex-class';

import { DeviceType, AppMode } from '@/store/types/app';
import head from './util/head';

// components
import Header from '@/components/Header.vue';
import FooterSecondary from '@/components/FooterSecondary.vue';
import FooterPrimary from '@/components/FooterPrimary.vue';
import SponsorFooter from '@/components/SponsorFooter.vue';

@Component({
  components: {
    Header,
    FooterPrimary,
    FooterSecondary,
    SponsorFooter
  }
})
export default class App extends Vue {
  @Action('toggleMode', { namespace: 'app' }) private toggleMode!: (mode: AppMode) => void;
  @Getter('mode', { namespace: 'app' }) private mode!: AppMode;
  @Action('toggleDevice', { namespace: 'app' }) private toggleDevice!: (
    device: DeviceType
  ) => void;
  @Getter('device', { namespace: 'app' }) private device!: DeviceType;
  private deviceTypeMediaQuery: MediaQueryList = window.matchMedia(
    '(min-width: 900px)'
  );
  @Watch('$route')
  public onChangeRoute (to: Route, from: Route) {
    this.autoDetectMetaOg();
  }

  public mounted () {
    this.detectDeviceType(this.deviceTypeMediaQuery);
    this.autoDetectMetaOg();
    if (this.$cookies.get('cdc-announcement') !== 'v20210520') {
      this.$router.push({ path: '/', query: { banner: 'announcement' } });
      this.$cookies.set('cdc-announcement', 'v20210520');
    } else {
      document.body.style.overflowY = 'scroll';
    }
    // add change listener instead of resize listener
    if (this.deviceTypeMediaQuery.addEventListener) {
      this.deviceTypeMediaQuery.addEventListener(
        'change',
        this.detectDeviceType
      );
    } else {
      // sad safari
      this.deviceTypeMediaQuery.addListener(this.detectDeviceType);
    }
    if (this.$route.query.mode === 'app') {
      this.toggleMode(AppMode.APP);
    } else {
      this.toggleMode(AppMode.WEB);
    }
  }

  private isInApp () {
    return this.mode === AppMode.APP;
  }

  private isRoot (): boolean {
    if (
      this.$route.name === 'CFP' ||
      this.$route.name === 'news' ||
      this.$route.name === 'ocfp-news'
    ) {
      return false;
    } else {
      return true;
    }
  }

  private detectDeviceType (mq: MediaQueryList | MediaQueryListEvent): void {
    const isDesktop: boolean = mq.matches;
    if (isDesktop) {
      this.toggleDevice(DeviceType.DESKTOP);
    } else {
      this.toggleDevice(DeviceType.MOBILE);
    }
  }

  private autoDetectMetaOg (): void {
    switch (this.$route.name) {
      case 'Home':
        head.title('首頁');
        head.ogTitle('首頁');
        head.ogDescription('奠基於今日的科技成果，貢獻明日的資訊未來：SITCON 2021「算盤的後裔」');
        head.ogUrl('https://sitcon.org/2021/');
        break;
      case 'Agenda':
        head.title('議程與活動');
        head.ogTitle('議程與活動');
        head.ogDescription('奠基於今日的科技成果，貢獻明日的資訊未來：SITCON 2021「算盤的後裔」');
        head.ogUrl('https://sitcon.org/2021/agenda/');
        break;
      case 'Traffic':
        head.title('交通方式');
        head.ogTitle('交通方式');
        head.ogDescription('奠基於今日的科技成果，貢獻明日的資訊未來：SITCON 2021「算盤的後裔」');
        head.ogUrl('https://sitcon.org/2021/traffic/');
        break;
      case 'Team':
      case 'Team/Staff':
      case 'Team/You':
        head.title('SITCON 團隊');
        head.ogTitle('SITCON 團隊');
        head.ogDescription('奠基於今日的科技成果，貢獻明日的資訊未來：SITCON 2021「算盤的後裔」');
        head.ogUrl('https://sitcon.org/2021/team/');
        break;
      case 'Venue':
        head.title('會場地圖');
        head.ogTitle('會場地圖');
        head.ogDescription('奠基於今日的科技成果，貢獻明日的資訊未來：SITCON 2021「算盤的後裔」');
        head.ogUrl('https://sitcon.org/2021/traffic/');
        break;
      case 'Sponsor':
        head.title('贊助資訊');
        head.ogTitle('贊助資訊');
        head.ogDescription('奠基於今日的科技成果，貢獻明日的資訊未來：SITCON 2021「算盤的後裔」');
        head.ogUrl('https://sitcon.org/2021/sponsor/');
        break;
      default: break;
    }
  }

}
</script>
<style lang="scss">
@import '@/assets/scss/main.scss';
</style>
