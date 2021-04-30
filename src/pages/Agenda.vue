<template>
  <div id="agenda">
    <!-- Agenda Section -->
    <DecoratedSessionTable
      :sessionData="sessionData"
      :rooms="['R2', 'R0', 'R1', 'R3', 'S']"
      :isMobile="isMobile()"
      :popUp.sync="popUp"
      urlPrefix="http://sitcon.org/2021/agenda"
      @popup:session="onPopUp"
    />
    <!-- Agenda Section End -->
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
      <EventBlock icon="group" text="天使計畫" :clickable="eventClickable" />
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
        <EventBlock icon="group" text="天使計畫" :clickable="eventClickable" />
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
    <Popup class="agendaBlock popup-active" v-if="$route.params.uid" backto="/agenda" @popup:close="onPopUpClose">
      <AgendaBlock :id="$route.params.uid" @popup:close="onPopUpClose"></AgendaBlock
    ></Popup>
    <Popup class="event-popup popup-active" v-if="popUpEvent.name && !$route.params.uid" backto="/agenda" @popup:close="onPopUpClose">
      <EventPopUp :event="popUpEvent" @popup:close="onPopUpClose" />
    </Popup>
  </div>
</template>
<script lang="ts">
import { Route } from 'vue-router';
import { Watch, Component, Prop, Vue } from 'vue-property-decorator';
import { Action, Getter } from 'vuex-class';

import { ConfEvent, DeviceType } from '@/store/types/app';

import sessionData from '@/../public/json/session.json';

import EventBlock from '../components/EventBlock.vue';
import BlockTitle from '../components/BlockTitle.vue';
import Popup from '../components/Popup.vue';
import AgendaBlock from '../components/AgendaBlock.vue';
import EventPopUp from '../components/EventPopUp.vue';
import DecoratedSessionTable from '../components/DecoratedSessionTable.vue';

@Component({
  components: {
    EventBlock,
    BlockTitle,
    Popup,
    AgendaBlock,
    EventPopUp,
    DecoratedSessionTable
  }
})
export default class Agenda extends Vue {
  @Getter('device', { namespace: 'app' }) private device!: DeviceType;
  @Getter('event', { namespace: 'app' }) private popUpEvent!: ConfEvent;
  @Action('toggleEvent', { namespace: 'app' }) private toggleEvent!: (event: ConfEvent) => void;

  private eventClickable = true;
  private popUp: boolean = false;

  private sessionData = sessionData;
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

  public created () {
    this.popUp = !!this.$route.params.uid;
  }

  private isMobile (): boolean {
    return this.device === DeviceType.MOBILE;
  }

  // event is proxied by DecoratedSessionTable
  private onPopUp (popUp: boolean, session: any = {}) {
    if (popUp) {
      const id = session.id;
      this.$router.push(`/agenda/${id}`);
    }
  }

  private onPopUpClose () {
    this.popUp = false;
    if (this.popUpEvent.name) {
      this.toggleEvent({ name: '', icon: '' });
    }
  }
}
</script>
<style lang="scss">
@import '@/assets/scss/agenda';
</style>
