<template>
    <div id="wip">
        <img
      class="wip-dev-icon"
      src="~@/assets/images/teams/dev.svg"
    />
        <h1>施工中．．．</h1>
    </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component
export default class WIP extends Vue {

}
</script>
<style lang="scss">

$fontFamily: "Noto Serif CJK TC -Black";

#wip {
    width: 70%;
    margin: 150px auto;
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    .wip-dev-icon {
        width: 150px;
        margin: 20px 0;
    }
    h1 {
        font-size: 24pt;
        font-family: $fontFamily;
    }
}

</style>