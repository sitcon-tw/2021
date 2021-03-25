<template>
    <a href="" class="event block">
        <img class="background" src="../assets/images/event-block-bg.svg">
        <div class="inner">
            <i v-if="icon" :class="icon" class="icon" />
            <span>{{ newlineText }}</span>
        </div>
    </a>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
})
export default class EventBlock extends Vue {
    @Prop({ default: '' }) private text!: string;
    @Prop({ default: '' }) private icon!: string;

    get newlineText () {
        return this.text.replace('\\n', '\n');
    }
}
</script>
<style lang="scss">
@import '@/assets/scss/eventblock';
</style>