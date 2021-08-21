<template>
  <div></div>
</template>
<script lang="ts">
// import { Route } from 'vue-router';
import {Component, Vue } from 'vue-property-decorator';

import sessionData from '@/../public/json/session.json';

@Component({
  components: {
  }
})
export default class Redirect extends Vue {
  private sessionData = sessionData;
  private session = sessionData.sessions;

  public beforeMount () {
      const { type, room } = (this.$router as any).history.current.params;

      const currentSession: any = this.session.filter((x: any) => x.room === room.toUpperCase());
      const now = Date.now();

      for (const session of currentSession) {
        const url = session[type];
        if (!url) {
          continue;
        }

        const { start, end } = session;
        const startTime = new Date(start).getTime();
        const endTime = new Date(end).getTime();

        if (now > startTime && now < endTime) {
          window.location.href = url;
        }

        // console.log(now, startTime, endTime);
      }

      switch (type) {
        default:
          return window.location.href = '/2021';
      }
  }
}
</script>
<style lang="scss">

</style>