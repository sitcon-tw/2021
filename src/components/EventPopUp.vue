<template>
    <div class="event popup">

    </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})
export default class EventPopUp extends Vue {
    @Prop() private name!: string;
}
</script>
<style lang="scss">
@import '@/assets/scss/eventpopup';
</style>