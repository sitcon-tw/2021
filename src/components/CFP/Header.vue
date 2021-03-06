<template>
  <header class="sitcon-burnfont">
    <div class="spot-box">
      <div class="sitcon-2021 text-center spot-box-row">
        <img
          alt="SITCON2021"
          src="~@/assets/images/burnfont/2021.svg"
          class="svg"
          id="svg-sitcon2021"
        />
      </div>
      <div class="sitcon-name text-center spot-box-row">
        <img
          alt="學生計算機年會"
          src="~@/assets/images/burnfont/sitcon.svg"
          class="svg"
          id="svg-sitcon"
        />
      </div>
      <h1 class="sitcon-topic text-center spot-box-row">
        <img
          alt="算盤的後裔"
          src="~@/assets/images/burnfont/topic.svg"
          class="svg"
          id="svg-topic"
        />
      </h1>
    </div>
    <div class="info-box">
      <div class="cfp-title">
        <div class="cfp-svg-wrapper text-center">
          <img
            src="~@/assets/images/burnfont/cfp.svg"
            class="svg"
            id="svg-cfp"
          />
        </div>
      </div>
      <div class="date-location">
        <div class="date-location-wrapper">
          <div class="date-wrapper">
            <img
              src="~@/assets/images/burnfont/date.svg"
              class="svg"
              id="svg-date"
            />
          </div>
          <div class="location-wrapper">
            <img
              src="~@/assets/images/burnfont/location.svg"
              class="svg"
              id="svg-location"
            />
          </div>
        </div>
      </div>
      <div class="cfp-news">
        <div class="cfp-news__btn cfp-news__btn--1">
          <a href="/2021/cfp/ocfp-news" rel="noopener">
            <div class="btn-news-wrapper">
              <img
                src="~@/assets/images/burnfont/btn-news1-desktop.svg"
                id="svg-news1"
              />
            </div>
          </a>
        </div>
        <div class="cfp-news__btn cfp-news__btn--2">
          <a href="/2021/cfp/ocfp-news" rel="noopener">
            <div class="btn-news-wrapper">
              <img
                src="~@/assets/images/burnfont/btn-news2-desktop.svg"
                id="svg-news2"
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class CfpHeader extends Vue {}
</script>

<style lang="scss">
@import "@/assets/scss/CFP/header";
</style>
