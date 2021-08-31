<template lang="html">
  <div id="session-table" :class="{ mobile: isMobile }" :style="!isMobile ? {
    'grid-template-columns': ['[TIME] 60px', ...rooms.map(r => `[${r}] 1fr`), '[END]'].join(' '),
    'grid-template-rows': ['[HEAD]', ...timeline, '[TAIL]'].join(' auto ')
  } : {}">
    <CCIPSessionTable
      :sessionData="sessionData"
      :rooms="rooms"
      :isMobile="isMobile"
      :isPopup.sync="internalPopUp"
      :popUpSession.sync="popUpSession"
      :urlPrefix="urlPrefix"
    />
    <div class="decoration bar"
      v-if="!isMobile"
      v-for="r in rooms"
      :style="{ 'grid-area': `${firstRestTime} / ${r} / TAIL` }"
      :key="r"
    ></div>
    <!-- just a empty block, substr for removing brackets -->
    <div
      class="tail decoration ccip-app ccip-session-block session-block"
      :style="{
        'grid-area': `${timeline[timeline.length - 1].substr(1, 7)} / ${rooms[0]} / TAIL / END`
      }"
    ></div>
  </div>
</template>
<script lang="ts">
  import { Component, Prop, PropSync, Vue, Watch } from 'vue-property-decorator';

  import CCIPSessionTable from '@ccip-app/session-table';

  @Component({
    components: {
      CCIPSessionTable
    }
  })
  export default class DecoratedSessionTable extends Vue {
    @Prop() private sessionData: any;
    @Prop() private rooms!: string[];
    @PropSync('popUp') private internalPopUp!: boolean;
    @Prop() private isMobile!: boolean;
    @Prop() private urlPrefix!: string;

    private popUpSession = {};

    private timeline: string[] = [];
    private firstRestTime: string = '';

    public created () {
      this.createTimeline();
    }

    public mounted () {
      // sessions before first rest would be different style
      // also create decoration bar starting from the first rest time
      const firstRest = this.sessionData.sessions.find((s: any) => s.broadcast?.length === this.rooms.length);
      this.firstRestTime = this.normalizeTime(firstRest.start);
 
      this.applySquareSessionBlockStyle();
    }

    private normalizeTime (time: string) {
      const rule = RegExp('T\\d{2}:\\d{2}:\\d{2}');
      return rule.exec(time)![0].replace(/:/g, '');
    }

    private createTimeline () {
      const temp = new Set<string>([]);

      for (const session of this.sessionData.sessions) {
        const { start, end } = session;
        [start, end].forEach((t: string): void => {
          temp.add(`[${this.normalizeTime(t)}]`);
        });
      }

      this.timeline = Array.from(temp).sort();
    }

    @Watch('internalPopUp')
    private onInternalPopUp (popUp: boolean) {
      // pass to Agenda component
      this.$emit('popup:session', popUp, popUp ? this.popUpSession : {});
    }

    @Watch('isMobile')
    private applySquareSessionBlockStyle () {
      // only on desktop view
      if (this.isMobile) {
        return;
      }

      this.$nextTick().then(() => {
        // We have to iterate all elements because DOM order != visual order.
        Array.from(
          document.querySelectorAll<HTMLElement>('.ccip-app.ccip-session-table.general .session-block')
        ).forEach((el: HTMLElement, i: number) => {
          // grid row start => session.start
          if (el.style.gridRowStart.localeCompare(this.firstRestTime) < 0) {
            el.classList.add('square');
          }
        });
      });
    }
  }
</script>
<style lang="scss">
@import '@/assets/scss/sessiontable';
</style>