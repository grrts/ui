<template>
    <div class="code-block">
        <div v-if="language" class="code-block__language">
            {{ language }}
        </div>
        <pre><code v-for="(line, index) in formattedCode.split('\n')" :key="index">{{ line }}</code></pre>
    </div>
</template>

<script setup lang="ts">
    import { onMounted, ref, watch } from 'vue'
    import * as prettier from "@/exports/services/prettier/prettier.mjs";
    import * as prettierPluginHtml from "@/exports/services/prettier/plugins/html.mjs";

    const props = defineProps<{
        code: string
        language?: string
    }>();

    const formattedCode = ref(props.code);

    const formatCode = async () => {
        const formattableLanguages = ['html', 'vuejs'];

        if (props.language && formattableLanguages.includes(props.language.toLowerCase())) {

            formattedCode.value = await prettier.format(props.code, {
                parser: 'html',
                plugins: [prettierPluginHtml],
                singleAttributePerLine: true,
                htmlWhitespaceSensitivity: "strict",
                printWidth: 60,
                tabWidth: 4,
            });

            return;
        }

        formattedCode.value = props.code;
    };

    onMounted(formatCode);
    watch(props, formatCode, { deep: true });
</script>

<style scoped lang="scss">
    .code-block {
        position: relative;
        width: 100%;
        height: 100%;
        background-color: var(--color-wet-asphalt-900);
        color: var(--color-wet-asphalt-100);
        box-sizing: border-box;
        padding-right: var(--size-xl);
        border-radius: var(--size-xs);
        overflow: hidden;

        &__language {
            position: absolute;
            right: var(--size-sm);
            top: var(--size-sm);
            background-color: var(--color-wet-asphalt-600);
            padding: var(--size-xs);
            font-size: .8rem;
            font-weight: bold;
            color: var(--color-orange-500);
            border-radius: var(--size-xs);
        }

        & > pre {
            font-family: "Roboto", sans-serif;
            padding: var(--size-sm);
            width: 100%;
            margin: 0;
            display: flex;
            flex-direction: column;

            white-space: pre-wrap;

            &:before {
                counter-reset: listing;
            }

            & > code {
                position: relative;
                padding-left: var(--size-lg);
                font-family: Consolas,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New, serif;
                width: 100%;
                counter-increment: listing;
                box-sizing: border-box;
                min-height: var(--size-md);

                &:before {
                    position: absolute;
                    left:0;
                    width: 30px;
                    font-weight: bold;
                    color: var(--color-turquoise-800);
                    border-right: 2px solid var(--color-wet-asphalt-600);
                    content: counter(listing) ". ";
                    min-height: var(--size-md);
                }
            }
        }
    }
</style>
