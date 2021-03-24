<template>
  <!-- <div id="topHeader" class="header"> -->
  <div id="topHeader" class="header header--sticky">
    <div class="header__left">
      <div class="header-logo">
        <a href="/2021/">
          <img
            class="sitcon-apple"
            src="~@/assets/images/home/home-headerIcon.svg"
            height="35"
          />
        </a>
      </div>
    </div>
    <div class="header__right">
      <div class="header-link">
        <ul>
          <li><a href="/2021/agenda">議程與活動</a></li>
          <li><a href="/2021/traffic">交通方式</a></li>
          <li><a href="/2021/venue">會場地圖</a></li>
          <li><a href="/2021/sponsor">贊助資訊</a></li>
          <li><a href="/2021/team">籌備團隊</a></li>
        </ul>
      </div>
      <div class="header-apply">
        <a href="">
          報名去
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Header extends Vue {
  //   header = document.getElementById("topHeader");
  //   sticky = this.header.offsetTop;
  //   header = null;
  //   sticky = null;
  //   created() {
  //     window.addEventListener("scroll", this.handleScroll);
  //   }
  //   destroyed() {
  //     window.removeEventListener("scroll", this.handleScroll);
  //   }
  //   mounted() {
  //     this.header = document.getElementById("topHeader");
  //     this.sticky = this.header.offsetTop;
  //     console.log("window.pageYOffset", window.pageYOffset);
  //     console.log("sticky", this.sticky);
  //   }
  //   handleScroll(event) {
  //     if (window.pageYOffset < this.sticky) {
  //       this.header.classList.add("header--sticky");
  //     } else {
  //       this.header.classList.remove("header--sticky");
  //     }
  //     console.log("func window.pageYOffset", window.pageYOffset);
  //     console.log("func sticky", this.sticky);
  //   }
}
</script>

<style lang="scss">
@import "@/assets/scss/home/header";
</style>
