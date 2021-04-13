<template>
    <div class="ariticleParagraph-wraper">
        <div class="ariticleParagraph">
            <div class="ariticleParagraph__left">
                <img class="ariticleParagraph-arrow" src="@/assets/images/arrow-left-blue.svg" />
            </div>
            <div class="ariticleParagraph__mid">
                <div class="ariticleParagraph-content">
                    <p>
                    SITCON 學生計算機年會為學生自發組成籌辦的研討會，秉持著以學生為主軸的核心價值，提供一個經驗交流與資訊技術實務分享的平台，進而達到「學以致用、教學相長」的目標。
                    </p>
                    <br/>
                    <br/>
                    <p>維繫這樣的交流平台，需要多人的努力及貢獻，亦十分需要在資金上的支持。</p>
                    <p>希望能藉由您的一份力量，來促成活動的舉行，讓更多學生能在舞台上展現自我成長。</p>
                    <p>歡迎您參與贊助，支持 SITCON、讓我們將每年的活動辦得盡善盡美！ </p>
                </div>                
            </div>       
            <div class="ariticleParagraph__right">
                <img class="ariticleParagraph-arrow" src="@/assets/images/arrow-right-blue.svg" />
            </div>
        </div>
        <div class="ariticleParagraph-buttonsBox">
            <a class="ariticleParagraph-button" href="http://bit.ly/donatesitcon2021" target="_blank"><span>個人贊助</span></a>
            <a class="ariticleParagraph-button" href="mailto:contact@sitcon.org"><span>企業合作</span></a>
        </div>
    </div>
</template>

<style lang="scss">
@import '@/assets/scss/articleParagraph';
</style>

<script>
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})
export default class ArticleParagraph extends Vue {}
</script>
