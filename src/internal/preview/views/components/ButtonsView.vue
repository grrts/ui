<template>
    <card-blank class="view">
        <component-preview v-bind="previewProps">
            <template #default>
                <text-heading>
                    Button Style Variants
                </text-heading>
                <text-paragraph>
                    Buttons come in different styles to show importance. Solid buttons are bold for main actions, outline buttons are bordered for secondary actions, and text buttons are minimal for low-priority options. Elevated and tonal variants offer subtle emphasis with shadows or soft backgrounds.
                </text-paragraph>
            </template>
            <template #config="{ changeData }">
                <label>
                    active:
                    <input
                        type="checkbox"
                        v-model="active"
                        @update:model-value="changeData({ active })"
                    />
                </label>

                <label>
                    color:
                    <input
                        type="text"
                        v-model="color"
                        @update:model-value="changeData({ color })"
                    />
                </label>
                <label>
                    hover color:
                    <input
                        type="text"
                        v-model="hoverColor"
                        @update:model-value="changeData({ hoverColor })"
                    />
                </label>
            </template>
        </component-preview>
    </card-blank>
</template>

<script setup lang="ts">
import CardBlank from '@/exports/interface/card/CardBlank.vue'
import ButtonBlock from '@/exports/interface/button/ButtonBlock.vue'
import ComponentPreview from '@/internal/preview/components/ComponentPreview.vue'
import { ref } from 'vue'
import TextHeading from '@/exports/interface/text/TextHeading.vue'
import TextParagraph from '@/exports/interface/text/TextParagraph.vue'

const previewProps = {
    variants: ['solid', 'outline'],
    componentsUsed: {
        ButtonBlock
    },
    data: {
        variant: 'solid'
    },
    template: `
<button-block v-bind="data">
    This is a test button
</button-block>
    `,
};

const active = ref(false);
const color = ref('var(--color-primary)');
const hoverColor = ref('var(--color-primary-hover)');
</script>

<style scoped lang="scss">
    .view {
        justify-self: center;
        max-width: 1024px;
    }
</style>
