<template>
  <div class="header header--sticky">
    <div class="header__left">
      <div class="header-logo">
        <a href="/2021/">
          <img src="~@/assets/images/home/home-headerIcon.svg" width="100%" />
        </a>
      </div>
    </div>
    <div class="header__right">
      <div class="header-links">
        <ul>
          <li>
            <a
              href="/2021/agenda"
              v-bind:class="onRoute('Agenda') ? 'header-link--active' : ''"
              >議程與活動</a
            >
          </li>
          <li>
            <a
              href="/2021/traffic"
              v-bind:class="onRoute('Traffic') ? 'header-link--active' : ''"
              >交通方式</a
            >
          </li>
          <li>
            <a
              href="/2021/venue"
              v-bind:class="onRoute('Venue') ? 'header-link--active' : ''"
              >會場地圖</a
            >
          </li>
          <li>
            <a
              href="/2021/sponsor"
              v-bind:class="onRoute('Sponsor') ? 'header-link--active' : ''"
              >贊助資訊</a
            >
          </li>
          <li>
            <a
              href="/2021/team"
              v-bind:class="onRoute('Team') ? 'header-link--active' : ''"
              >籌備團隊</a
            >
          </li>
        </ul>
      </div>

      <div class="header-links--mobile">
        <select onchange="location = this.value;">
          <option value="/2021">年會主題</option>
          <option
            value="/2021/agenda"
            :selected="onRoute('Agenda') ? true : false"
            >議程與活動</option
          >
          <option
            value="/2021/traffic"
            :selected="onRoute('Traffic') ? true : false"
            >交通方式</option
          >
          <option
            value="/2021/venue"
            :selected="onRoute('Venue') ? true : false"
            >會場地圖</option
          >
          <option
            value="/2021/sponsor"
            :selected="onRoute('Sponsor') ? true : false"
            >贊助資訊</option
          >
          <option value="/2021/team" :selected="onRoute('Team') ? true : false"
            >籌備團隊</option
          >
        </select>
        <!-- <div class="header-links--mobile-bg"></div> -->
      </div>
      <div class="header-apply">
        <a href="#apply">
          報名去
        </a>
      </div>
    </div>
    <div class="header-applyPopup" id="apply">
      <div class="header-applyPopup-container">
        <div class="header-apply-popup__close">
          <img src="~@/assets/images/home/home-icon-close.svg" />
        </div>
        <div class="header-applyPopup__title">
          <h2>SITCON 2021</h2>
          <img src="~@/assets/images/home/home-icon-square.svg" />
          <h1>報名方式</h1>
        </div>
        <div class="header-applyPopup__content">
          <div class="header-applyPopup__content-left">
            SITCON
            年會堅持不收費原則，秉持著「降低學生參與門檻」的理念，預算全數由個人／企業贊助或是政府／教育單位協助。
            若你認同 SITCON 的理念與做法，歡迎參與 SITCON 2021
            的個人贊助方案，給予我們實質上的支持。
            參與方案者將會獲贈入場資格與紀念品等項目，以表感謝。
          </div>
          <div class="header-applyPopup__content-right">
            <div class="header-applyPopup-box">
              <p>學生 / 普通票</p>
              <p>免費報名</p>
            </div>
            <div class="header-applyPopup-box">
              <p>個人贊助方案</p>
              <p>詳情請見 KKTIX</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  props: ['route']
})
export default class Header extends Vue {
  public onRoute(routeName: string) {
    return this.$props.route.name === routeName ? true : false;
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/header';
</style>
