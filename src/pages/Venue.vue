<template>
    <WIP></WIP>
</template>
<script>
import { Component, Prop, Vue } from 'vue-property-decorator';

import WIP from '@/components/WIP.vue';

@Component({
    components: {
        WIP
    }
})
export default class Venue extends Vue {}
</script>
