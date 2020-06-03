<template>
    <div class="root">
        <markdown-viewer :source="content"></markdown-viewer>
    </div>
</template>

<script>
    import MarkdownViewer from "../markdown/MarkdownViewer";

    export default {
        name: "PostDetailContent",
        props: ['content'],
        components: {
            MarkdownViewer,
        },
    }
</script>

<style scoped lang="scss">
    .root {}
</style>