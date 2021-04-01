<template>
	<div id="home" class="home">
		<section class="section-title">
			<div class="home__title">
				<div class="home__title-box1">
					<p>SITCON 學生計算機年會 2021</p>
				</div>
				<div class="home__title-topic">
					<img
						src="~@/assets/images/home/home-topic.svg"
						width="100%"
					/>
				</div>
				<div class="home__title-box2">
					<p class="home__title-box2--p1">
						05/29 • 中央研究院－人文社會科學館 •免費報名
					</p>
					<p class="home__title-box2--p2">
						05/29 <br /><br />
						中央研究院－人文社會科學館 •免費報名
					</p>
				</div>
			</div>
		</section>
		<section class="section-content">
			<section class="home__info">
				<div class="home__info-container">
					<div class="home__info-title home__info-title--1">
						<img
							class="home-squareImg"
							src="~@/assets/images/home/home-icon-square.svg"
						/>
						<h1>算盤的後裔</h1>
						<h2 class="home__info-title-h2--big">
							Descendants of the abacus
						</h2>
					</div>
					<div class="home__info-paragraph">
						<p>
							千年以前的人類，發明了各式各樣輔助算術的工具，在世界各地的文明中，皆能找到廣義上的「算盤」。隨著時代演進，那些原始的工具，逐步進化成為現代的計算機與電腦，更進一步地發展為隨處可見的智慧型裝置。
							<br />
							俗話說「站在巨人的肩膀上」，前人的智慧成果成為墊腳石，讓站在其之上的後人可以看得更高、更遠。科技層層疊疊、承先啟後，文明才能跨越時空持續成長。
							<br />
							<br />
							人們不再需要重新發明輪子，只要善用前人的成果，就能造出更有效率的工具，並擁有更好的生活。生於現代的我們，每天寫著電腦程式、把玩著智慧型手機、徜徉在網際網路上沒有邊際的資訊大海，奠基於科技的現有成果，才能持續貢獻於科技的未來。我們都是「算盤的後裔」。
						</p>
					</div>
				</div>
			</section>
			<section class="home__info">
				<div class="home__info-container">
					<div class="home__info-title home__info-title--2">
						<img
							class="home-appleImg"
							src="~@/assets/images/home/home-icon-apple.svg"
						/>
						<h1>關於 SITCON</h1>
						<h2 class="home__info-title-h2--small">
							Students' Information Technology Conference
						</h2>
					</div>
					<div class="home__info-paragraph">
						<p>
							學生計算機年會（SITCON）自 2013
							年發起，以學生為本、由學生自發舉辦，長期投身學生資訊教育與推廣開源精神，希望引領更多學子踏入資訊的殿堂，更冀望所有對資訊有興趣的學生，能夠在年會裏齊聚一堂，彼此激盪、傳承、啟發，達到「學以致用、教學相長」的實際展現。
						</p>
					</div>
				</div>
			</section>
			<section class="home__info">
				<div class="home__info-container">
					<div class="home__info-title">
						<h1>行為準則</h1>
						<h2 class="home__info-title-h2--mid">
							Code of Conduct
						</h2>
					</div>
					<div class="home__info-paragraph">
						<p>
							SITCON
							歡迎不同身分、來自不同背景的與會者，也非常鼓勵女性、性少數與多元背景的參與者。為了讓大家都能愉快的參加
							SITCON，我們要求所有參與者閱讀年會的<a href="https://sitcon.org/code-of-conduct/" target="_blank"
								>行為準則（Code of Conduct）</a
							>，共同創造一個友善的環境。
						</p>
					</div>
				</div>
			</section>
			<section class="home__info">
				<div class="home__info-container">
					<div class="home__info-title">
						<h1>參與討論</h1>
						<h2 class="home__info-title-h2--mid">
							Join the community
						</h2>
					</div>
					<div class="home__info-paragraph">
						<p>
							SITCON
							是個開放的社群，許多籌備的相關事項都會在公開的郵件論壇上進行討論，如果有興趣參與，歡迎訂閱
							SITCON 的郵件論壇並貢獻你的想法！
							<br />
							<br />
							若你想進一步了解過往討論的內容，也歡迎在 HackMD
							上查看 SITCON 2021 的會議記錄。
						</p>
					</div>
					<div class="home__info-buttonsBox">
						<a
							href="https://groups.google.com/g/sitcon-general"
							target="_blank"
							class="home-button"
							>郵件論壇</a
						>
						<a
							href="https://hackmd.io/@SITCON/SITCON2021"
							target="_blank_"
							class="home-button"
							>會議記錄</a
						>
					</div>
				</div>
			</section>
		</section>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  components: {}
})
export default class CFP extends Vue {
  @Prop() private msg!: string;
}
</script>

<style lang="scss">
@import '@/assets/scss/home/home';
</style>
