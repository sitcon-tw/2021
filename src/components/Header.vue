<template>
  <div class="header header--sticky">
    <div class="header__left">
      <div class="header-logo">
        <router-link to="/">
          <img src="~@/assets/images/home/home-headerIcon.svg" width="100%" />
        </router-link>
      </div>
    </div>
    <div class="header__right">
      <div class="header-links">
        <ul>
          <li>
            <router-link to="/agenda" active-class="header-link--active"
              >議程與活動</router-link
            >
          </li>
          <li>
            <router-link to="/traffic" active-class="header-link--active"
              >交通方式</router-link
            >
          </li>
          <li>
            <router-link to="/venue" active-class="header-link--active"
              >會場地圖</router-link
            >
          </li>
          <li>
            <router-link to="/sponsor" active-class="header-link--active"
              >贊助資訊</router-link
            >
          </li>
          <li>
            <router-link to="/team" active-class="header-link--active"
              >籌備團隊</router-link
            >
          </li>
        </ul>
      </div>

      <div class="header-links--mobile">
        <select
          @change="
            (ev) => {
              $router.push({ path: ev.target.value });
            }
          "
        >
          <option value="/">年會主題</option>
          <option value="/agenda" :selected="onRoute('Agenda') ? true : false"
            >議程與活動</option
          >
          <option value="/traffic" :selected="onRoute('Traffic') ? true : false"
            >交通方式</option
          >
          <option value="/venue" :selected="onRoute('Venue') ? true : false"
            >會場地圖</option
          >
          <option value="/sponsor" :selected="onRoute('Sponsor') ? true : false"
            >贊助資訊</option
          >
          <option value="/team" :selected="onRoute('Team') ? true : false"
            >籌備團隊</option
          >
        </select>
        <!-- <div class="header-links--mobile-bg"></div> -->
      </div>
      <div class="pointer"@click="()=>{apply = true;fixedScroll();}">
        <div class="header-apply">
          <span>報名去</span>
        </div>
      </div>
    </div>
    <div class="popup header-applyPopup popup-active" id="apply" v-if="apply">
    <div
      class="popup-bg"
      @click="
        () => {
          apply = false;
          removeFixedScroll();
        }
      "
    ></div>
    <div class="header-applyPopup-container active">
        <div class="header-applyPopup__close">
          <img
            src="~@/assets/images/home/home-icon-close.svg"
            @click="
              () => {
                apply = false;
                removeFixedScroll();
              }
            "
          />
        </div>
        <div class="header-applyPopup__title">
          <img
            src="~@/assets/images/home/home-icon-square.svg"
            class="header-applyPopup-squareImg"
          />
          <h2>SITCON 2021</h2>
          <h1>報名方式</h1>
        </div>
        <div class="header-applyPopup__content">
          <div class="header-applyPopup__content-left">
            <div class="header-applyPopup__content-left-container">
              <p>
                SITCON年會堅持不收費原則，秉持著「降低學生參與門檻」的理念，預算全數由個人／企業贊助或是政府／教育單位協助。
              </p>
              <br />
              <br class="header-applyPopup__content-left--br" />
              <p>
                若你認同 SITCON 的理念與做法，歡迎參與 SITCON 2021
                的個人贊助方案，給予我們實質上的支持。
                參與方案者將會獲贈入場資格與紀念品等項目，以表感謝。
              </p>
              <br />
              <p class="header-applyPopup__content-left--noticeInfo">
                *詳情請見個人贊助頁面
              </p>
            </div>
          </div>
          <div class="header-applyPopup__content-right">
            <div class="header-applyPopup__content-right-container">
              <a
                href="https://sitcon.kktix.cc/events/sitcon2021"
                target="_blank"
              >
                <div class="header-applyPopup-box">
                  <span>
                    學生 / 普通票
                    <p>免費報名</p>
                  </span>
                </div>
              </a>
              <a
                href="https://sitcon.kktix.cc/events/sitcon2021-individual-sponsor"
                target="_blank"
              >
                <div class="header-applyPopup-box">
                  <span
                    >個人贊助方案
                    <p>詳情請見 KKTIX</p>
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
  </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import Popup from '../components/Popup.vue';

@Component({
  components: {
    Popup
  },
  props: ['route']
})
export default class Header extends Vue {
  private apply = false;
  public onRoute (routeName: string) {
    return this.$props.route.name === routeName ? true : false;
  }

  public fixedScroll () {
    document.body.style.overflowY = 'hidden';
  }
  public removeFixedScroll () {
    document.body.style.overflowY = 'scroll';
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/header';
</style>
