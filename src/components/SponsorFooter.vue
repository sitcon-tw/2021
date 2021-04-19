<template>
    <div class="sponsor-footer">
        <img v-for="x in coOrg" :src="require(`../assets/images/sponsor/${x.logo}`)"/>
        <template v-for="x in sponsors">
            <img v-for="i in x.org" :src="require(`../assets/images/sponsor/${i.logo}`)"/>
        </template>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import sponsorInfo from '../../template/sponsor.json';

@Component({})
export default class SponsorFooter extends Vue {
  private coOrg = sponsorInfo.coOrg;
  private sponsors = sponsorInfo.sponsors;
}
</script>

<style lang="scss">
.sponsor-footer {
    padding: 100px;
    * {
        width: 150px;
        height: 100px;
        margin: 10px;
    }
}
</style>