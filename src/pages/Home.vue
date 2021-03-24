<template>
  <div id="home" class="home">
    <header>
      <!-- <Header /> -->
    </header>
    <section class="section-title">
      <div class="home__title">
        <div class="home__title-box1">
          <span>SITCON 學生計算機年會 2021</span>
        </div>
        <div class="home__title-topic">
          <img
            class="sitcon-apple"
            src="~@/assets/images/home/home-topic.svg"
            width="500"
          />
        </div>
        <div class="home__title-box2">
          <p>
            05/29 • 中央研究院－人文社會科學館 •免費報名
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Header from "@/components/Header.vue";

@Component({
  components: {
    Header,
  },
})
export default class CFP extends Vue {
  @Prop() private msg!: string;
}
</script>

<style lang="scss">
@import "@/assets/scss/home/home";
</style>
