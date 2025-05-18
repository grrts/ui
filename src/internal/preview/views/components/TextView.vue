<template>
    <card-blank class="view">
        <component-preview v-bind="textHeadingProps">
            <template #default>
                <text-heading>
                    Text headings
                </text-heading>
                <text-paragraph>
                    Headings come in several different sizes. In normal html you will have to keep tab of which h1,h2,h3,h4 you should use.<br>
                    This library calculates the nesting itself!<br>
                </text-paragraph>
            </template>
            <template #config="{ changeData }">
                <label>
                    color:
                    <input
                        type="text"
                        v-model="color"
                        @update:model-value="changeData({ color })"
                    />
                </label>
            </template>
        </component-preview>
    </card-blank>

    <card-blank class="view">
        <component-preview v-bind="textParagraphProps">
            <template #default>
                <text-heading>
                    Text paragraphs
                </text-heading>
                <text-paragraph>
                    Every application has paragraphs with content in it, this component makes sure the correct styling is applied to most of html inside.<br>
                    Also, when using multiple it spaces itself accordingly :D
                </text-paragraph>
            </template>
        </component-preview>
    </card-blank>
</template>

<script setup lang="ts">
import CardBlank from '@/exports/interface/card/CardBlank.vue'
import ComponentPreview from '@/internal/preview/components/ComponentPreview.vue'
import { ref } from 'vue'
import TextHeading from '@/exports/interface/text/TextHeading.vue'
import TextParagraph from '@/exports/interface/text/TextParagraph.vue'

const textHeadingProps = {
    variants: ['small', 'medium', 'large'],
    componentsUsed: {
        TextHeading
    },
    data: {
        variant: 'medium'
    },
    template: `
        <text-heading v-bind="data">
            This is a heading
        </text-heading>
    `,
}

const textParagraphProps = {
    variants: undefined,
    componentsUsed: {
        TextParagraph
    },
    data: {},
    template: `
        <text-paragraph v-bind="data">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </text-paragraph>
    `,
}

const color = ref('var(--color-primary)');
</script>

<style scoped lang="scss">
    .view {
        justify-self: center;
        max-width: 1024px;
        margin-bottom: var(--size-lg);
    }
</style>
