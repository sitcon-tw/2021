<template>
  <main class="introduction-container">
    <!--<div class="introduction">-->
    <div class="box-back box">
      <!--<div class="introd-text">-->
      <div class="about-sitcon">
        <h2>關於 SITCON</h2>
        <p>
          學生計算機年會（SITCON）自 2013
          年發起，以學生為本、由學生自發舉辦，長期投身學生資訊教育與推廣開源精神，希望引領更多學子踏入資訊的殿堂，更冀望所有對資訊有興趣的學生，能夠在年會裏齊聚一堂，彼此激盪、傳承、啟發，達到「學以致用、教學相長」的實際展現。
        </p>
      </div>
      <!-- TODO fix thumbnails style -->
      <div class="past-sitcon">
        <h3>歷屆年會網站</h3>
        <div class="thumbnails">
          <a class="thumb-wrapper" href="https://sitcon.org/2020/" target="_blank" rel="noopener">
            <!-- TODO add thumb -->
            <img class="cfp-img" src="@/assets/images/CFP/2020.png" />
            <p class="thumb-title text-center">SITCON 2020<br /></p>
            <p class="thumb-subtitle text-center">#define</p>
          </a>
          <a class="thumb-wrapper" href="https://sitcon.org/2019/" target="_blank" rel="noopener">
            <!-- TODO add thumb -->
            <img class="cfp-img" src="@/assets/images/CFP/2019.png" />
            <p class="thumb-title text-center">SITCON 2019<br /></p>
            <p class="thumb-subtitle text-center">開箱演算法</p>
          </a>
          <a class="thumb-wrapper" href="https://sitcon.org/2018/" target="_blank" rel="noopener">
            <!-- TODO add thumb -->
            <img class="cfp-img" src="@/assets/images/CFP/2018.png" />
            <p class="thumb-title text-center">SITCON 2018<br /></p>
            <!-- TODO alignment is not good -->
            <p class="thumb-subtitle text-center small">
              POPULAR COMPUTER SCIENCE
            </p>
          </a>
        </div>
      </div>
      <div class="join-discuss">
        <h3>參與討論！</h3>
        <div class="discuss-section">
          <p>
            SITCON 是個開放的社群，許多籌備的相關事項都會在公開的 Mailing list
            上進行討論，如果有興趣參與，歡迎訂閱 SITCON 的 Mailing list
            並貢獻你的想法！
          </p>
          <p>
            若你想進一步了解過往討論的內容，也歡迎在 HackMD 上查看 SITCON 2021
            的會議記錄。
          </p>
        </div>
        <div class="link-group mt-1">
          <a
            rel="noopener"
            target="_blank"
            class="btn btn-primary mr-2"
            href="https://groups.google.com/g/sitcon-general"
            >SITCON 論壇</a
          >
          <a
            rel="noopener"
            target="_blank"
            class="btn btn-primary"
            href="https://hackmd.io/@SITCON/SITCON2021"
            >會議記錄</a
          >
        </div>
      </div>
      <!--</div>-->
      <!--<svg width="1000" height="950" class="first-box"><rect width="1500" height="1200" style="fill: rgb(255, 255, 255);"></rect></svg>-->
    </div>
    <!-- ==================================================================================================== -->
    <!--<div class="box-bluearea">-->

    <div class="box-back2 box">
      <!--<div class="introd-text">-->
      <div class="topic-intro">
        <div class="about-topic">
          <h2>2021 年會主題</h2>
          <h1>算盤的後裔</h1>
          <p>
            千年以前的人類，發明了各式各樣輔助算術的工具，在世界各地的文明中，皆能找到廣義上的「算盤」。隨著時代演進，那些原始的工具，逐步進化成為現代的計算機與電腦，更進一步發展為隨處可見的智慧型裝置。俗話說「站在巨人的肩膀上」，前人的智慧成果成為墊腳石，讓站在其之上的後人可以看得更高、更遠。科技層層疊疊、承先啟後，文明才能跨越時空持續成長。
          </p>
          <p>
            人們不再需要重新發明輪子，只要善用前人的成果，就能造出更有效率的工具，並擁有更好的生活。生於現代的我們，每天寫著電腦程式、把玩著智慧型手機、徜徉在網際網路上沒有邊際的資訊大海。奠基於科技的現有成果，對科技的未來持續做出貢獻的我們，都是「算盤的後裔」。
          </p>
        </div>

        <div class="cfp-deadline">
          <h3>徵稿時間</h3>
          <div class="cfp-deadline-content">
            <p class="desktop-only">
              <span class="h3">01/15 ～ 02/22</span
              ><span class="ml-2 mr-2">詳細時程請見</span
              ><a
                class="btn btn-primary mr-2"
                rel="noopener"
                href="/2021/cfp/news"
                >投稿資訊</a
              ><a
                class="btn btn-primary"
                rel="noopener"
                target="_blank"
                href="https://forms.gle/XoXJSD2P8dL8X8s2A"
                >我知道了，快讓我投稿！</a
              >
            </p>
            <p class="mobile-only mb-1">
              <span class="h3">01/15 ～ 02/22</span
              ><span class="ml-2">詳細時程請見</span>
            </p>
            <p class="mobile-only">
              <a
                class="btn btn-primary mr-2"
                rel="noopener"
                href="/2021/cfp/news"
                >投稿資訊</a
              ><a
                class="btn btn-primary"
                rel="noopener"
                target="_blank"
                href="https://forms.gle/XoXJSD2P8dL8X8s2A"
                >快讓我投稿！</a
              >
            </p>
          </div>
        </div>
      </div>
      <div class="give-me-money">
        <p class="whisper">最後...</p>
        <h2>SITCON 贊助徵求</h2>
        <p>
          SITCON 的舉辦，除了有賴眾多志工的努力，也需要金錢的支持。<br />
          如果您認同 SITCON 的理念，歡迎以行動支持 SITCON
          的運作，讓更多交流產生！
        </p>
        <p>
          企業合作歡迎聯繫
          <a
            class="context-hyperlink"
            href="mailto:contact@sitcon.org"
            rel="noopener"
            target="_blank"
            >contact@sitcon.org</a
          >
        </p>
        <div>
          <a
            class="btn btn-primary"
            rel="noopener"
            target="_blank"
            href="http://bit.ly/donatesitcon2021"
            >個人贊助方案</a
          >
        </div>
        <!--</div>-->
        <!--<svg width="1100" height="1200" class="second-box"><rect width="1500" height="1500" style="fill: rgb(255, 255, 255);"></rect></svg>-->
      </div>
    </div>
    <!--</div>-->
  </main>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component
export default class IntrodContainer extends Vue {}
</script>

<style lang="scss">
@import "@/assets/scss/CFP/intro";
</style>
