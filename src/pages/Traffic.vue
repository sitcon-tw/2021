<template>
    <div id="traffic">
        <WIP/>
        <!--
        <BlockTitle class="title" text="會場地點"></BlockTitle>
        <article>
        <section class="address">
            <p>中央研究院人文社會科學館</p>
            <p>台北市南港區研究路二段 128 號</p>
        </section>
        <section>
            <SitconMap width="70%" height="500px"></SitconMap>
        </section>
        </article>
        <article class="traffic-methods">
            <section>交通方式</section>
            <img src="~@/assets/images/traff_info.svg"/>
        </article>
        -->
        <!-- 
        <article class="traff-car-info">
            <section>交通車資訊</section>
        </article>
        -->
    </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import BlockTitle from '../components/BlockTitle.vue';
import SitconMap from '../components/sitcon-map.vue';
import WIP from '../components/WIP.vue';

@Component({
    components: {
        BlockTitle,
        SitconMap,
        WIP
    }
})
export default class Traffic extends Vue {}
</script>

<style lang="scss">
@import '../assets/scss/traffic.scss';
</style>
