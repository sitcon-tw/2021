<template>
  <nav id="ocfp-nav" :class="{ fixed: (isNavbarFixed || isMobileView), returning: isNavbarReturning }">
    <div 
      class="news-nav"
      :class="{ animating: isNavbarAnimating }"
      v-show="!isMobileView || navVisible"
      v-scrollspy="{ selectors: navbarItems }"
    >
      <a class="news-nav-item" href="#schedule">重要時程</a>
      <a class="news-nav-item" href="#example">投稿主題</a>
      <a class="news-nav-item" href="#code-of-conduct">Code of Conduct</a>
      <a class="news-nav-item" href="#methods">投稿格式</a>
      <a class="news-nav-item" href="#review">審稿方式</a>
      <a class="news-nav-item" href="#precautions">投稿注意事項</a>
      <a class="news-nav-item" href="#record">錄影與紀錄</a>
      <a class="news-nav-item" href="#QA">QA</a>
      <a class="news-nav-contribute-button" target="_blank" rel="noopener" href="https://forms.gle/k4XobTn3Pac6NrLE7" v-show="!isMobileView">我要投稿</a>
      <button class="news-nav-button" @click="(e)=>navVisible=!navVisible" v-show="isMobileView">&#9650;</button>
    </div>
    <button v-show="!navVisible && isMobileView" class="nav-control-button" @click="(e)=>navVisible=!navVisible">
      <p>&#9650;</p>
      <p>&#9660;</p>
    </button>
    <div
      style="width:100vw;height:100vh;color:red;position:fixed;top:0;right:0;"
      v-if="isMobileView && navVisible"
      @click="()=>navVisible=!navVisible"
    ></div>
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
  private isNavbarFixed: boolean = false;
  private isNavbarAnimating: boolean = false;
  private isNavbarReturning: boolean = false;
  private navVisible: boolean = false;
  private navbarItems: string[] = [
    '#schedule',
    '#example',
    '#code-of-conduct',
    '#methods',
    '#review',
    '#precautions',
    '#record',
    '#QA'
  ];

  public created () {
    const query: string = '(max-width: 1024px)';
    const mq: MediaQueryList = window.matchMedia(query);
    if (mq.addEventListener) {
      mq.addEventListener('change', this.matchMediaCallback);
    } else {
      // for sad safari
      mq.addListener(this.matchMediaCallback);
    }
    // check first
    this.matchMediaCallback(mq);
  }

  public mounted () {
    // observe header: header appears => no fix; header disappears => fix.
    const fixObserver: IntersectionObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        // no animation for mobile
        if (!this.isMobileView) {
          // only show animation if fix status has changed
          if (!entry.isIntersecting !== this.isNavbarFixed) {
            if (!entry.isIntersecting) {
              this.isNavbarFixed = true;
            } else {
              this.isNavbarFixed = false;
              this.isNavbarReturning = true;
            }
            this.isNavbarAnimating = true;
          }
        }
      });
    }, { rootMargin: '25px 0px 0px 0px', threshold: 0 });
    this.$nextTick().then(() => {
      fixObserver.observe(document.querySelector('#ocfp-header') as Element);

      document.querySelector('.news-nav')?.addEventListener('animationend', (ev) => {
        if (!this.isNavbarFixed) {
          this.isNavbarReturning = false;
        }
        this.isNavbarAnimating = false;
      });

      if (location.hash) {
        const hash = location.hash;
        // scroll to anchor
        // value should be changed to scroll, so set to empty string first.
        location.hash = '';
        location.hash = hash;
      }
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
@import '@/assets/scss/ocfp/navbar';
</style>