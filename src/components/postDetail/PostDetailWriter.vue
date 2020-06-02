<template>
    <div class="root">
        작성자: {{username}}
    </div>
</template>

<script>
    export default {
        name: "PostDetailWriter",
        props: ['username', 'writerId']
    }
</script>

<style scoped>
    .root {
        text-align: right;
        font-size: 1.5em;
    }
</style>