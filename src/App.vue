<template>
	<div
		id="app"
		:class="
			$route.name === 'CFP' ||
			$route.name === 'ocfp-news' ||
			$route.name === 'news'
				? ''
				: 'main-bg'
		"
	>
		<Header v-if="isRoot()" v-bind:route="$route" />
		<router-view />
		<FooterPrimary v-if="isRoot()" v-bind:route="$route" />
		<FooterSecondary v-if="!isRoot()" v-bind:route="$route" />
	</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import { Action, Getter } from 'vuex-class';

import { DeviceType } from '@/store/types/app';

// components
import Header from '@/components/Header.vue';
import FooterSecondary from '@/components/FooterSecondary.vue';
import FooterPrimary from '@/components/FooterPrimary.vue';

@Component({
	components: {
		Header,
		FooterPrimary,
		FooterSecondary
	}
})
export default class App extends Vue {
	@Action('toggleDevice', { namespace: 'app' }) private toggleDevice!: (
		device: DeviceType
	) => void;
	@Getter('device', { namespace: 'app' }) private device!: DeviceType;
	private deviceTypeMediaQuery: MediaQueryList = window.matchMedia(
		'(min-width: 900px)'
	);

	public mounted() {
		this.detectDeviceType(this.deviceTypeMediaQuery);

		// add change listener instead of resize listener
		if (this.deviceTypeMediaQuery.addEventListener) {
			this.deviceTypeMediaQuery.addEventListener(
				'change',
				this.detectDeviceType
			);
		} else {
			// sad safari
			this.deviceTypeMediaQuery.addListener(this.detectDeviceType);
		}
	}

	public isRoot(): boolean {
		if (
			this.$route.name === 'CFP' ||
			this.$route.name === 'news' ||
			this.$route.name === 'ocfp-news'
		) {
			return false;
		} else {
			return true;
		}
	}

	private detectDeviceType(mq: MediaQueryList | MediaQueryListEvent): void {
		const isDesktop: boolean = mq.matches;

		if (isDesktop) {
			this.toggleDevice(DeviceType.DESKTOP);
		} else {
			this.toggleDevice(DeviceType.MOBILE);
		}
	}
}
</script>
<style lang="scss">
@import '@/assets/scss/main.scss';
</style>
