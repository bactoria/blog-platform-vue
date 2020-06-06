<template>
    <div>
        <PostDetailTitle :title="post.title"></PostDetailTitle>
        <PostDetailWriter :username="post.writerUsername" :writerId="post.writerId" :writerImageUrl="post.writerImageUrl" :postcreatedDate="post.createdDate"></PostDetailWriter>
        <PostDetailContent :content="post.content"></PostDetailContent>
    </div>
</template>

<script>
    import {mapActions} from "vuex";
    import PostDetailTitle from "./PostDetailTitle";
    import PostDetailContent from "./PostDetailContent";
    import PostDetailWriter from "./PostDetailWriter";

    export default {
        name: "PostDetailTemplate",
        components: {PostDetailWriter, PostDetailContent, PostDetailTitle},
        data() {
            return {
                post: {}
            }
        },
        mounted() {
            const postId = this.$route.params.postId
            this.fetchPostDetail(postId)
                .then(({data}) => {
                    this.post = data
                })
        },
        methods: {
            ...mapActions({
                fetchPostDetail: 'FETCH_POST_DETAIL',
            }),
        }
    }
</script>

<style scoped>

</style>