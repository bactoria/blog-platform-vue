<template>
    <div class="root">
        <div class="container">
        <ProfileImage :src="writerImageUrl" size="100"/>

            <div class="container2">
                <div class="writer">
                    {{username}}
                </div>
                <div class="createdDate">
                    {{postcreatedDate}}
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    import ProfileImage from "../common/image/ProfileImage";
    export default {
        name: "PostDetailWriter",
        components: {ProfileImage},
        props: ['username', 'writerId', 'writerImageUrl', 'postcreatedDate']
    }
</script>

<style scoped>
    .root {
        text-align: right;
        font-size: 1.5em;
    }

    .container {
        display: flex;
        justify-content: flex-end;
        margin: 0 50px;
    }

    .container2 {
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        margin-left: 20px;
    }

    .writer {
        text-align: left;
        flex: 1;
        font-size: 1.3em;
    }

    .createdDate {
        flex: 1;
    }
</style>