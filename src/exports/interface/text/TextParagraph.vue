<template>
    <p class="text-paragraph">
        <slot />
    </p>
</template>

<script setup lang="ts">
</script>

<style lang="scss">
    .text-paragraph {
        font-size: .9rem;
        color: var(--color-text);
        margin:0;

        & > ul {
            margin: 0;
            padding-left: var(--size-md);
        }
    }
</style>
