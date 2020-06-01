<template>
    <Button @click="submit">로그인</Button>
</template>

<script>
    import {mapActions} from 'vuex'

    export default {
        name: "LoginButton",
        methods: {
            ...mapActions({
                login: 'AUTH_LOGIN'
            }),
            submit() {
                this.login()
                    .then(() => {
                        this.$router.push('/')
                    })
            }
        }
    }
</script>

<style scoped>

</style>