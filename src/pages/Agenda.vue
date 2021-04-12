<template>
  <div id="agenda">
    <!-- Agenda Section -->
    <div class="agendaList">
      <BlockTitle text="Presentation" class="agendaList-topic" />
      <div class="agendaList-itemsBox">
        <a
          v-for="(x, index) in presentation"
          :href="'#' + x.id"
          :key="index"
          @click="() => handleAgendaClicked(x)"
        >
          <div class="agendaList-item">
            <span>{{ x.zh.title }}</span>
          </div>
        </a>
      </div>
      <BlockTitle text="Double Espresso" class="agendaList-topic" />
      <div class="agendaList-itemsBox">
        <a
          v-for="(x, index) in doubleEspresso"
          :href="'#' + x.id"
          :key="index"
          @click="() => handleAgendaClicked(x)"
        >
          <div class="agendaList-item">
            <span>{{ x.zh.title }}</span>
          </div>
        </a>
      </div>
      <BlockTitle text="espressoAgenda" class="agendaList-topic" />
      <div class="agendaList-itemsBox">
        <a
          v-for="(x, index) in espressoAgenda"
          :href="'#' + x.id"
          :key="index"
          @click="() => handleAgendaClicked(x)"
        >
          <div class="agendaList-item">
            <span>{{ x.zh.title }}</span>
          </div>
        </a>
      </div>
    </div>

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
    <Popup class="agendaBlock" :id="action.id">
      <AgendaBlock :info="action" :speakers="speakers"></AgendaBlock
    ></Popup>
  </div>
</template>
<script lang="ts">
import { Watch, Component, Prop, Vue } from 'vue-property-decorator';
import { Action, Getter } from 'vuex-class';

import { DeviceType } from '@/store/types/app';

import sessionData from '@/../public/json/session.json';

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
  private session = sessionData.sessions;
  private speakers = sessionData.speakers;
  private espressoAgenda = this.session.filter(
    (x: any): boolean => x.type === 'E'
  );
  private doubleEspresso = this.session.filter(
    (x: any): boolean => x.type === 'D'
  );
  private presentation = this.session.filter(
    (x: any): boolean => x.type === 'P'
  );
  private action = {};
  private isMobile(): boolean {
    return this.device === DeviceType.MOBILE;
  }
  private handleAgendaClicked(x: any) {
    this.action = x;
  }
  public fixedScroll() {
    document.body.style.overflowY = 'hidden';
  }
}
</script>
<style lang="scss">
@import '@/assets/scss/agenda';
</style>
