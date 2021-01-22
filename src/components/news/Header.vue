<template>
  <header>
    <div class="top-bar">
      <div class="return-wrapper">
        <a class="shape-wrapper diamond" href="/2021/cfp"
          ><span class="text-wrapper">返回</span></a
        >
      </div>
      <div class="title-wrapper text-center">
        <img src="~@/assets/images/burnfont/news.svg" class="svg svg-cfp-news" />
      </div>
      <div class="contribute-wrapper">
        <a class="btn-contribute" href="https://forms.gle/XoXJSD2P8dL8X8s2A">我要投稿</a>
      </div>
    </div>
    <div class="cfp-body">
      <div class="spot-wrapper">
        <h1 class="text-center">現正徵稿中<span class="ignore">！</span></h1>
        <!-- TODO counter -->
        <p class="text-center countdown">
          距離投稿截止還有
          <span class="d-inline-block">
            {{ countdown.d }} 天 {{ countdown.h }} 小時 {{ countdown.m }} 分
            {{ countdown.s }} 秒</span
          >
        </p>
      </div>
      <div class="time-wrapper">
        <div class="start-time-wrapper">
          <h2>投稿開始</h2>
          <p>2021/01/20（三）</p>
        </div>
        <div class="tilde-wrapper">
          <h2><!-- pseudo element --></h2>
          <p>～</p>
          <p></p>
        </div>

        <div class="end-time-wrapper">
          <h2>投稿結束</h2>
          <p>
            2021/02/22（一）日出<small class="d-inline-block"
              >（清晨 06：23）</small
            >
          </p>
        </div>
      </div>
    </div>
    <nav v-if="navVisible">
        <div class="news-nav">
          <a class="news-nav-item" href="#schedule">重要時程</a>
          <a class="news-nav-item" href="#example">投稿主題範例</a>
          <a class="news-nav-item" href="#code-of-conduct">Code of Conduct</a>
          <a class="news-nav-item" href="#info-section">議程種類</a>
          <a class="news-nav-item" href="#process">流程</a>
          <a class="news-nav-item" href="#methods">投稿方式</a>
          <a class="news-nav-item" href="#review">審稿方式</a>
          <a class="news-nav-item" href="#precautions">投稿注意事項</a>
          <a class="news-nav-item" href="https://forms.gle/XoXJSD2P8dL8X8s2A">我要投稿</a>
          <button class="news-nav-button" @click="(e)=>navVisible=!navVisible">&#9650;</button>
        </div>
    </nav>
    <button v-if="!navVisible" class="nav-control-button" @click="(e)=>navVisible=!navVisible">
      <p>&#9650;</p>
      <p>&#9660;</p>
    </button>
  </header>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

const DEAD_LINE = Math.floor(
  new Date('22 Feb 2021 06:24:00 GMT+8').getTime() / 1000
);

interface Countdown {
  s: number;
  m: number;
  h: number;
  d: number;
}

@Component
export default class CfpHeader extends Vue {
  private timerId!: number;
  private navVisible = false;
  private countdown: Countdown = {
    s: 0,
    m: 0,
    h: 0,
    d: 0
  };

  public beforeMount () {
    this.registerTimer();
  }

  public unmouted () {
    this.unregisterTimer();
  }

  public async createTimer (f: (t: number) => void): Promise<number> {
    const d = new Date();
    let t = d.getTime();
    const rem = 1000 - (t % 1000);

    t = Math.floor(t / 1000);
    let downcount = DEAD_LINE - t - 1;
    this.onTick(downcount);
    const id = setInterval(() => {
      f(--downcount);
    }, 1000);
    return id;
  }

  private async onTick (t: number) {
    this.countdown.s = t % 60;
    t = Math.floor(t / 60);
    this.countdown.m = t % 60;
    t = Math.floor(t / 60);
    this.countdown.h = t % 24;
    t = Math.floor(t / 24);
    this.countdown.d = t;
  }

  private async registerTimer () {
    this.timerId = await this.createTimer(this.onTick);
  }

  private unregisterTimer () {
    clearInterval(this.timerId);
  }

}
</script>

<style lang="scss">
@import '@/assets/scss/news/header'
</style>
