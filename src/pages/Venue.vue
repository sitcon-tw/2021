<template>
    <article id="venue">
        <section class="venue-title">
            <img src="~@/assets/images/arrow-left-blue.svg"/>
            <h1>
                中研院-人文社會科學館
                <br/>
                場內地圖
            </h1>
            <img src="~@/assets/images/arrow-right-blue.svg"/>
        </section>
        <section class="venue-map">
            <img class="floor" src="~@/assets/images/venue/3F-title.svg"/>
            <img class="map" src="~@/assets/images/venue/3F/A.png"/>
        </section>
        <section class="venue-map venue-4f">
            <img class="floor" src="~@/assets/images/venue/4F-title.svg"/>
            <img class="map" src="~@/assets/images/venue/4F/A.png"/>
        </section>
        <BlockTitle text="攤位資訊"></BlockTitle>
        <div class="temp">
            <img 
                src="~@/assets/images/teams/wip.svg"
            />
            <h1>敬請期待...</h1>
        </div>
    </article>
</template>
<script labg="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import BlockTitle from '@/components/BlockTitle.vue';

@Component({
    components: {
        BlockTitle
    }
})
export default class Venue extends Vue {}
</script>

<style lang="scss">
@import '@/assets/scss/venue';
</style>
