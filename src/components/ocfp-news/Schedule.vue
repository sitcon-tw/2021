<template>
    <div>
        <Navbar />
        <!-- 重要時程 -->
        <section id="schedule">
            <h1>重要時程</h1>
            <ul>
                <li>2020/04/06（二）日出（早上 06:41）投稿截止</li>
                <li>3 月下旬第二階段補充資料截止收取</li>
                <li>預計於五月初公佈完整議程</li>
                <li>2021/05/29（六）SITCON 2021 年會</li>
            </ul>
        </section>
        <!-- 重要時程 -->
        <!-- 投稿主題範例 -->
        <section id="example">
            <article id="theme-example">
                <h1>投稿主題</h1>
                <p>延續著去年的熱潮，開放式議程將於 SITCON 2021 舉辦，期待藉由主講者及會眾的雙向資訊傳遞，激盪出熱烈的討論及更多的觀點。在開放式議程中，您可以舉辦一場精彩的議題探討，也可以集思廣益，解決學生在資訊界可能碰到的困難。任何形式的議程，都可以於開放式議程中實現。</p>
                <p>SITCON 作為學生展現自己的舞台，我們期待以學生為主體的投稿，以下提供幾種開放式議程形式範例 :</p>
                    <!-- there is a object arr named 'themeExample', each object have two value ie. title and content -->
                <div class="theme container">
                    <Topic v-for="theme in themeExample" :topic="theme.title" :description="theme.context" :key="theme.title" />
                </div>
            </article>
            <p>
                除了以上範例，我們也非常歡迎其他形式的議程。
            </p>
        </section>
        <!-- 投稿主題範例 -->
        <!-- Code of Conduct -->
        <section id="code-of-conduct">
            <h1>Code of Conduct</h1>
            <p>SITCON 歡迎不同身分、來自不同背景的與會者，也非常鼓勵女性、性少數與多元背景的參與者。為了讓大家都能愉快的參加 SITCON，我們要求所有參與者閱讀年會的<a href="https://sitcon.org/code-of-conduct/" target="_blank" rel="noopener"><u>行為守則（Code of Conduct）</u></a>，共同創造一個友善的環境。</p>
        </section>
        <!-- Code of Conduct -->
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Topic from './Topic.vue';
import Navbar from './Navbar.vue';

// import data
import themeExample from '../../../template/themeExample.cfp';
import espresso from '../../../template/espresso.cfp';
import presentation from '../../../template/presentation.cfp';

@Component({
    components: {
        Topic,
        Navbar
    }
})
export default class Schedule extends Vue {
    private themeExample = themeExample;
    private espresso = espresso;
    private presentation = presentation;
}
</script>

<style lang="scss">
@import '@/assets/scss/news/schedule';
</style>