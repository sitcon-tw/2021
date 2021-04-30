<template>
  <div class="main container" :class="event.icon">
    <div class="close button container">
      <img
        src="~@/assets/images/home/home-icon-close.svg"
        @click="
          () => {
            removeFixed();
            $emit('popup:close');
          }
        "
      />
    </div>
    <h1 class="title">{{ eventData[event.name].title }}</h1>
    <div class="description">
      {{ eventData[event.name].description }}
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { ConfEvent } from '@/store/types/app';

import EventData from '@/../public/json/event.json';

@Component({})
export default class EventPopUp extends Vue {
  @Prop() private event!: ConfEvent;

  private eventData = EventData;

  private removeFixed () {
    document.body.style.overflowY = 'scroll';
  }
}
</script>
<style lang="scss">
@import '@/assets/scss/eventpopup';
</style>