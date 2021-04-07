<template>
  <div id="home" class="home">
    <section class="section-title">
      <div class="home__title">
        <div class="home__title-box1">
          <p>SITCON 學生計算機年會 2021</p>
        </div>
        <div class="home__title-topic">
          <img src="~@/assets/images/home/home-topic.svg" width="100%" />
        </div>
        <div class="home__title-box2">
          <p class="home__title-box2--p1">
            05/29 • 中央研究院－人文社會科學館 •免費報名
          </p>
          <p class="home__title-box2--p2">
            05/29 <br /><br />
            中央研究院－人文社會科學館 •免費報名
          </p>
        </div>
        <router-link to="/cfp" class="home__placard">
          <div class="hexagon">
            <div class="l"></div>
            <div class="c">
              <span>公告</span>
            </div>
            <div class="r"></div>
          </div>
          <div class="info">
            <span>開放式議程 徵稿中</span>
          </div>
        </router-link>
      </div>
    </section>
    <section class="section-content">
      <section class="home__info">
        <div class="home__info-container">
          <div class="home__info-title home__info-title--1">
            <img
              class="home-squareImg"
              src="~@/assets/images/home/home-icon-square.svg"
            />
            <h1>算盤的後裔</h1>
            <h2 class="home__info-title-h2--big">
              Descendants of the abacus
            </h2>
          </div>
          <div class="home__info-paragraph">
            <p>
              千年以前的人類，發明了各式各樣輔助算術的工具，在世界各地的文明中，皆能找到廣義上的「算盤」。隨著時代演進，那些原始的工具，逐步進化成為現代的計算機與電腦，更進一步地發展為隨處可見的智慧型裝置。
              <br />
              俗話說「站在巨人的肩膀上」，前人的智慧成果成為墊腳石，讓站在其之上的後人可以看得更高、更遠。科技層層疊疊、承先啟後，文明才能跨越時空持續成長。
              <br />
              <br />
              人們不再需要重新發明輪子，只要善用前人的成果，就能造出更有效率的工具，並擁有更好的生活。生於現代的我們，每天寫著電腦程式、把玩著智慧型手機、徜徉在網際網路上沒有邊際的資訊大海，奠基於科技的現有成果，才能持續貢獻於科技的未來。我們都是「算盤的後裔」。
            </p>
          </div>
        </div>
      </section>
      <section class="home__info">
        <div class="home__info-container">
          <div class="home__info-title home__info-title--2">
            <img
              class="home-appleImg"
              src="~@/assets/images/home/home-icon-apple.svg"
            />
            <h1>關於 SITCON</h1>
            <h2 class="home__info-title-h2--small">
              Students' Information Technology Conference
            </h2>
          </div>
          <div class="home__info-paragraph">
            <p>
              學生計算機年會（SITCON）是由學生自發舉辦，投身學生資訊教育與推廣開源精神的社群，
              也是一個由學生主辦、學生擔任講者、以學生為主軸的資訊研討會，給學生們一個發表交流技術的舞台。
            </p>
            <br />
            <p>
              除了技術研討之外，還有許多從學生角度出發的經驗分享、專題研究成果或探討學生相關議題等等議程。
              我們也曾舉辦黑客松、工作坊，和各地學校社團舉辦聯合講座等等。
            </p>
          </div>
        </div>
      </section>
      <section class="home__info">
        <div class="home__info-container">
          <div class="home__info-title">
            <h1>行為準則</h1>
            <h2 class="home__info-title-h2--mid">
              Code of Conduct
            </h2>
          </div>
          <div class="home__info-paragraph">
            <p>
              SITCON
              歡迎不同身分、來自不同背景的與會者，也非常鼓勵女性、性少數與多元背景的參與者。為了讓大家都能愉快的參加
              SITCON，我們要求所有參與者閱讀年會的<a
                href="https://sitcon.org/code-of-conduct/"
                target="_blank"
                >行為準則（Code of Conduct）</a
              >，共同創造一個友善的環境。
            </p>
          </div>
        </div>
      </section>
      <section class="home__info">
        <div class="home__info-container">
          <div class="home__info-title">
            <h1>參與討論</h1>
            <h2 class="home__info-title-h2--mid">
              Join the community
            </h2>
          </div>
          <div class="home__info-paragraph">
            <p>
              SITCON
              是個開放的社群，許多籌備的相關事項都會在公開的郵件論壇上進行討論，如果有興趣參與，歡迎訂閱
              SITCON 的郵件論壇並貢獻你的想法！
              <br />
              <br />
              若你想進一步了解過往討論的內容，也歡迎在 HackMD 上查看 SITCON 2021
              的會議記錄。
            </p>
          </div>
          <div class="home__info-buttonsBox">
            <a
              href="https://groups.google.com/g/sitcon-general"
              target="_blank"
              class="home-button"
              >郵件論壇</a
            >
            <a
              href="https://hackmd.io/@SITCON/SITCON2021"
              target="_blank_"
              class="home-button"
              >會議記錄</a
            >
          </div>
        </div>
      </section>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  components: {}
})
export default class CFP extends Vue {
  @Prop() private msg!: string;
}
</script>

<style lang="scss">
@import '@/assets/scss/home/home';

/*

.hexagon {
  float: right;
  $width: 40px;
  $height: 50px;
  $background: #1060ff;
  width: 104px;
  transform: rotate(90deg);
  div {
    //display: inline;
    margin: 0;
  }
  .l {
width: 0;
border-bottom: $height/2 solid $background;
border-left: $width/2 solid transparent;
border-right: $width/2 solid transparent;
  }
  .c{
width: $width;
height: $height;
background-color: $background;
display: flex;
justify-content: center;
align-items: center;
    span {
      transform: rotate(-90deg);
    }
  }
  .r {
width: 0;
border-top: $height/2 solid $background;
border-left: $width/2 solid transparent;
border-right: $width/2 solid transparent;
}
}*/
</style>
