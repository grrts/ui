<template>
    <div class="preview-view">
        <vertical-navigation variant="icon-text">
            <template #logo>
                <div style="width: 100%; text-align: center; color: var(--color-primary);">
                    <text-heading variant="small">
                        Components
                    </text-heading>
                </div>
            </template>
            <vertical-navigation-button :to="{ name: 'buttons' }" label="Buttons">
                <template #icon>
                    <svg-icon :icon="HandPointer" />
                </template>
            </vertical-navigation-button>
            <vertical-navigation-button :to="{ name: 'text' }" label="Text">
                <template #icon>
                    <svg-icon :icon="Text" />
                </template>
            </vertical-navigation-button>
            <vertical-navigation-button :to="{ name: 'card' }" label="Card">
                <template #icon>
                    <svg-icon :icon="Cards" />
                </template>
            </vertical-navigation-button>
        </vertical-navigation>
        <div class="preview-view__content">
            <router-view v-slot="{ Component }">
                <component v-if="Component" :is="Component" />
                <div v-else class="preview-view__overview">
                    <svg xmlns="http://www.w3.org/2000/svg" width="200" viewBox="0 0 40 40" fill="none">
                        <path d="M0 0H40V40H0V0Z" fill="#2A6F89"/>
                        <path d="M19.0654 4H25.1589V24.7263C25.1589 27.1834 24.7103 29.2502 23.8131 30.9268C22.9284 32.6034 21.6947 33.8681 20.1122 34.7209C18.5296 35.5736 16.6978 36 14.6168 36C12.5234 36 10.6791 35.5736 9.08411 34.7209C7.50156 33.8681 6.25545 32.6034 5.34579 30.9268C4.4486 29.2502 4 27.1834 4 24.7263V4H10.1122V24.7263C10.1122 26.0849 10.2866 27.1978 10.6355 28.065C10.9969 28.9178 11.514 29.5465 12.1869 29.9512C12.8598 30.3415 13.6698 30.5366 14.6168 30.5366C15.5639 30.5366 16.3676 30.3415 17.028 29.9512C17.7009 29.5465 18.2056 28.9178 18.5421 28.065C18.891 27.1978 19.0654 26.0849 19.0654 24.7263V4Z" fill="white"/>
                        <path d="M36 12.5V35.5664H29.9252V12.5H36Z" fill="white"/>
                        <path d="M36 4V9.5L25.1589 9.5V4L36 4Z" fill="white"/>
                    </svg>

                    <h1>Component guide</h1>
                    <p>Choose a component in the navigation rail to read more about it</p>
                </div>
            </router-view>
        </div>
    </div>
</template>

<script setup lang="ts">
import Text from '@grrts/icons/icon/fontawesome/v6/solid/text.svg'
import Cards from '@grrts/icons/icon/fontawesome/v6/solid/cards.svg'
import HandPointer from '@grrts/icons/icon/fontawesome/v6/solid/hand-pointer.svg'
import VerticalNavigation from '@/exports/interface/navigation/VerticalNavigation.vue'
import VerticalNavigationButton from '@/exports/interface/navigation/VerticalNavigationButton.vue'
import SvgIcon from '@/exports/services/icon/components/SvgIcon.vue'
import TextHeading from '@/exports/interface/text/TextHeading.vue'
</script>

<style lang="scss" scoped>
    .preview-view {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: flex-start;

        &__content {
            width: 100%;
            height: 100%;
            box-sizing: border-box;
            padding: var(--size-lg);
            overflow-y: scroll;
        }

        &__overview {
            padding-top: var(--size-lg);
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: flex-start;
            align-content: center;
            justify-items: center;
            align-items: center;
            flex-direction: column;

            & > h1 {
                color: var(--color-primary);
            }
        }
    }
</style>
