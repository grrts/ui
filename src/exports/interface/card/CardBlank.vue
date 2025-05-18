<template>
    <div class="card-blank">
        <slot/>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
    .card-blank {
        border-radius: var(--size-xs);
        background-color: var(--color-white);
        overflow: hidden;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 0px 5px;
        border-right: 1px solid var(--color-clouds-500);
    }
</style>
