<template>
    <div class="wrapper">
        <SimpleLine></SimpleLine>
        <div class="card">
        <div class="title">
            제목 : {{post.title}}
        </div>
        <SimpleLine></SimpleLine>
        </div>
    </div>
</template>

<script>
    import SimpleLine from "../common/line/SimpleLine";
    export default {
        name: "PostCard",
        components: {SimpleLine},
        props: ['post']
    }
</script>

<style scoped>
    .title {
        padding: 30px 0;
    }

    .wrapper {
    }

    .card {
        background-color: rgb(253,253,253);
        border: 1px solid whitesmoke;
        border-radius: 10px;
    }
</style>