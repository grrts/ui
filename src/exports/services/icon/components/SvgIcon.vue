<template>
    <component
        :is="icon"
        :class="{
            'svg-icon': true,
            [`svg-icon--size-${size}`]: true,
        }"/>
</template>

<script setup lang="ts">
    withDefaults(defineProps<{
        icon: any,
        size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl',
    }>(), {
        size: 'sm'
    });
</script>

<style scoped lang="scss">
    .svg-icon {
        display: block;
        fill: currentColor;

        &--size-xs {
            width: 12px;
            height: 12px;
        }
        &--size-sm {
            width: 16px;
            height: 16px;
        }
        &--size-md {
            width: 24px;
            height: 24px;
        }
        &--size-lg {
            width: 36px;
            height: 36px;
        }
        &--size-xl {
            width: 48px;
            height: 48px;
        }
    }
</style>
