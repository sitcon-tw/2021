<template>
  <div class="news">
      <NewsHeader id="news-header" />
      <Schedule/>
      <Agenda/>
    <!-- <Footer></Footer> should be put at App.vue (?) -->
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import NewsHeader from '@/components/NewsHeader.vue';
import Schedule from '../components/CFP/Schedule.vue';
import Agenda from '../components/CFP/Agenda.vue';

@Component({
  components: {
    NewsHeader,
    Schedule,
    Agenda
  }
})
export default class News extends Vue {
  @Prop() private msg!: string;
}
</script>

<style lang="scss">
@import '@/assets/scss/news'
</style>
