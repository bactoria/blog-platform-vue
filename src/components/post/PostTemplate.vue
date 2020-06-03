<template>
    <div class="root">
        <div class="post" v-for="post in posts" @click="postDetail(post.postId)">
            <PostCard :post="post"> </PostCard>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from "vuex";
    import PostCard from "./PostCard";

    export default {
        name: "PostTemplate",
        components: {PostCard},
        computed: {
           ...mapGetters([
               'posts'
           ])
        },
        methods: {
            ...mapActions({
                fetchPosts: 'FETCH_POSTS',
            }),
            postDetail(postId) {
                this.$router.push('/post/' + postId)
            },
        },
        mounted() {
            this.fetchPosts()
        },
    }
</script>

<style scoped>
    @import '/src/style/markdown-custom.scss';

    .post {
        padding: 3vh;
    }

    .post:nth-last-child(1) {
        margin-bottom: 0;
    }

    .root {
        background-color: rgb(246,248,250);
    }
</style>