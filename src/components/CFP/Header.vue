<template>
  <header class="sitcon-burnfont">
    <div class="spot-box">
      <div class="sitcon-2021 text-center spot-box-row">
        <img
          alt="SITCON2021"
          src="~@/assets/image/burnfont/2021.svg"
          class="svg"
          id="svg-sitcon2021"
        />
      </div>
      <div class="sitcon-name text-center spot-box-row">
        <img
          alt="學生計算機年會"
          src="~@/assets/image/burnfont/sitcon.svg"
          class="svg"
          id="svg-sitcon"
        />
      </div>
      <h1 class="sitcon-topic text-center spot-box-row">
        <img
          alt="算盤的後裔"
          src="~@/assets/image/burnfont/topic.svg"
          class="svg"
          id="svg-topic"
        />
      </h1>
    </div>
    <div class="info-box">
      <div class="cfp-title">
        <div class="cfp-svg-wrapper text-center">
          <img
            src="~@/assets/image/burnfont/cfp.svg"
            class="svg"
            id="svg-cfp"
          />
        </div>
      </div>
      <div class="date-location">
        <div class="date-location-wrapper">
          <div class="date-wrapper">
            <img
              src="~@/assets/image/burnfont/date.svg"
              class="svg"
              id="svg-date"
            />
          </div>
          <div class="location-wrapper">
            <img
              src="~@/assets/image/burnfont/location.svg"
              class="svg"
              id="svg-location"
            />
          </div>
        </div>
      </div>
      <div class="cfp-news">
        <div class="cfp-news-wrapper">
          <div class="hexagon">
            <a href="/news" rel="noopener" class="btn">
              <img
                src="~@/assets/image/burnfont/news.svg"
                class="svg"
                id="svg-news"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class CfpHeader extends Vue {}
</script>

<style lang="scss">
@import '@/assets/scss/CFP/header.scss';
</style>
