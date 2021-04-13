<template>
    <div id="team">
        <article class="introuct">
        </article>
        <article class="team_list">
            <section v-for="group in team" class="group">
                <h1>{{group.name}}</h1>
                <p>{{group.intro}}</p>
                 <img
                    class="group-img"
                    src="~@/assets/images/teams/dev.svg"
                />
                <div class="group-members">
                    <div v-for="member in group.member" class="group-member">
                        <img :src="`https://www.gravatar.com/avatar/${member.mailHash}?s=320`" class="member-icon"/>
                        <span class="group-member-text name">{{member.name}}</span>
                        <span class="group-member-text type">{{member.type}}</span>
                    </div>
                </div>
            </section>
        </article>
    </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import team from '@/../public/json/team.json';

import WIP from '@/components/WIP.vue';

@Component({
    components: {
        WIP
    }
})
export default class Team extends Vue {
    private team = team;
}
</script>
<style lang="scss">
@import '@/assets/scss/team';
</style>
