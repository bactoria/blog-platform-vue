<template>
    <Button @click="submit">로그아웃</Button>
</template>

<script>
    import {mapActions} from 'vuex'

    export default {
        name: "LogoutButton",
        methods: {
            ...mapActions({
                logout: 'AUTH_LOGOUT'
            }),
            submit() {
                this.logout()
                    .then(() => {
                        this.$router.push('/login')
                    })
            }
        }
    }
</script>

<style scoped>

</style>