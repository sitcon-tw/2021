<template>
    <div id="traffic">
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
            <section class="traffic-methods-info">
                <img src="~@/assets/images/traff_info.svg"/>
            </section>
        </article>
        
        <article class="traffic-bus">
            <h1>交通車資訊</h1>
            <section class="traffic-bus-info">
                <p>
                    今年我們也提供了交通車來方便會眾往返南港展覽館捷運站與中研院活動場地之間，詳細資訊如下提供給你參考：
                </p>
                <br/>
                <p>
                    交通車時間：
                    <ul>
                        <li>去程（往中研院）07:30 ~ 10:30</li>
                        <li>回程（往南港展覽館捷運站）16:30 ~ 19:30</li>
                    </ul>
                </p>
                <p>
                    上車地點：
                    <ul>
                        <li>去程（往中研院）南港展覽館捷運站 2A 出口前公車等候區</li>
                        <li>回程（往南港展覽館捷運站）中央研究院人文科學館大門口前</li>
                    </ul>
                </p>
                <p>
                    注意事項：
                    <ul>
                        <li>上車前請排隊配合工作人員量測體溫，體溫超過37.5度者恕無法上車。</li>
                        <li>因應疫情影響，也為了你我健康，請確實配戴口罩。</li>
                    </ul>
                </p>
            </section>
        </article>
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
