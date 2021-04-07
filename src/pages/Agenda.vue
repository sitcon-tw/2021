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
    <a href="#individual-agenda" @click="(e) => fixedScroll()"
      >個別議程（測試按鈕）</a
    >

    <Popup class="agendaBlock" id="individual-agenda">
      <AgendaBlock></AgendaBlock
    ></Popup>
  </div>
</template>
<script lang="ts">
import { Watch, Component, Prop, Vue } from 'vue-property-decorator';
import { Action, Getter } from 'vuex-class';

import { DeviceType } from '@/store/types/app';

import EventBlock from '../components/EventBlock.vue';
import BlockTitle from '../components/BlockTitle.vue';
import Popup from '../components/Popup.vue';
import AgendaBlock from '../components/AgendaBlock.vue';

@Component({
  components: {
    EventBlock,
    BlockTitle,
    Popup,
    AgendaBlock
  }
})
export default class Agenda extends Vue {
  @Getter('device', { namespace: 'app' }) private device!: DeviceType;
  private eventClickable = false;

  private isMobile(): boolean {
    return this.device === DeviceType.MOBILE;
  }

  public fixedScroll() {
    document.body.style.overflowY = 'hidden';
  }
}
</script>
<style lang="scss">
@import '@/assets/scss/agenda';
</style>
