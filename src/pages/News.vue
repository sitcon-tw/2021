<template>
  <div class="news">
      <NewsHeader id="news-header" />
      <Schedule id="news-schedule"/>
      <Agenda id="news-agenda"/>
    <!-- <Footer></Footer> should be put at App.vue (?) -->
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import NewsHeader from '@/components/news/Header.vue';
import Schedule from '@/components/news/Schedule.vue';
import Agenda from '@/components/news/Agenda.vue';

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
