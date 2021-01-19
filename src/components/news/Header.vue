<template>
  <header>
    <div class="top-bar">
      <div class="return-wrapper">
        <a class="shape-wrapper diamond" href="/cfp"
          ><span class="text-wrapper">返回</span></a
        >
      </div>
      <div class="title-wrapper text-center">
        <img src="~@/assets/image/burnfont/news.svg" class="svg svg-cfp-news" />
      </div>
      <div class="contribute-wrapper">
        <a class="btn-contribute" href="#">我要投稿</a>
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
          <p>2021/01/15（五）</p>
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
