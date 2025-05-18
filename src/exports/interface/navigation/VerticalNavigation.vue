<template>
    <nav :class="componentClasses">
        <div class="vertical-navigation__header" v-if="$slots.logo">
            <slot name="logo" />
        </div>
        <div class="vertical-navigation__menu">
            <slot />
        </div>
        <button
            v-if="showSideButton"
            class="vertical-navigation__sidebutton"
            type="button"
            @click="$emit('sidebutton')"
        >
            <slot name="sidebutton">
                <left-arrow-svg v-if="variant === 'icon-text'" />
                <right-arrow-svg v-if="variant === 'icon'" />
            </slot>
        </button>
    </nav>
</template>

<script setup lang="ts">
    import { computed, provide, toRef } from 'vue'
    import LeftArrowSvg from '@grrts/icons/icon/fontawesome/v6/regular/arrow-left-to-bracket.svg';
    import RightArrowSvg from '@grrts/icons/icon/fontawesome/v6/regular/arrow-right-to-bracket.svg';

    const props = withDefaults(defineProps<{
        variant?: 'icon' | 'icon-text'
        gap?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'
        showSideButton?: boolean
    }>(), {
        variant: 'icon',
        gap: 'xs',
        showSideButton: false,
    });

    const componentClasses = computed(() => ({
        'vertical-navigation': true,
        [`vertical-navigation--variant-${props.variant}`]: true,
        [`vertical-navigation--gap-${props.gap}`]: true,
    }));

    provide('verticalNavigationVariant', toRef(() => props.variant));
</script>

<style scoped lang="scss">
    .vertical-navigation {
        height: 100%;
        transition: width .2s;
        position: relative;
        box-shadow: rgba(0, 0, 0, 0.03) 3px 1px 4px;

        &--gap-none .vertical-navigation__menu {
            gap: 0;
        }
        &--gap-xs .vertical-navigation__menu {
            gap: var(--size-xs);
        }
        &--gap-sm .vertical-navigation__menu {
            gap: var(--size-sm);
        }
        &--gap-md .vertical-navigation__menu {
            gap: var(--size-md);
        }
        &--gap-lg .vertical-navigation__menu {
            gap: var(--size-lg);
        }
        &--gap-xl .vertical-navigation__menu {
            gap: var(--size-xl);
        }

        &--variant-icon {
            display: flex;
            flex-direction: column;
            gap: var(--size-sm);
            width: 50px;
            background-color: var(--color-white);
            border-right: 1px solid var(--color-clouds-600);

            & .vertical-navigation__header {
                position: relative;
                display: flex;
                flex-direction: column;
                align-items: center;
                align-content: center;
                justify-content: center;
                padding: 5px;
                gap: 5px;
                box-sizing: border-box;

                & > svg {
                    max-width: 100% !important;
                }
            }

            & .vertical-navigation__menu {
                position: relative;
                display: flex;
                flex-direction: column;
                width: 100%;
                box-sizing: border-box;
            }
        }

        &--variant-icon-text {
            display: flex;
            flex-direction: column;
            width: 250px;
            background-color: var(--color-white);
            border-right: 1px solid var(--color-clouds-500);

            & .vertical-navigation__header {
                display: flex;
                align-items: center;
                align-content: center;
                justify-content: flex-start;
                padding: var(--size-sm) var(--size-sm) 0;
                gap: var(--size-sm);
                box-sizing: border-box;
            }

            & .vertical-navigation__menu {
                display: flex;
                flex-direction: column;
                width: 100%;
                box-sizing: border-box;
                padding-top: var(--size-sm);
            }
        }

        & .vertical-navigation__sidebutton {
            position: absolute;
            top: 70px;
            right: -8px;
            width: 8px;
            height: 35px;
            transition: width .1s, right .1s;
            cursor: pointer;
            border: 0;
            background-color: var(--color-primary);
            border-bottom-right-radius: var(--size-xs);
            border-top-right-radius: var(--size-xs);
            padding: 0;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1;

            & > svg {
                min-height: var(--size-md);
                min-width: var(--size-md);
                height: var(--size-md);
                width: var(--size-md);
                color: var(--color-white);
                opacity: 0;
                transition: opacity .2s;
            }

            &:hover {
                width: 35px;
                right: -35px;

                & > svg {
                    opacity: 1;
                }
            }
        }
    }
</style>
