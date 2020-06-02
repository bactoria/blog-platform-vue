<template>
    <div class="root">
        <div class="title">
            {{title}}
        </div>
    </div>
</template>

<script>
    export default {
        name: "PostDetailTitle",
        props: ['title'],
    }
</script>

<style scoped>
    .root {}
    .title {
        font-size: 3.5em;
        font-weight: bolder;
        padding: 2em;
    }

</style>