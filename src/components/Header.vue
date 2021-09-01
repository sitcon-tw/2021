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
          <!-- <li>
            <router-link to="/traffic" active-class="header-link--active"
              >交通方式</router-link
            >
          </li> -->
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
          <option value="/agenda" :selected="(onRoute('Agenda') || onRoute('Agenda-view')) ? true : false"
            >議程與活動</option
          >
          <!-- <option value="/traffic" :selected="onRoute('Traffic') ? true : false"
            >交通方式</option
          > -->
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
      <div class="pointer" @click="()=>{apply = true;fixedScroll();}">
        <div class="header-apply">
          前往活動
        </div>
      </div>
    </div>
    <transition name="popup">
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
            <h1>線上會場</h1>
          </div>
          <div class="header-applyPopup__content">
            <section class="description">
              今年 SITCON 將在 09/04 採線上進行，我們會透過 YouTube 直播議程，並透過 Gather 平台搭建虛擬年會會場，希望帶給大家有別於實體年會的有趣體驗。 點擊下方連結即可前往相關活動會場。
            </section>
            <section class="image-link">
              <a href="https://www.youtube.com/user/SITCONArchive?sub_confirmation=1">
                <img src="~@/assets/images/venue/apply-popup-yt.png"/>
                <div class="filter"></div>
                <div class="info">
                  <span>議程直播</span>
                  <img src="~@/assets/images/youtube.svg"/>
                </div>
              </a>
              <a href="https://gather.town/app/VGDsDLUeG7nAXrld/SITCON%202021%20Space%2001">
                <img src="~@/assets/images/venue/gather01.png"/>
                <div class="filter"></div>
                <div class="info">
                  <span>Space01</span>
                  <img src="~@/assets/images/gather.svg"/>
                </div>
              </a>
              <a href="https://gather.town/app/nQwAJKcDkWOQNTxp/SITCON%202021%20Space%2010">
                <img src="~@/assets/images/venue/gather10.png"/>
                <div class="filter"></div>
                <div class="info">
                  <span>Space10</span>
                  <img src="~@/assets/images/gather.svg"/>
                </div>
              </a>
              <a href="https://gather.town/app/8xTwDiNGOoo732Gt/SITCON%202021%20Space%2011">
                <img src="~@/assets/images/venue/gather11.png"/>
                <div class="filter"></div>
                <div class="info">
                  <span>Space11</span>
                  <img src="~@/assets/images/gather.svg"/>
                </div>
              </a>
            </section>
            <section class="sponsor">
              <div>
                <p>SITCON 年會堅持不收費原則，秉持著「降低學生參與門檻」的理念，預算全數由個人／企業贊助或是政府／教育單位協助。</p>
                <br/>
                <p>若你認同 SITCON 的理念與做法，歡迎參與 SITCON 2021 的個人贊助方案，給予我們實質上的支持。</p>
              </div>
              <a class="header-applyPopup-box" href="https://sitcon.kktix.cc/events/sitcon2021-individual-sponsor">
                <span>個人贊助方案<p>詳情請見 KKTIX</p></span>
              </a>
            </section>
          </div>
        </div>
      </div>
    </transition>
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
