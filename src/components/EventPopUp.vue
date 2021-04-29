<template>
    <div class="main container">
        {{ event.name }}
        {{ event.icon }}
    </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { ConfEvent } from '@/store/types/app';

import EventData from '@/../public/json/event.json';

@Component({})
export default class EventPopUp extends Vue {
    @Prop() private event!: ConfEvent;

    private eventData = EventData;
}
</script>
<style lang="scss">
@import '@/assets/scss/eventpopup';
</style>