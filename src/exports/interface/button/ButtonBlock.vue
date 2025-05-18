<template>
    <button
        type="button"
        :class="{
            'button-default': true,
            'button-default--active': props.active,
            [`button-default--${variant}`]: true,
        }"
        :style="{
            '--button-color': color,
            '--button-hover-color': hoverColor,
        }"
    >
        <slot />
    </button>
</template>

<script setup lang="ts">
    import Color, { type ColorType } from '@/exports/services/helper/Color.ts'

    const props = withDefaults(defineProps<{
        variant?: 'solid' | 'outline'
        active?: boolean
        color?: ColorType
        hoverColor?: ColorType
    }>(), {
        variant: 'solid',
        active: false,
        color: Color('primary'),
        hoverColor: Color('primary-hover'),
    });
</script>

<style scoped lang="scss">
    .button-default {
        position: relative;
        border: 0;
        background-color: transparent;
        padding: 0;
        margin: 0;
        box-sizing: content-box;
        cursor: pointer;
        font-weight: var(--font-weight--medium);
        font-size: .8rem;

        &--solid {
            background-color: var(--button-color);
            height: calc(var(--size-md) - 2px);
            padding: var(--size-xs) var(--size-sm);
            color: var(--color-white);
            border-radius: var(--size-xs);
            border: 1px solid var(--button-color);

            &:before{
                position: absolute;
                content: '';
                bottom: var(--size-xs);
                left: 50%;
                transform: translateX(-50%);
                height: 1px;
                width: 0;
                background-color: var(--color-white);
                transition: width 0.1s;
            }

            &:hover {
                background-color: var(--button-hover-color);
                border-color: var(--button-hover-color);

                &:before {
                    width: calc(100% - var(--size-md));
                }
            }

            &.button-default--active:before {
                width: calc(100% - var(--size-md));
            }
        }

        &--outline {
            border: 2px solid var(--button-color);
            height: calc(var(--size-md) - 4px);
            padding: var(--size-xs) var(--size-sm);
            color: var(--button-color);
            border-radius: var(--size-xs);

            &:before{
                position: absolute;
                content: '';
                bottom: var(--size-xs);
                left: 50%;
                transform: translateX(-50%);
                height: 1px;
                width: 0;
                background-color: var(--button-color);
                transition: width 0.1s;
            }

            &:hover {
                color: var(--button-hover-color);
                border: 2px solid  var(--button-hover-color);

                &:before {
                    background-color: var(--button-hover-color);
                    width: calc(100% - var(--size-md));
                }
            }

            &.button-default--active:before {
                width: calc(100% - var(--size-md));
            }
        }
    }
</style>
