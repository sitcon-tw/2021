<template>
  <div class="popup" :id="id" @click="()=>$router.go(-1)">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop } from 'vue-property-decorator';

@Component({
    props: ['id']
})
export default class Popup extends Vue {
  @Prop() private id!: string;
}
</script>
<style lang="scss">
@import '@/assets/scss/Popup';
</style>