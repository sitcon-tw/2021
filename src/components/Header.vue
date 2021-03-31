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
          <option value="/"> 年會主題</option>
          <option value="/agenda" :selected="onRoute('Agenda') ? true : false">
            <a href="/2021/agenda"> 議程與活動</a></option
          >
          <option
            value="/traffic"
            :selected="onRoute('Traffic') ? true : false"
          >
            <a href="/2021/traffic">交通方式</a></option
          >
          <option value="/venue" :selected="onRoute('Venue') ? true : false"
            ><a href="/2021/venue">會場地圖</a></option
          >
          <option value="/sponsor" :selected="onRoute('Sponsor') ? true : false"
            ><a href="/2021/sponsor">贊助資訊</a></option
          >
          <option value="/team" :selected="onRoute('Team') ? true : false"
            ><a href="/2021/team">籌備團隊</a></option
          >
        </select>
        <!-- <div class="header-links--mobile-bg"></div> -->
      </div>
      <div class="header-apply">
        <a href="https://sitcon.kktix.cc/events/sitcon2021" target="_blank">
          報名去
        </a>
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
  mounted() {
    console.log(this.$props.route.name);
  }
  public onRoute(routeName: String) {
    return this.$props.route.name === routeName ? true : false;
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/header';
</style>
