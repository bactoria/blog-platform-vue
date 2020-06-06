<template>
    <div class="root" :style="style">
        <img class="img" :src="src"/>
    </div>
</template>

<script>
    export default {
        name: "ProfileImage",
        props: ['src', 'size'],
        computed: {
            style() {
                return {
                    'width': `${this.size}px`,
                    'height': `${this.size}px`,
                };
            }
        }
    }
</script>

<style scoped>
    .root {
        border-radius: 70%;
        overflow: hidden;
    }
    .img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
</style>