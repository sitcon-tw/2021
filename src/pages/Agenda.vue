<template>
  <div id="agenda">
    <div class="event container">
      <img class="arrow" src="@/assets/images/arrow-left.svg">
      <EventBlock icon="union" text="大地遊戲"/>
      <EventBlock icon="stall-outline" text="社群攤位"/>
      <EventBlock icon="group" text="天使計劃"/>
      <EventBlock icon="lightning-outline" text="Lightning\nTalk" style="font-size: 20px"/>
      <EventBlock icon="guide-outline" text="導遊團"/>
      <EventBlock text="開放式\n議程"/>
      <img class="arrow" src="@/assets/images/arrow-right.svg">
    </div>
  </div>
</template>
<script lang="ts">
import { Watch, Component, Prop, Vue } from 'vue-property-decorator';

import EventBlock from '../components/EventBlock.vue';
@Component({
  components: {
    EventBlock
  }
})
export default class Agenda extends Vue {

}
</script>
<style lang="scss">
@import '@/assets/scss/agenda';
</style>