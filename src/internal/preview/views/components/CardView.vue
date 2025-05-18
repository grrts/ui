<template>
    <card-blank class="view">
        <component-preview v-bind="textHeadingProps">
            <template #default>
                <text-heading>
                    Card blank
                </text-heading>
                <text-paragraph>
                    Your basic go to container, fits for most of your needs!<br><br>
                    Doesn't style any of the content, just gives you a good basic container :)
                </text-paragraph>
            </template>
        </component-preview>
    </card-blank>
</template>

<script setup lang="ts">
import CardBlank from '@/exports/interface/card/CardBlank.vue'
import ComponentPreview from '@/internal/preview/components/ComponentPreview.vue'
import TextHeading from '@/exports/interface/text/TextHeading.vue'
import TextParagraph from '@/exports/interface/text/TextParagraph.vue'

const textHeadingProps = {
    variants: undefined,
    componentsUsed: {
        CardBlank
    },
    data: {
    },
    template: `
        <card-blank v-bind="data">
            <div style="padding:var(--size-md);">
                This is a card
            </div>
        </card-blank>
    `
}
</script>

<style scoped lang="scss">
.view {
    justify-self: center;
    max-width: 1024px;
    margin-bottom: var(--size-lg);
}
</style>
