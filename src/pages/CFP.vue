<template>
  <div id="cfp">
    <!--h1>cfp</h1-->
    <main class="introduction-container">
      <div class="introduction">
        <h1>關於 SITCON</h1>
        <div class="about-section">
          <p class="context">
            學生計算機年會（SITCON）自 2013
            年發起，以學生為本、由學生自發舉辦，長期投
            身學生資訊教育與推廣開源精神，希望引領更多學子踏入資訊的殿堂，更冀望所有對資
            訊有興趣的學生，能夠在年會裏齊聚一堂，彼此激盪、傳承、啟發，達到「學以致用、教學相長」的實際展現。
          </p>
        </div>
        <h2>歷屆年會網站</h2>
        <div class="thumbnails">
          <table class="img-table">
            <tr>
              <td width="225">
                <img class="images" src="./img/sitcon2020_webpage.png" />
                <p class="tag">SITCON 2020<br /></p>
                <p class="tag sub">#define</p>
              </td>
              <td width="225">
                <img class="images" src="./img/sitcon2019_webpage.png" />
                <p class="tag">SITCON 2019<br /></p>
                <p class="tag sub">開箱演算法</p>
              </td>
              <td width="225">
                <img class="images" src="./img/sitcon2018_webpage.png" />
                <p class="tag">SITCON 2018<br /></p>
                <p class="small-tag">POPULAR COMPUTER SCIENCE</p>
              </td>
            </tr>
          </table>
        </div>
        <h2>參與討論！</h2>
        <div class="discuss-section">
          <p class="context">
            SITCON 是個開放的社群，許多籌備的相關事項都會在公開的 Mailing list
            上進行<br />
            討論，如果有興趣參與，歡迎訂閱 SITCON 的 Mailing list
            並貢獻你的想法！
          </p>
          <p class="context" style="margin-top: 40px">
            若你想進一步了解過往討論的內容，也歡迎在 HackMD 上查看 SITCON 2021
            的會議記錄。
          </p>
        </div>
        <div>
          <button class="buttons">SITCON 論壇</button>
          <button class="buttons">會議記錄</button>
        </div>

        <div class="topic-intro">
          <h1>2021 年會主題</h1>
          <h1>
            <span class="enlarge">算盤的後裔</span>
          </h1>
          <p class="context">
            千年以前的人類，發明了各式各樣輔助算術的工具，在世界各地的文明中，皆能找到廣義上的「算盤」。隨著時代演進，那些原始的工具，逐步進化成為現代的計算機與電腦，更進一步發展為隨處可見的智慧型裝置。俗話說「站在巨人的肩膀上」，前人的智慧成果成為墊腳石，讓站在其之上的後人可以看得更高、更遠。科技層層疊疊、承先啟後，文明才能跨越時空持續成長。
          </p>
          <p class="context">
            人們不再需要重新發明輪子，只要善用前人的成果，就能造出更有效率的工具，並擁有更好的生活。生於現代的我們，每天寫著電腦程式、把玩著智慧型手機、徜徉在網際網路上沒有邊際的資訊大海。奠基於科技的現有成果，對科技的未來持續做出貢獻的我們，都是「算盤的後裔」。
          </p>

          <h2 style="margin-top:40px;">徵稿時間</h2>
          <div style="display: inline-block;position:relative;">
            <h2 class="date" style="display: inline;">01/15 ~ 02/22</h2>
            <p class="context detail" style="display: inline;">
              詳細時程請見
            </p>
            <div class="button-post">
              <div style="display: inline;bottom:0;">
                <button class="buttons">投稿資訊</button>
                <button class="buttons">不用說了，快讓我投稿！</button>
              </div>
            </div>
          </div>
        </div>

        <div class="last-part">
          <h3>最後...</h3>
          <h1>SITCON 贊助徵求</h1> <!--style="margin-top:-30px;"-->
          <p class="context">
            SITCON 的舉辦，除了有賴眾多志工的努力，也需要金錢的支持。<br />
            如果您認同 SITCON 的理念，歡迎以行動支持 SITCON
            的運作，讓更多交流產生！
          </p>
          <p class="context">
            企業合作歡迎聯繫
            <a class="content-hyperlink" href="mailto:contact@sitcon.org"
              >contact@sitcon.org</a
            >
          </p>
          <div>
            <button class="buttons">個人贊助方案</button>
          </div>
        </div>
      </div>
    </main>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

// components
import Footer from "@/components/footer.vue";

@Component({
  components: { Footer },
})
export default class CFP extends Vue {
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/scss/CFP/CFP.scss";
@import "@/assets/scss/variable.scss";
//@import "@/assets/scss/CFP/cfp_color.scss";
@import "@/assets/scss/CFP/cfp_introduction.scss";
</style>
