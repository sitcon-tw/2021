<template>
  <div class="news">
    <NewsHeader id="ocfp-header" />
    <Schedule id="ocfp-schedule" />
    <Agenda id="ocfp-agenda" />
    <!-- <Footer></Footer> should be put at App.vue (?) -->
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import NewsHeader from '@/components/ocfp-news/Header.vue';
import Schedule from '@/components/ocfp-news/Schedule.vue';
import Agenda from '@/components/ocfp-news/Agenda.vue';

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
