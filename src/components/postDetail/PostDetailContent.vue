<template>
    <div class="root">
        <div class="content">
            <vue-markdown :source="content"></vue-markdown>
        </div>
    </div>
</template>

<script>
    import VueMarkdown from 'vue-markdown'

    export default {
        name: "PostDetailContent",
        props: ['content'],
        components: {
            VueMarkdown
        },
    }
</script>

<style scoped>
    .root {}
    .content {
        font-size: 1.5em;
        padding: 2em;
        text-align: left;
    }

</style>