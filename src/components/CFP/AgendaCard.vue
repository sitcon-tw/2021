<template>
    <div class="agenda card">
        <a class="image container" :href="ytLink" target="_blank" rel="noopener">
            <img :src="img">
        </a>
        <p class="description">{{ title }} <span v-if="introdLink != ''">(<a :href="introdLink" target="_blank" rel="noopener">簡介</a>)</span></p>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class AgendaCard extends Vue {
    @Prop({ required: true }) private ytLink!: string;
    @Prop({ required: true }) private introdLink!: string;
    @Prop({ required: true }) private title!: string;
    @Prop({ required: true }) private img!: string;
}
</script>

<style lang="scss">
@import '@/assets/scss/CFP/card.scss';
</style>