<template>
    <router-link :to="to" class="text-link-button">
        <span>
            <slot />
        </span>
        <right-arrow />
    </router-link>
</template>

<script setup lang="ts">
    import { type RouteLocationNamedRaw, RouterLink } from 'vue-router'
    import RightArrow from '@grrts/icons/icon/fontawesome/v6/regular/arrow-right.svg';

    defineProps<{
        to: RouteLocationNamedRaw,
    }>()
</script>

<style scoped lang="scss">
    .text-link-button {
        position: relative;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        height: var(--size-md);
        text-decoration: none;
        color: var(--color-primary);
        gap: 4px;

        &:visited,
        &:hover {
            color: var(--color-primary);
        }

        &.router-link-exact-active {
            //TODO
        }

        & > svg {
              max-width: var(--size-sm);
              max-height: var(--size-sm);
              min-width: var(--size-sm);
              min-height: var(--size-sm);
          }

        & > span {
            white-space: nowrap;
        }

        &:hover {
            & > svg {
                transform: translateX(2px);
            }

            & > span {
                text-decoration: underline;
            }
        }
    }
</style>
