<template>
    <router-link :to="to" class="vertical-navigation-button vertical-navigation-button--variant-button" :title="label">
        <span class="vertical-navigation-button__icon">
            <slot name="icon" />
        </span>
        <span class="vertical-navigation-button__label" v-if="verticalNavigationVariant === 'icon-text'">
            <slot>{{ label }}</slot>
        </span>
    </router-link>
</template>

<script setup lang="ts">
    import { type RouteLocationNamedRaw, RouterLink } from 'vue-router'
    import { inject } from 'vue'

    withDefaults(defineProps<{
        to: RouteLocationNamedRaw,
        variant?: 'button',
        label?: string,
    }>(), {
        variant: 'button'
    });

    const verticalNavigationVariant = inject('verticalNavigationVariant');
</script>

<style scoped lang="scss">
    .vertical-navigation-button {
        text-decoration: none;
        color: var(--color-text);

        &--variant-button {
            width: 100%;
            height: 40px;
            display: flex;
            color: var(--color-primary);
            padding: 0 var(--size-xs);
            box-sizing: border-box;

            &:has(.vertical-navigation-button__label) {
                padding: 0 var(--size-sm);
            }

            .vertical-navigation-button__icon {
                height: 100%;
                width: 40px;
                display: flex;
                align-items: center;
                align-content: center;
                justify-content: center;
                justify-items: center;
                border: 0px solid var(--color-primary);
                box-sizing: border-box;

                border-radius: var(--size-xs);

                &:has(+ .vertical-navigation-button__label) {
                    border-right: 0;
                    border-top-right-radius: 0;
                    border-bottom-right-radius: 0;
                }
            }

            .vertical-navigation-button__icon + .vertical-navigation-button__label {
                height: 100%;
                width: calc(100% - 35px);
                display: flex;
                align-items: center;
                justify-items: flex-start;
                box-sizing: border-box;
                font-size: .9rem;
                font-weight: var(--font-weight--semibold);
                border: 0px solid var(--color-primary);
                border-left: 0;

                border-radius: var(--size-xs);
                border-bottom-left-radius: 0;
                border-top-left-radius: 0;
            }

            &:hover {
                color: var(--color-primary-hover);

                .vertical-navigation-button__icon {
                    border-width: 1px;
                    background-color: var(--color-clouds);
                    border-color: var(--color-primary-hover);

                    & > * {
                        transform: scale(1.05);
                    }
                }

                .vertical-navigation-button__label {
                    border-color: var(--color-primary-hover);
                    border-width: 1px;
                    background-color: var(--color-clouds);
                }
            }

            &.router-link-exact-active,
            &.router-link-active {
                .vertical-navigation-button__icon {
                    border-width: 1px;
                }

                .vertical-navigation-button__label {
                    border-width: 1px;
                }
            }
        }
    }
</style>
