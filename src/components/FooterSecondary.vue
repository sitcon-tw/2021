<template>
  <footer class="footer-container">
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
    </div>
  </footer>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component
export default class CFP extends Vue {
  private communityLink = [
    {
      title: "facebook",
      icon: "facebook-f",
      link: "https://sitcon.org/fb",
    },
    {
      title: "flickr",
      icon: "flickr",
      link: "https://sitcon.org/flickr",
    },
    {
      title: "telegram",
      icon: "telegram-plane",
      link: "https://sitcon.org/tg",
    },
    {
      title: "twitter",
      icon: "twitter",
      link: "https://sitcon.org/twitter",
    },
    {
      title: "youtube",
      icon: "youtube",
      link: "https://sitcon.org/yt",
    },
  ];
}
</script>

<style lang="scss">
@import "@/assets/scss/footer-secondary";
</style>
