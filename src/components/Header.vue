<template>
	<!-- <div id="topHeader" class="header"> -->
	<div id="topHeader" class="header header--sticky">
		<div class="header__left">
			<div class="header-logo">
				<a href="/2021/">
					<img
						src="~@/assets/images/home/home-headerIcon.svg"
						width="100%"
					/>
				</a>
			</div>
		</div>
		<div class="header__right">
			<div class="header-links">
				<ul>
					<li>
						<input
							type="radio"
							id="1"
							class="header-link__input"
							name="checlbox"
						/>
						<a
							href="/2021/agenda"
							v-bind:class="
								onRoute('Agenda') ? 'header-link--active' : ''
							"
							>議程與活動</a
						>
					</li>
					<li>
						<a
							href="/2021/traffic"
							v-bind:class="
								onRoute('Traffic') ? 'header-link--active' : ''
							"
							>交通方式</a
						>
					</li>
					<li>
						<a
							href="/2021/venue"
							v-bind:class="
								onRoute('Venue') ? 'header-link--active' : ''
							"
							>會場地圖</a
						>
					</li>
					<li>
						<a
							href="/2021/sponsor"
							v-bind:class="
								onRoute('Sponsor') ? 'header-link--active' : ''
							"
							>贊助資訊</a
						>
					</li>
					<li>
						<a
							href="/2021/team"
							v-bind:class="
								onRoute('Team') ? 'header-link--active' : ''
							"
							>籌備團隊</a
						>
					</li>
				</ul>
			</div>
			<div class="header-apply">
				<a
					href="https://sitcon.kktix.cc/events/sitcon2021"
					target="_blank"
				>
					報名去
				</a>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
	props: ['route']
})
export default class Header extends Vue {
	mounted() {
		console.log(this.$props.route.name);
	}
	public onRoute(routeName: String) {
		return this.$props.route.name === routeName ? true : false;
	}
}
</script>

<style lang="scss">
@import '@/assets/scss/header';
</style>
