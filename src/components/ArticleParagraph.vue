<template>
    <div class="ariticleParagraph-wraper">
        <div class="ariticleParagraph">
            <div class="ariticleParagraph__left">
                <img class="ariticleParagraph-arrow" src="@/assets/images/arrow-left-blue.svg" />
            </div>
            <div class="ariticleParagraph__mid">
                <div class="ariticleParagraph-content">
                   <slot/>
                </div>                
            </div>       
            <div class="ariticleParagraph__right">
                <img class="ariticleParagraph-arrow" src="@/assets/images/arrow-right-blue.svg" />
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import '@/assets/scss/articleParagraph';
</style>

<script>
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})
export default class ArticleParagraph extends Vue {}
</script>
