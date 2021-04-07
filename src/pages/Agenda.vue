<template>
  <div id="agenda">
    <!-- Vote Section -->
    <BlockTitle text="人氣投票" id="#vote" />
    <article class="bold">
      總是因為擠不進會議廳，而聽不到感興趣的議程嗎？
      <br /><br />
      喜歡的議程，不能只有自己看到！SITCON 2021
      首次舉辦「會前人氣投票」，除了搶先看到精彩議程介紹，也能把手中關鍵一票投給最期待的議程！會眾期待度愈高的議程，愈有機會安排在空間比較寬敞的會議廳。
    </article>
    <p class="vote">
      <a
        class="vote button"
        href="https://docs.google.com/forms/d/e/1FAIpQLSdWJtLP96bqXWukmOEar0xiBfGScm3qAlp-Xii05-cmU2Gxlg/viewform"
        target="_blank"
        rel="noopeener"
        >投票去</a
      >
    </p>
    <article>
      投票時間：4/2 (五) 20:00 至 4/9 (五) 23:59（UTC+8）<br />
      投票資格：於 4/9 (五) 23:59 前取得 2021 年會門票的與會者（不分票種）、2021
      年會志工、2021 年會講者
    </article>
    <article>
      【注意事項】
      <ol class="vote rule" start="0" type="1">
        <li>
          會前人氣投票結果，將作為議程組與審稿委員會於安排議程時段與會議廳的參考依據之一。
        </li>
        <li>
          投票為「記名投票」，使用 KKTIX
          四碼檢查碼作為投票依據。議程組以檢查碼辨識投票的人是否持有年會門票，不對外公布各組檢查碼的具體投票內容。
        </li>
        <li>
          三個議程種類（Espresso、Double Espresso 與 Presentation）可各選擇投給
          1 個議程。
        </li>
        <li>
          若同一議程種類選擇超過一個議程，或不選擇任何議程，視為無效票。各個議程種類的選票有效性互相獨立，無效票不影響其他議程種類的選票認定，舉例來說，若
          Espresso 選擇 2 個議程、Double Espresso 選擇 1 個議程、Presentation
          選擇 0 個議程，則 Double Espresso
          的部分為有效票，其他二種議程為無效票。
        </li>
        <li>
          此投票表單使用 Google
          Forms「隨機決定問題順序」功能決定各個議程的顯示順序。
        </li>
        <li>
          在投票截止前，可以使用同一組檢查碼重複投票。計票時以最新一筆投票記錄為準。
        </li>
      </ol>
    </article>
    <!-- Vote Section End -->
    <!-- Event Section -->
    <BlockTitle text="活動" id="#event" />
    <div v-if="!isMobile()" class="event container">
      <img class="arrow" src="@/assets/images/arrow-left.svg" />
      <EventBlock icon="union" text="大地遊戲" :clickable="eventClickable" />
      <EventBlock
        icon="stall-outline"
        text="社群攤位"
        :clickable="eventClickable"
      />
      <EventBlock icon="group" text="天使計劃" :clickable="eventClickable" />
      <EventBlock
        icon="lightning-outline"
        text="Lightning\nTalk"
        :special="true"
        :clickable="eventClickable"
      />
      <EventBlock
        icon="guide-outline"
        text="導遊團"
        :clickable="eventClickable"
      />
      <EventBlock text="開放式\n議程" :clickable="eventClickable" />
      <img class="arrow" src="@/assets/images/arrow-right.svg" />
    </div>
    <div v-else class="mobile event container">
      <div class="column">
        <EventBlock icon="union" text="大地遊戲" :clickable="eventClickable" />
        <EventBlock
          icon="stall-outline"
          text="社群攤位"
          :clickable="eventClickable"
        />
        <EventBlock icon="group" text="天使計劃" :clickable="eventClickable" />
      </div>
      <div class="column">
        <EventBlock
          icon="lightning-outline"
          text="Lightning\nTalk"
          :special="true"
          :clickable="eventClickable"
        />
        <EventBlock
          icon="guide-outline"
          text="導遊團"
          :clickable="eventClickable"
        />
      </div>
      <div class="column">
        <img class="arrow" src="@/assets/images/arrow-left.svg" />
        <EventBlock text="開放式\n議程" :clickable="eventClickable" />
        <img class="arrow" src="@/assets/images/arrow-right.svg" />
      </div>
    </div>
    <!-- Event Section End -->
    <a href="#individual-agenda">個別議程（測試按鈕）</a>

    <Popup class="agendaPopup" id="individual-agenda">
      <div class="agendaPopup-container">
        <div class="agendaPopup__close">
          <a href="">
            <img src="~@/assets/images/home/home-icon-close.svg" />
          </a>
        </div>
        <div class="agendaPopup__title">
          <h1>論壇 - 刪你廢文再收掉服務！大型資訊企業決策的自由與責任</h1>
          <div class="agendaPopup__title-sub">
            <span>#Python</span><span>#新手向</span><span>#後端</span>
          </div>
        </div>
        <div class="agendaPopup__content">
          <div class="agendaPopup__content-left">
            <div class="agendaPopup__content-left-container">
              <article>
                <p>
                  今天又在臉書、YouTube
                  看了多少廢文、影片或迷因？又被推薦去買了什麼東西？
                  我們透過每天的點擊來選擇讓資訊企業的平台為自己服務。從精選廢文、迷因或者是可以浪費整天看影片的平台開始，我們習慣於讓這些企業決定我們的生活，即使沒有人瞭解
                  YouTube 的黃標是怎麼決定，什麼東西為什麼違反 Facebook
                  的社群規範，Google 可不可以直接收掉 Google
                  Reader，蘋果為什麼阻擋某些 App
                  上架。儘管人們對資訊企業運作方式幾乎一無所知，仍然傾向於信任這些企業，並繼續使用著這些服務。
                  　　在網路企業爭取營利、擴張影響力的路上，這些巨型、跨國、接近壟斷的資訊企業向使用者隱藏了些什麼？現今的政府和法律能保護我們嗎？我們應該相信政府會保障使用者的權益不為企業的各種決策所侵害嗎？上個世代的人向政府機構將資訊自由爭取回來，那我們這個世代「決定自己想看什麼說什麼」的資訊自由，是否還確實握在手中？
                </p>
              </article>
              <article>
                <h2>
                  關於 主持人 - 子魚
                </h2>
                <p>
                  g0v 社群長期參與者，不務正業的法律人，長年
                  遊走於公部門與私部門、新創與中小企業之間的協調者， 2016
                  年不小心跌進了 vTaiwan 的坑
                  ，持續探索著利用數位工具組織法規利害關係人的方法以及開放社群的永續發展之道。
                </p>
              </article>
              <article>
                <h2>關於 主持人 - 何明諠</h2>
                <p>
                  Speaker 與談人 - 何明諠's
                  avatar清華大學電機系畢，清華大學哲學所碩士，論文研究德國法學家Carl
                  Schmitt的法理論與政治理論。現為台灣人權促進會副秘書長，過去幾年主要關注科技使用而造成的人權侵害問題。
                  主要處理的議題有個人資料保護法制、國家通訊監察、網路內容審查、健康資料、晶片身分證、人臉辨識等。
                </p>
              </article>
              <article>
                <h2>
                  關於 與談人 - 詹婷怡律師
                </h2>
                <p>
                  詹婷怡律師為前國家通訊傳播委員會主任委員，擁有相當豐富的跨領域學經歷
                  ， 歷任產官學研重要職務，從法律 、 科技 、
                  與創意等領域，參與數位整備、 創新創業
                  、寛頻建設、區域創新、匯流融合等工作：特別是2016~2019擔任國家通訊傳播委員會主任委員期間，主導規劃台灣後匯流時代發展藍圖、推動電信管理法與數位通訊傳播法及相關法規、5G與物聯網政策制定、影視平台及上下游產業生態系統建構、網路治理與資安政策推動等，兼具第一線的產業與政策制定經驗。
                  自1992年從事律師工作起，詹婷怡即致力並專長於智慧財產權法、網路法律、科技法律、及數位匯流法律與產業政策分析領域，她是智財法及科技法律與產業發展策略專家
                  ，在執業多年並出國攻讀碩士學位回國後，參與早期台灣電信自由化與數位匯流發展進程。轉入產業發展，在擔任資策會主任秘書期間，投入台灣資訊化社會及資通訊產業發展推動與發展工作，並曾擔任經濟部南港軟體育成中心主任、文建會(文化部前身)文創產業專案辦公室主任
                  、資策會科技法律研究所所長、中影管理顧問總經理。在2008年至2010年擔任南港軟體育成中心主任與文創產業專案辦公室主任期間，帶領新創產業團隊爭取資金，並負責規劃台灣文創產業發展藍圖，包括法規、投融資機制、文創院等配套；在2013年至2016年擔任資訊工業策進會科技法律研究所所長期間，擔任多項政府前瞻科技相關政策法制計畫主持人，帶領科法所成為政府科技法律重要智庫，並促成vTaiwan線上法規討論平台的建立。
                  詹婷怡也曾投入電影產業影視製作，擔任監製與製片，參與多部電影製作與資金籌措管理，包括《父後七日》、《龍飛鳳舞》、《進擊之路》、《賽德克．巴萊》及《阿莉芙》等。
                  她擁有國立政治大學EMBA學位、英國倫敦大學智慧財產法學碩士及國立台灣大學法學士學位。目前並為國立政治大學社會科學院行政管理碩士學程兼任教授。
                </p>
              </article>
            </div>
          </div>
          <div class="agendaPopup__content-right">
            <div class="agendaPopup__content-right-container">
              <article>
                <h2>適合聽眾</h2>
                <p>
                  沒有任何經驗的初學者喵喵喵喵喵 沒有任何經驗的初學者喵喵喵喵喵
                </p>
              </article>
              <article>
                <h2>適合聽眾</h2>
                <p>
                  沒有任何經驗的初學者喵喵喵喵喵 沒有任何經驗的初學者喵喵喵喵喵
                  沒有任何經驗的初學者喵喵喵喵喵 沒有任何經驗的初學者喵喵喵喵喵
                </p>
              </article>
              <section class="agendaPopup-record">
                <div class="agendaPopup-buttonsBox">
                  <img src="" alt="hi" />
                  <a href="">簡報連結</a>
                  <a href="">線上 QA</a>
                </div>
              </section>
              <section>
                <img src="" alt="null" />
              </section>
              <section>
                <img src="" alt="null" />
              </section>
              <section>
                <img src="" alt="null" />
              </section>
            </div>
          </div>
        </div>
      </div>
    </Popup>
  </div>
</template>
<script lang="ts">
import { Watch, Component, Prop, Vue } from 'vue-property-decorator';
import { Action, Getter } from 'vuex-class';

import { DeviceType } from '@/store/types/app';

import EventBlock from '../components/EventBlock.vue';
import BlockTitle from '../components/BlockTitle.vue';
import Popup from '../components/Popup.vue';

@Component({
  components: {
    EventBlock,
    BlockTitle,
    Popup
  }
})
export default class Agenda extends Vue {
  @Getter('device', { namespace: 'app' }) private device!: DeviceType;
  private eventClickable = false;

  private isMobile(): boolean {
    return this.device === DeviceType.MOBILE;
  }
}
</script>
<style lang="scss">
@import '@/assets/scss/agenda';
</style>
