<template>
    <div>
        <input @input="updateUserId" placeholder="ID">
        <input @input="updateUserPwd" placeholder="PWD">
        <LoginButton></LoginButton>
    </div>
</template>

<script>
    import LoginButton from "./LoginButton";
    import { mapMutations } from "vuex";

    export default {
        name: "LoginTemplate",
        components: {LoginButton},
        methods: {
            ...mapMutations([
                'UPDATE_LOGIN_USER_ID',
                'UPDATE_LOGIN_USER_PWD',
            ]),
            updateUserId (e) {
                this.UPDATE_LOGIN_USER_ID(e.target.value)
            },
            updateUserPwd (e) {
                this.UPDATE_LOGIN_USER_PWD(e.target.value)
            }
        }
    }
</script>

<style scoped>

</style>