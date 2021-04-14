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
                    :src="require(`../assets/images/teams/${getTeamImg(group.name)}.svg`)"
                />
                <div class="group-members">
                    <div v-for="member in group.member" class="group-member">
                        <img :src="`https://www.gravatar.com/avatar/${member.mailHash}?s=320&d=https://sitcon.org/2021/img/404.svg&r=g`" class="member-icon"/>
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

    private getTeamImg (name: string): string {
        switch (name) {
            case '總召組':
                return 'gen';
            case '行政組':
                return 'admin';
            case '議程組':
                return 'agenda';
            case '議程助理':
                return 'agenda';
            case '行銷組':
                return 'pr';
            case '場務組':
                return 'service';
            case '文創組':
                return 'design';
            case '財務組':
                return 'fin';
            case '開發組':
                return 'dev';
            case '編輯組':
                return 'edit';
            case '攝影組':
                return 'photo';
            default:
                return 'dev';
        }
    }
}
</script>
<style lang="scss">
@import '@/assets/scss/team';
</style>
