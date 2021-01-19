<template>
    <div class="topic">
        <h3 class="title" v-html="title"></h3>
        <div class="divider"></div>
        <p class="description">{{ description }}</p>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Topic extends Vue {
    @Prop({ required: true }) private topic!: string;
    @Prop({ required: true }) private description!: string;

    get title () {
        return this.topic.replace(/(：|？)/, '$1<br data-delimiter="$1">');
    }
}
</script>

<style lang="scss">
@import '@/assets/scss/CFP/topic.scss';
</style>