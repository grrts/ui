<template>
    <div class="component-preview">
        <div class="component-preview__head">
            <slot />
        </div>
        <div v-if="props.variants" class="component-preview__variant-bar">
            <span>
                Variants
            </span>

            <button-block
                v-for="variant in variants"
                :key="variant"
                type="button"
                :active="localData?.variant === variant"
                @click="changeData({ variant: variant })"
            >
                {{ variant.substring(0, 1).toUpperCase() }}{{ variant.substring(1) }}
            </button-block>
        </div>
        <div :id="id" class="component-preview__body" />
        <div class="component-preview__config" v-if="$slots.config">
            <slot name="config" v-bind="{ changeData }" />
        </div>
        <div v-if="template" class="component-preview__code">
            <code-block :code="parseTemplateAsCode()" language="VueJS" />
        </div>
    </div>
</template>

<script setup lang="ts">
import ButtonBlock from '@/exports/interface/button/ButtonBlock.vue'
import {
    onMounted,
    ref,
    createApp,
    type App
} from 'vue'
import CodeBlock from '@/exports/interface/code/CodeBlock.vue'
import { v4 } from 'uuid'

const props = defineProps<{
    template: string
    componentsUsed: Record<string, any>
    data: Record<string, any>;
    variants?: string[];
}>()

const id = 'component-preview-' + v4()
const app = ref<App>()
const localData = ref<Record<string, any>>()

onMounted(() => {
    localData.value = props.data

    makeApp()
})

function kebabize(str: string): string {
    return str.replace(/[A-Z]+(?![a-z])|[A-Z]/g, ($, ofs) => (ofs ? '-' : '') + $.toLowerCase())
}

function parseTemplateAsCode(): string {
    if (!localData.value) {
        return ''
    }

    let localTemplate = props.template
    let propsString = ''

    Object.keys(localData.value).forEach((key: string, index: number) => {
        if (!localData.value) {
            return
        }

        const value = Object.values(localData.value)[index]

        if (value !== false) {
            propsString += `${kebabize(key)}="${value}" `
        }
    })

    localTemplate = localTemplate.replace(`v-bind="data"`, propsString)

    return localTemplate
}


function changeData(data: Record<string, any>): void {
    if (app.value) {
        app.value.unmount()
    }

    localData.value = {
        ...localData.value,
        ...data
    }

    makeApp()
}

function makeApp() {
    app.value = createApp({
        template: props.template,
        components: props.componentsUsed,
        data: () => ({
            data: localData.value
        })
    })

    app.value.mount('#' + id)
}

</script>

<style scoped lang="scss">
.component-preview {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    box-sizing: border-box;
    gap-y: var(--size-sm);

    &__head {
        width: 100%;
        box-sizing: border-box;
        padding: var(--size-md);
    }

    &__variant-bar {
        display: flex;
        width: 100%;
        box-sizing: border-box;
        padding: var(--size-sm) var(--size-md);
        gap: var(--size-sm);
        align-items: center;

        border-top: 1px solid var(--color-clouds-600);

        & > span {
            font-size: .9rem;
            font-weight: bold;
            color: var(--color-wet-asphalt-300);
        }
    }

    &__body {
        display: flex;
        width: 100%;
        padding: var(--size-sm);
        box-sizing: border-box;
        border-top: 1px solid var(--color-clouds-600);
        background-color: var(--color-clouds-300);
        align-items: center;
        justify-content: center;
        min-height: 200px;

        &:has(+ .component-preview__config) {
            width: 70%;
        }
    }

    &__config {
        display: flex;
        flex-direction: column;
        width: 30%;
        box-sizing: border-box;
        padding: var(--size-sm);
        border-top: 1px solid var(--color-clouds-600);
        border-left: 1px solid var(--color-clouds-600);
    }

    &__code {
        border-radius: var(--size-xs);
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        width: 100%;
        box-sizing: border-box;
        overflow: hidden;
        padding: var(--size-sm);
        border-top: 1px solid var(--color-clouds-600);
    }
}
</style>
