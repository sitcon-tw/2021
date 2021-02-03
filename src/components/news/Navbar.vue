<template>
  <nav id="news-nav" :class="{ fixed: isNavbarFixed }">
    <div v-show="!isMobileView || navVisible" class="news-nav" v-scrollspy="{ selectors: navbarItems }">
      <a class="news-nav-item" href="#schedule">重要時程</a>
      <a class="news-nav-item" href="#example">投稿主題範例</a>
      <a class="news-nav-item" href="#code-of-conduct">Code of Conduct</a>
      <a class="news-nav-item" href="#info-section">議程種類</a>
      <a class="news-nav-item" href="#process">流程</a>
      <a class="news-nav-item" href="#methods">投稿方式</a>
      <a class="news-nav-item" href="#review">審稿方式</a>
      <a class="news-nav-item" href="#precautions">投稿注意事項</a>
      <a class="news-nav-contribute-button" target="_blank" rel="noopener" href="https://forms.gle/XoXJSD2P8dL8X8s2A" v-show="!isMobileView">我要投稿</a>
      <button class="news-nav-button" @click="(e)=>navVisible=!navVisible" v-show="isMobileView">&#9650;</button>
    </div>
    <button v-show="!navVisible && isMobileView" class="nav-control-button" @click="(e)=>navVisible=!navVisible">
      <p>&#9650;</p>
      <p>&#9660;</p>
    </button>
  </nav>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import ScrollSpyDirective from './ScrollSpyDirective';

@Component({
    directives: {
        scrollspy: ScrollSpyDirective
    }
})
export default class Navbar extends Vue {
  private isMobileView: boolean = false;
  private isNavbarFixed = false;
  private navVisible: boolean = false;
  private navbarItems: string[] = [
    '#schedule',
    '#example',
    '#code-of-conduct',
    '#info-section',
    '#process',
    '#methods',
    '#review',
    '#precautions'
  ];

  public mounted () {
    this.$nextTick().then(() => {
      const query: string = '(max-width: 1024px)';
      const mq: MediaQueryList = window.matchMedia(query);
      if (mq.addEventListener) {
        mq.addEventListener('change', this.matchMediaCallback);
      } else {
        mq.addListener(this.matchMediaCallback);
      }
      // check first
      this.matchMediaCallback(mq);

      // observe header: header appears => no fix; header disappears => fix.
      const fixObserver: IntersectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            this.isNavbarFixed = true;
          } else {
            this.isNavbarFixed = false;
          }
        });
      }, { rootMargin: '25px 0px 0px 0px', threshold: 0 });
      fixObserver.observe(document.querySelector('#news-header') as Element);
    });
  }

  private matchMediaCallback (ev: (MediaQueryList | MediaQueryListEvent)) {
    this.isMobileView = ev.matches;
    // alaways disable navbar while view changing
    this.navVisible = false;
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/news/navbar';
</style>