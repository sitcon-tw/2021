<template>
  <div>
    <Header />
    <div class="home">
      home
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Header from "@/components/Header.vue";

@Component({
  components: {
    Header,
  },
})
export default class CFP extends Vue {
  @Prop() private msg!: string;
}
</script>

<style lang="scss">
@import "@/assets/scss/home/home";
</style>
