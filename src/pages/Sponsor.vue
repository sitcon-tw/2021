<template>
	<div id="sponsor">
		<section class="section-articleParagraph">
			<ArticleParagraph>
				<p>
					SITCON
					學生計算機年會為學生自發組成籌辦的研討會，秉持著以學生為主軸的核心價值，提供一個經驗交流與資訊技術實務分享的平台，進而達到「學以致用、教學相長」的目標。
				</p>
				<br />
				<p>
					維繫這樣的交流平台，需要多人的努力及貢獻，亦十分需要在資金上的支持。
				</p>
				<p>
					希望能藉由您的一份力量，來促成活動的舉行，讓更多學生能在舞台上展現自我成長。
				</p>
				<p>
					歡迎您參與贊助，支持
					SITCON、讓我們將每年的活動辦得盡善盡美！
				</p>
			</ArticleParagraph>

			<section class="section-sponsors">
				<div class="sponsors-wrapper">
					<div class="sponsors">
						<section class="sponsors__level">
							<div class="sponsors__level-title">
								<h1>主辦單位</h1>
								<img src="~@/assets/images/teams/dev.svg" />
							</div>
							<div
								class="sponsors__sponsorBox sponsors__sponsorBox--1"
							>
								<section class="sponsor">
									<div class="sponsor-name">
										<h2>{{ main.name }}</h2>
									</div>
									<img
										src="https://sitcon.org/branding/withname.svg"
										class="sponsor-img"
									/>
									<article class="sponsor-discription">
										<p>{{ main.description }}</p>
									</article>
								</section>
							</div>
						</section>
						<section class="sponsors__level">
							<div class="sponsors__level-title">
								<h1>共同主辦</h1>
								<img src="~@/assets/images/teams/dev.svg" />
							</div>
							<div class="sponsors__sponsorBox">
								<a v-for="x in coOrg" :href="x.link" class="coOrg">
									<div class="sponsor-name">
										<h2>{{ x.name }}</h2>
									</div>
									<img
										:src="
											require(`../assets/images/sponsor/${x.logo}`)
										"
										class="sponsor-img"
									/>
									<article class="sponsor-discription">
										<p>{{ x.description }}</p>
									</article>
								</a>
							</div>
						</section>
						<section
							class="sponsors__level"
							v-for="(s, index) in sponsers"
						>
							<div class="sponsors__level-title">
								<h1>{{ s.type }}</h1>
								<img src="~@/assets/images/teams/dev.svg" />
							</div>
							<div
								v-if="index == 0"
								class="sponsors__sponsorBox sponsors__sponsorBox--1"
							>
								<a
									class="sponsor"
									v-for="x in s.org"
									:id="x.id"
									:href="x.link"
								>
									<div class="sponsor-name">
										<h2>{{ x.name }}</h2>
									</div>
									<img
										:src="
											require(`../assets/images/sponsor/${x.logo}`)
										"
										class="sponsor-img"
									/>
									<article class="sponsor-discription">
										<p>{{ x.description }}</p>
									</article>
								</a>
							</div>
							<div v-if="index > 0" class="sponsors__sponsorBox">
								<a
									:id="x.id"
									class="sponsor"
									v-for="x in s.org"
									:style="
										`height: ${300 +
											(sponsers.length - index) * 75}px`
									"
									:href="x.link"
								>
									<div class="sponsor-name">
										<h2>{{ x.name }}</h2>
									</div>
									<img
										:src="
											require(`../assets/images/sponsor/${x.logo}`)
										"
										class="sponsor-img"
									/>
									<article class="sponsor-discription" v-if="x.description">
										<p>{{ x.description }}</p>
									</article>
								</a>
							</div>
						</section>
						<section
							class="sponsors__level"
							v-for="(s, index) in thanks"
						>
							<div class="sponsors__level-title">
								<h1>{{ s.type }}</h1>
								<img src="~@/assets/images/teams/dev.svg" />
							</div>
							<div class="sponsors__sponsorBox">
								<a
									:id="x.id"
									class="sponsor"
									v-for="x in s.org"
									style="height:300px"
									:href="x.link"
								>
									<div class="sponsor-name">
										<h2>{{ x.name }}</h2>
									</div>
									<img
										:src="
											require(`../assets/images/sponsor/${x.logo}`)
										"
										class="sponsor-img"
									/>
								</a>
							</div>
						</section>
					</div>
				</div>
			</section>
		</section>
	</div>
</template>

<style lang="scss">
@import '@/assets/scss/sponsor';
</style>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import ArticleParagraph from '../components/ArticleParagraph.vue';

import sponsorInfo from '../../template/sponsor.json';

@Component({
  components: {
    ArticleParagraph
  }
})
export default class Sponsor extends Vue {
  private main = sponsorInfo.main;
  private coOrg = sponsorInfo.coOrg;
  private sponsers = sponsorInfo.sponsors;
  private thanks = sponsorInfo.thanks;
}
</script>
