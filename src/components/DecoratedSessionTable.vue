<template lang="html">
  <div id="session-table" :class="{ mobile: isMobile }" :style="{
    'grid-template-columns': ['[TIME] 60px', ...rooms.map(r => `[${r}] 1fr`), '[END]'].join(' '),
    'grid-template-rows': ['[HEAD]', ...timeline, '[TAIL]'].join(' auto ')
  }">
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
      :style="{ 'grid-area': `${lunchTime} / ${r} / TAIL` }"
      :key="r"
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
    private lunchTime: string = '';

    public created () {
      this.createTimeline();
    }

    public mounted () {
      this.$nextTick().then(() => {
        // sessions before lunch would be different style (WIP)
        // also create decoration bar starting from lunch time
        const lunch = this.sessionData.sessions.find((session: any) => session.zh.title === '午餐');
        this.lunchTime = this.normalizeTime(lunch.start);
      });
    }

    private normalizeTime (time: string) {
      const rule = RegExp('T\\d{2}:\\d{2}:\\d{2}');
      return rule.exec(time)![0].replaceAll(':', '');
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
  }
</script>
<style lang="scss">
@import '@/assets/scss/sessiontable';
</style>