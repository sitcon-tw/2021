<template>
    <div>
        <!-- 重要時程 -->
        <section id="schedule">
            <h1>重要時程</h1>
            <ul>
                <li>3 月上旬第一階段審稿結束，公告入選結果並開始收取第二階段補充資料</li>
                <li>3 月下旬第二階段補充資料截止收取</li>
                <li>4 月中旬第二階段審稿結束，隨後公佈完整議程</li>
                <li>2021/05/29（六）SITCON 2021</li>
            </ul>
        </section>
        <!-- 重要時程 -->
        <!-- 投稿主題範例 -->
        <section id="example">
            <article id="theme-example">
                <h1>投稿主題範例</h1>
                <p>SITCON 作為學生展現自己的舞台，我們特別期待以學生為主體的稿件，例如：從學生角度出發的經驗分享、技術分享，專題研究成果、獨立研究甘苦談，或探討學生相關議題等等。</p>
                <p>除此之外，任何與資訊科技、電腦技術相關的講題，也都歡迎投稿！以下為幾個我們最近覺得有趣、和時事相關的主題範疇，可作為主題發想的靈感來源，提供給您參考：</p>
                    <!-- there is a object arr named 'themeExample', each object have two value ie. title and content -->
                <div class="theme container">
                    <Topic v-for="theme in themeExample" :topic="theme.title" :description="theme.context" :key="theme.title" />
                </div>
            </article>
            <p>
                除此之外，您也可以透過參與投稿者小聚或前往 SITCON 歷年網站（<a href="https://sitcon.org/2013" rel="noopener">2013</a>、<a href="https://sitcon.org/2014" rel="noopener">2014</a>、<a href="https://sitcon.org/2015" rel="noopener">2015</a>、<a href="https://sitcon.org/2016" rel="noopener">2016</a>、<a href="https://sitcon.org/2017" rel="noopener">2017</a>、<a href="https://sitcon.org/2018" rel="noopener">2018</a>、<a href="https://sitcon.org/2019" rel="noopener">2019</a>、<a href="https://sitcon.org/2020" rel="noopener">2020</a>）查看過去的議程。
                <br>以下是我們以往的熱門議程，提供給您參考：
            </p>
            <article id="presentation-example">
                <h2>Presentation</h2>
                <p>Presentation 包含完整 30 分鐘的議程與 10 分鐘的問答時間，共 40 分鐘，讓您有充分的時間展示想法、描述經歷、和與會者交流。</p>
                    <!-- there is a object arr name 'presentation', each object have 'title' 'ytLink' 'introdLink' 'img' -->
                <div class="agenda card container">
                    <AgendaCard v-for="agenda in presentation" v-bind="agenda" :key="agenda.title" />
                </div>
            </article>
            <article id="espresso-example">
                <h2>Espresso</h2>
                <p>Espresso 僅有 10 分鐘，挑戰最為濃縮與精華的議程，為與會者帶來短而精緻的知識洗禮。</p>
                    <!-- there is a object arr name 'espresso', each object have 'title' 'ytLink' 'introdLink' 'img' -->
                <div class="agenda card container">
                    <AgendaCard v-for="agenda in espresso" v-bind="agenda" :key="agenda.title" />
                </div>
            </article>
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
import AgendaCard from './AgendaCard.vue';
import Topic from './Topic.vue';

// import data
import themeExample from '../../../template/themeExample.cfp';
import espresso from '../../../template/espresso.cfp';
import presentation from '../../../template/presentation.cfp';

@Component({
    components: {
        AgendaCard,
        Topic
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