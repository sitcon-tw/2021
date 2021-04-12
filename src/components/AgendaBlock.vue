<template>
  <!-- <div class="agendaBlock"> -->
  <div class="agendaBlock-container">
    <div class="agendaBlock__close">
      <img
        src="~@/assets/images/home/home-icon-close.svg"
        @click="
          () => {
            $router.go(-1);
            removeFixedScroll();
          }
        "
      />
    </div>
    <div class="agendaBlock__title">
      <h1>{{info.zh.title}}</h1>
      <div class="agendaBlock__title-sub">
        <span v-for="tag in info.tags">{{tag}}</span>
      </div>
    </div>
    <div class="agendaBlock__content">
      <div class="agendaBlock__content-left">
        <div class="agendaBlock__content-left-container">
          <article class="--top">
            <p>{{info.zh.description}}</p>
          </article>
          <article v-for="speaker in info.speakers">
            <h2>{{getSpeaker(speaker).zh.name}}</h2>
            <p>{{getSpeaker(speaker).zh.bio}}
            </p>
          </article>
        </div>
      </div>
      <div class="agendaBlock__content-right">
        <div class="agendaBlock__content-right-container">
          <article>
            <h2>適合聽眾</h2>
            <p>
              編輯中...
            </p>
          </article>
          <article>
            <h2>先備知識</h2>
            <p>
              編輯中...
            </p>
          </article>
          <section class="agendaBlock_record">
            <!-- agendaDefaultRecord -->
            <iframe src="" frameborder="0"></iframe>
            <div class="agendaBlock-buttonsBox">
              <a href="">簡報連結</a>
              <a href="">線上 QA</a>
            </div>
          </section>
          <section v-for="speaker in info.speakers">
            <img :src="getSpeaker(speaker).avatar" alt="null" />
          </section>
        </div>
      </div>
    </div>
    <!-- </div> -->
  </div>
</template>
<script lang="ts">
import { Watch, Component, Prop, Vue } from 'vue-property-decorator';
@Component({})
export default class AgendaBlock extends Vue {
  @Prop() private info!: any;
  @Prop() private speakers!: any;
  public getSpeaker (id: string): any {
    return this.speakers.find((speaker: any) => (speaker.id === id));
  }
}
</script>
<style lang="scss">
@import '@/assets/scss/agendaBlock';
</style>
