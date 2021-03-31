<template>
  <footer class="footer-container-primary">
    <div class="footer-left">
      <p class="footer-brand footer-font-block">
        <span class="footer-context">學生計算機年會</span>
        <span class="footer-context"
          >Students' Information Technology Conference</span
        >
      </p>
      <p class="footer-contact footer-font-block">
        <span class="footer-context">聯絡我們</span>
        <span class="footer-context">contact@sitcon.org</span>
      </p>
    </div>
    <div class="footer-right">
      <div class="footer-community">
        <p class="footer-context">社群媒體</p>
        <p class="footer-community-icon-container">
          <span class="footer-community-icon">
            <a
              target="_blank"
              rel="noopener"
              v-for="community in communityLink"
              :href="community.link"
              :key="community.title"
            >
              <FontawesomeIcon
                class="community-icon"
                :icon="['fab', community.icon]"
              />
            </a>
          </span>
        </p>
      </div>
      <div class="footer-sitesOverYears">
        <div class="footer-sitesOverYears__title">
          <p class="footer-context">歷年網站</p>
        </div>
        <div class="footer-sitesOverYears__links">
          <a href="https://sitcon.org/2020/">2020</a>
          <a href="https://sitcon.org/2019/">2019</a>
          <a href="https://sitcon.org/2018/">2018</a>
          <a href="https://sitcon.org/2017/">2017</a>
          <a href="https://sitcon.org/2016/">2016</a>
          <a href="https://sitcon.org/2015/">2015</a>
          <a href="https://sitcon.org/2014/">2014</a>
          <a href="https://sitcon.org/2013/">2013</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component
export default class CFP extends Vue {
  private communityLink = [
    {
      title: 'facebook',
      icon: 'facebook-f',
      link: 'https://sitcon.org/fb'
    },
    {
      title: 'flickr',
      icon: 'flickr',
      link: 'https://sitcon.org/flickr'
    },
    {
      title: 'telegram',
      icon: 'telegram-plane',
      link: 'https://sitcon.org/tg'
    },
    {
      title: 'twitter',
      icon: 'twitter',
      link: 'https://sitcon.org/twitter'
    },
    {
      title: 'youtube',
      icon: 'youtube',
      link: 'https://sitcon.org/yt'
    }
  ];
}
</script>

<style lang="scss">
@import '@/assets/scss/footer-primary';
</style>
