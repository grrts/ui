<template>
    <component
        :is="component"
        :class="{
            'text-heading': true,
            [`text-heading--variant-${variant}`]: true,
        }"
        :style="{
            color,
        }"
    >
        <slot />
    </component>
</template>

<script setup lang="ts">
import { computed, inject, provide } from 'vue'
import Color, { type ColorType } from '@/exports/services/helper/Color.ts'

    withDefaults(defineProps<{
        variant?: 'small' | 'medium' | 'large'
        color?: ColorType
    }>(), {
        variant: 'medium',
        color: Color('wet-asphalt-500'),
    });

    const lastHeadingLevel = inject<number>('last-heading-level', null);

    const localHeadingLevel = computed(() => !lastHeadingLevel ? 1 : lastHeadingLevel + 1);
    const component = computed(() => `h${localHeadingLevel.value}`);

    provide('last-heading-level', localHeadingLevel.value)
</script>

<style lang="scss">
    .text-heading {
        color: var(--color-text);
        margin:0;
        font-weight: var(--font-weight--semibold);

        &--variant-small {
            font-size: 1.2rem;
        }
        &--variant-medium {
            font-size: 1.4rem;
        }
        &--variant-large {
            font-size: 1.8rem;
        }

        & + .text-paragraph {
            margin-top: var(--size-sm);
        }
    }
</style>
