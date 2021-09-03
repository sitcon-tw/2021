<template>
    <article id="venue">
        <section class="venue-title">
            <img src="~@/assets/images/arrow-left-blue.svg"/>
            <h1>
                線上會場
            </h1>
            <img src="~@/assets/images/arrow-right-blue.svg"/>
        </section>
        <section class="venue-section" style="margin-bottom: 60px">
            今年 SITCON 將在 09/04 採線上進行，我們會透過 Youtube 直播議程，並在 Gather 搭建虛擬年會會場的方式，希望帶給大家有別於實體年會的有趣體驗。
        </section>
        <section class="venue-section" style="margin-top: 60px">
            點擊下方連結即可前往相關活動會場。<br />
            <img class="gather logo" src="@/assets/images/venue/gather-logo.png">
        </section>
        <section class="venue-section venue-map">
            <div class="list">
                <BlockTitle class="left aligned single" text="Space 01"></BlockTitle>
                <ul>
                    <li>R0 國際會議廳</li>
                    <li>大會服務台 [01]</li>
                    <li>遊戲間</li>
                    <li>Panasonic 攤位 [02]</li>
                    <li>Dcard 攤位 [03]</li>
                    <li>曉數碼攤位 [04]</li>
                    <li>COSCUP 攤位 [05]</li>
                    <li>開放文化基金會攤位 [06]</li>
                    <li>PyCon Taiwan 攤位 [07]</li>
                </ul>
            </div>
            <div class="mini map">
                <img class="gather map" src="@/assets/images/venue/SITCON_Gather_MiniMapSPACE-01.png">
                <a class="home-button" href="https://gather.town/app/VGDsDLUeG7nAXrld/SITCON%202021%20Space%2001" target="_blank">會場連結</a>
            </div>
        </section>
        <section class="venue-section venue-map">
            <div class="list">
                <BlockTitle class="left aligned single" text="Space 10"></BlockTitle>
                <ul>
                    <li>R1 第一會議室</li>
                    <li>R3 第三會議室</li>
                    <li>Google Developer Student Club 攤位 [08]</li>
                    <li>零時小學校攤位 [09]</li>
                    <li>AWS 攤位 [10]</li>
                    <li>AMD 攤位 [11]</li>
                    <li>鈦坦科技攤位 [12]</li>
                    <li>教育部推動大學程式設計教學計畫攤位 [13]</li>
                    <li>中央創遊攤位 [14]</li>
                    <li>Chatbot Developers Taiwan 攤位 [15]</li>
                    <li>夢想之都工作室攤位 [16]</li>
                </ul>
            </div>
            <div class="mini map">
                <img class="gather map" src="@/assets/images/venue/SITCON_Gather_MiniMapSPACE-10.png">
                <a class="home-button" href="https://gather.town/app/nQwAJKcDkWOQNTxp/SITCON%202021%20Space%2010" target="_blank">會場連結</a>
            </div>
        </section>
        <section class="venue-section venue-map">
            <div class="list">
                <BlockTitle class="left aligned single" text="Space 11"></BlockTitle>
                <ul>
                    <li>R2 第二會議室</li>
                    <li>F 開放式議程廳</li>
                    <li>Oursky 攤位 [17]</li>
                    <li>資策會攤位 [18]</li>
                    <li>MOPCON 攤位 [19]</li>
                    <li>Monospace 攤位 [20]</li>
                    <li>交大 VTuber 社攤位 [21]</li>
                    <li>MozTW 攤位 [22]</li>
                    <li>Ubuntu-TW 攤位 [23]</li>
                    <li>梅竹黑客松攤位 [24]</li>
                </ul>
            </div>
            <div class="mini map">
                <img class="gather map" src="@/assets/images/venue/SITCON_Gather_MiniMapSPACE-11.png">
                <a class="home-button" href="https://gather.town/app/8xTwDiNGOoo732Gt/SITCON%202021%20Space%2011" target="_blank">會場連結</a>
            </div>
        </section>
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
